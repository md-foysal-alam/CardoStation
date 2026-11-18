import { useEffect, useRef } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useApp } from '../../../context/AppContext';
import logoImage from '../../../assets/logo.png';

/*
  Brand colors
  Cardo purple : #7c73e6   (primary)
  Tech green   : #76B900   (accent)
  Purple hover : #6a60d9   (slightly darker shade of the purple)
*/

const NAV_LINKS = [
  { href: '#products', label: 'Products' },
  { href: '#services', label: 'Services' },
  { href: '#tech-stack', label: 'Tech Stack' },
  { href: '#case-studies', label: 'Case Studies' },
  { href: '#case-studies', label: 'Cloud' },
  { href: '#case-studies', label: 'Authentication' },
  { href: '#case-studies', label: 'Database' },
];

export default function Navbar() {
  const { scrolled, isMobileMenuOpen, setIsMobileMenuOpen } = useApp();
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const closeMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onPointerDown = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) closeMenu();
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [isMobileMenuOpen]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 px-3 transition-[padding] duration-300 sm:px-4 ${scrolled ? 'pt-2' : 'pt-3 sm:pt-4'}`}>
      <div
        ref={menuRef}
        className={`mx-auto max-w-7xl rounded-2xl border border-[#7c73e6]/25 bg-white/95 px-4 backdrop-blur-md transition-shadow duration-300 sm:px-6 lg:px-8 ${
          scrolled ? 'shadow-lg shadow-[#7c73e6]/15' : 'shadow-sm'
        }`}
      >
        <div className="flex items-center justify-between py-2 md:grid md:grid-cols-[1fr_auto_1fr]">
          {/* Logo */}
          <a href="#" className="group flex items-center justify-self-start" aria-label="CardoStation home">
            <img src={logoImage} alt="CardoStation" className="block h-9 w-auto object-contain sm:h-11" />
          </a>

          {/* Desktop nav */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 rounded-full border border-[#7c73e6]/20 bg-white px-4 py-1 backdrop-blur-md md:flex"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="relative rounded-full px-3 py-1.5 text-sm font-semibold text-slate-600 transition-colors hover:text-[#7c73e6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c73e6] after:absolute after:inset-x-3 after:bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-[#76B900] after:transition-transform hover:after:scale-x-100"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center justify-self-end md:flex">
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-xl bg-[#7c73e6] px-4 py-2 text-sm font-bold text-white shadow-md shadow-[#7c73e6]/30 transition-all hover:bg-[#76B900] hover:shadow-[#76B900]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#76B900] focus-visible:ring-offset-2 active:scale-95"
            >
              Contact us
              <ArrowRight className="h-4 w-4 text-[#76B900] transition-all group-hover:translate-x-1 group-hover:text-white" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#7c73e6] transition-colors hover:bg-[#7c73e6]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c73e6] md:hidden"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="mt-3 space-y-1 border-t border-[#7c73e6]/20 pt-3 pb-3 md:hidden">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="block rounded-lg border-l-4 border-transparent px-3 py-2 font-semibold text-slate-700 transition-colors hover:border-[#76B900] hover:bg-[#7c73e6]/10 hover:text-[#7c73e6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c73e6]"
              >
                {label}
              </a>
            ))}

            <div className="mt-2 flex flex-col gap-3 border-t border-[#7c73e6]/20 pt-3">
              <a
                href="#contact"
                onClick={closeMenu}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#7c73e6] px-4 py-3 text-sm font-bold text-white transition-all hover:bg-[#76B900] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#76B900] active:scale-95"
              >
                Contact us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
