import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import { useLanguage } from './context/LanguageContext';

const ROUTE_META = {
  '/': {
    id: "PT. Aris Teknindo Mandiri | Industrial Engineering & Automation Contractor",
    en: "PT. Aris Teknindo Mandiri | Industrial Engineering & Automation Contractor"
  },
  '/about': {
    id: "Tentang Kami & Workshop Babelan | PT. Aris Teknindo Mandiri",
    en: "About Us & Babelan Workshop | PT. Aris Teknindo Mandiri"
  },
  '/services': {
    id: "Layanan Permesinan Bubut/CNC & Otomasi PLC | PT. Aris Teknindo Mandiri",
    en: "Machining, Fabrication & PLC Automation | PT. Aris Teknindo Mandiri"
  },
  '/products': {
    id: "Suku Cadang Industri & 29+ Brand Impor | PT. Aris Teknindo Mandiri",
    en: "Industrial Spare Parts & 29+ Global Brands | PT. Aris Teknindo Mandiri"
  },
  '/projects': {
    id: "Portofolio Proyek & Rekam Jejak Lapangan | PT. Aris Teknindo Mandiri",
    en: "Project Portfolio & Field Track Record | PT. Aris Teknindo Mandiri"
  },
  '/contact': {
    id: "Hubungi Kami & Request for Quotation (RFQ) | PT. Aris Teknindo Mandiri",
    en: "Contact Us & Request for Quotation (RFQ) | PT. Aris Teknindo Mandiri"
  }
};

function RouteEffect() {
  const { pathname } = useLocation();
  const { lang } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    const meta = ROUTE_META[pathname] || ROUTE_META['/'];
    document.title = meta[lang] || meta.id;
  }, [pathname, lang]);

  return null;
}

export default function App() {
  return (
    <Layout>
      <RouteEffect />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}
