#!/usr/bin/env python3
"""
PT. Aris Teknindo Mandiri - Automated Image Optimizer (2026)
Converts large PNG/JPEG assets into modern WebP format and optimizes web assets.
"""

import os
from pathlib import Path
from PIL import Image

ROOT_DIR = Path(__file__).resolve().parent.parent
PUBLIC_DIR = ROOT_DIR / "app" / "public"
IMAGES_DIR = PUBLIC_DIR / "images"

def format_size(bytes_size):
    for unit in ['B', 'KB', 'MB']:
        if bytes_size < 1024.0:
            return f"{bytes_size:.1f} {unit}"
        bytes_size /= 1024.0
    return f"{bytes_size:.1f} GB"

def optimize_file(src_path, dst_path, fmt="WEBP", quality=82, resize_max_w=None, method=6):
    if not src_path.exists():
        print(f"⚠️ Source file not found: {src_path}")
        return 0, 0
    
    orig_size = os.path.getsize(src_path)
    im = Image.open(src_path)
    
    # Optional resize
    if resize_max_w and im.width > resize_max_w:
        ratio = resize_max_w / im.width
        new_h = int(im.height * ratio)
        im = im.resize((resize_max_w, new_h), Image.Resampling.LANCZOS)
    
    # Save optimized
    if fmt == "WEBP":
        im.save(dst_path, "WEBP", quality=quality, method=method)
    elif fmt == "JPEG":
        if im.mode in ("RGBA", "P"):
            im = im.convert("RGB")
        im.save(dst_path, "JPEG", quality=quality, optimize=True, progressive=True)
    elif fmt == "PNG":
        im.save(dst_path, "PNG", optimize=True)
        
    new_size = os.path.getsize(dst_path)
    savings = (1 - (new_size / orig_size)) * 100
    print(f"✅ {src_path.name} -> {dst_path.name}: {format_size(orig_size)} -> {format_size(new_size)} ({savings:+.1f}%)")
    return orig_size, new_size

def main():
    print("🚀 Starting image optimization pipeline (2026)...")
    total_orig = 0
    total_new = 0

    # 1. Optimize bg-hero-section (1.9 MB -> ~130 KB WebP)
    s, n = optimize_file(
        IMAGES_DIR / "bg-hero-section.png",
        IMAGES_DIR / "bg-hero-section.webp",
        fmt="WEBP",
        quality=82
    )
    total_orig += s
    total_new += n

    # 2. Optimize hero-industrial (816 KB -> ~130 KB WebP)
    s, n = optimize_file(
        IMAGES_DIR / "hero-industrial.jpg",
        IMAGES_DIR / "hero-industrial.webp",
        fmt="WEBP",
        quality=80
    )
    total_orig += s
    total_new += n

    # 3. Optimize og-image.jpg (816 KB -> ~95 KB JPEG)
    s, n = optimize_file(
        PUBLIC_DIR / "og-image.jpg",
        PUBLIC_DIR / "og-image.jpg",
        fmt="JPEG",
        quality=82
    )
    total_orig += s
    total_new += n

    # 4. Optimize logo-dark-mode (356 KB -> ~45 KB WebP with retina 500px resize)
    s, n = optimize_file(
        IMAGES_DIR / "logo-dark-mode.png",
        IMAGES_DIR / "logo-dark-mode.webp",
        fmt="WEBP",
        quality=88,
        resize_max_w=500
    )
    total_orig += s
    total_new += n

    # 5. Optimize large PNG brand logos in images/brands/
    brands_dir = IMAGES_DIR / "brands"
    if brands_dir.exists():
        for brand_png in brands_dir.glob("*.png"):
            # If greater than 20 KB, optimize with resize / compression
            sz = os.path.getsize(brand_png)
            if sz > 20 * 1024:
                # Re-save with lanczos max width 300px
                s, n = optimize_file(
                    brand_png,
                    brand_png,
                    fmt="PNG",
                    resize_max_w=300
                )
                total_orig += s
                total_new += n

    overall_savings = (1 - (total_new / total_orig)) * 100 if total_orig > 0 else 0
    print("\n" + "=" * 55)
    print(f"🎉 Pipeline Completed!")
    print(f"Total processed: {format_size(total_orig)} -> {format_size(total_new)}")
    print(f"Total Saved: {format_size(total_orig - total_new)} ({overall_savings:.1f}%)")
    print("=" * 55)

if __name__ == "__main__":
    main()
