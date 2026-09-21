import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const dist = path.resolve(root, 'app/dist');
const index = '/tmp/aristeknindo-git-index';

console.log('🚀 Menyiapkan dan mengunggah build ke branch gh-pages...');
try {
  execSync(`rm -f "${index}"`);
  execSync(`git add -A`, { env: { ...process.env, GIT_DIR: `${root}/.git`, GIT_WORK_TREE: dist, GIT_INDEX_FILE: index } });
  const tree = execSync(`git write-tree`, { env: { ...process.env, GIT_DIR: `${root}/.git`, GIT_INDEX_FILE: index } }).toString().trim();
  const commit = execSync(`git commit-tree ${tree} -m "deploy: GitHub Pages update"`, { env: { ...process.env, GIT_DIR: `${root}/.git` } }).toString().trim();
  execSync(`git push origin ${commit}:refs/heads/gh-pages --force`, { env: { ...process.env, GIT_DIR: `${root}/.git` } });
  execSync(`rm -f "${index}"`);
  console.log('✅ Berhasil di-deploy ke GitHub Pages: https://juniyasyos.github.io/aristeknindo/');
} catch (err) {
  console.error('❌ Deploy gagal:', err.message);
  process.exit(1);
}
