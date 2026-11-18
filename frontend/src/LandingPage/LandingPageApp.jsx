import { AppProvider } from '../context/AppContext';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import HeroSection from './components/sections/HeroSection';
import PartnersSection from './components/sections/PartnersSection';
import ProductsSection from './components/sections/ProductsSection';
import ServicesSection from './components/sections/ServicesSection';
import TechStackSection from './components/sections/TechStackSection';
import CaseStudiesSection from './components/sections/CaseStudiesSection';
import ContactSection from './components/sections/ContactSection';

import ProductModal from './components/modals/ProductModal';

export function LandingPageApp() {
  return (
      <AppProvider>
      <div className="min-h-screen bg-#f1f1f3 text-slate-800 font-sans selection:bg-blue-600 selection:text-white relative overflow-x-hidden">
        <div className="fixed top-0 left-1/4 w-96 h-96 bg-blue-100/60 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="fixed bottom-1/3 right-10 w-[500px] h-[500px] bg-sky-100/60 rounded-full blur-[140px] pointer-events-none z-0"></div>

        <Navbar />
        <HeroSection />
        <PartnersSection />
        <ProductsSection />
        <ServicesSection />
        <TechStackSection />
        <CaseStudiesSection />
        <ContactSection />
        <Footer />
        <ProductModal />
      </div>
    </AppProvider>
  );
}