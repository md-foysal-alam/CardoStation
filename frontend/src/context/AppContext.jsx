import { createContext, useContext, useState, useEffect } from 'react';

// Use environment variable or fallback to localhost
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const EMPTY_CONTACT_FORM = {
  name: '',
  email: '',
  service: 'Custom Software Development',
  budget: '$25k - $50k',
  message: '',
};

const AppContext = createContext();

export function AppProvider({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('EN');
  const [selectedProductModal, setSelectedProductModal] = useState(null);
  const [selectedServiceModal, setSelectedServiceModal] = useState(null);
  const [productCategoryFilter, setProductCategoryFilter] = useState('All');
  const [techTab, setTechTab] = useState('Frontend');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Calculator
  const [calcPlatform, setCalcPlatform] = useState('web');
  const [calcScope, setCalcScope] = useState('medium');
  const [calcAddons, setCalcAddons] = useState({
    auth: true, payment: false, ai: false, cloud: true, devops: false,
  });

  const [calculatedCost, setCalculatedCost] = useState({
    budget: '$15,000 - $25,000',
    weeks: '6 - 10 Weeks',
  });

  // Contact
  const [contactForm, setContactForm] = useState(EMPTY_CONTACT_FORM);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [bookingMode, setBookingMode] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState(null);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // REAL API submission
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setFormError(null);

    try {
      const res = await fetch(`${API_URL}/client/insertClient`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:     contactForm.name.trim(),
          email:    contactForm.email.trim(),
          interest: contactForm.service,
          budget:   contactForm.budget,
          message:  contactForm.message.trim(),
        }),
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.success) {
        throw new Error(json.error || `Request failed (${res.status})`);
      }

      setFormSubmitted(true);
      setContactForm(EMPTY_CONTACT_FORM);
    } catch (err) {
      setFormError(err.message || 'Network error — please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const resetContactForm = () => {
    setFormSubmitted(false);
    setFormError(null);
    setContactForm(EMPTY_CONTACT_FORM);
  };

  const translations = {
    EN: {
      headline: 'Engineering Scalable Products & Enterprise Digital Solutions',
      subhead: 'We craft custom software applications for global clients and operate high-performance proprietary SaaS platforms built for ultimate scale.',
      ctaServices: 'Explore Our Services',
      ctaProducts: 'Discover Our Products',
      calcTitle: 'Interactive Project Estimator',
      calcSub: 'Get an instant estimation of your software build budget and delivery timeline.',
    },
  };

  const value = {
    scrolled, setScrolled, lang, setLang,
    selectedProductModal, setSelectedProductModal,
    selectedServiceModal, setSelectedServiceModal,
    productCategoryFilter, setProductCategoryFilter,
    techTab, setTechTab,
    isMobileMenuOpen, setIsMobileMenuOpen,
    calcPlatform, setCalcPlatform,
    calcScope, setCalcScope,
    calcAddons, setCalcAddons,
    calculatedCost,
    contactForm, setContactForm,
    formSubmitted, handleContactSubmit,
    submitting, formError, resetContactForm,
    bookingMode, setBookingMode,
    t: translations[lang],
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useApp = () => useContext(AppContext);