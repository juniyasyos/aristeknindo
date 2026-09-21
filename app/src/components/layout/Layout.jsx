import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingActions from './FloatingActions';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-slate-text bg-tech-grid">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
