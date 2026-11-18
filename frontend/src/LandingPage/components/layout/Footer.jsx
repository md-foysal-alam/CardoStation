import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import logoImage from '../../../assets/logo.png';

/*
  Brand colors (same as Navbar)
  Cardo purple : #7c73e6
  Tech green   : #76B900
*/

const PRODUCT_LINKS = ['ExoDrive VFS', 'UniVitalon Health', 'AnyRide Logistics', 'OmniAI Engine'];
const SERVICE_LINKS = ['Custom Engineering', 'Cloud & DevOps', 'AI & ML Solutions', 'Mobile Apps'];
const LEGAL_LINKS = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/security', label: 'Security Vault' },
];

const YEAR = new Date().getFullYear();

/* Social links — replace each href with your real page URL */
const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/cardostation',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/cardostation',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/cardostation',
    path: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/cardostation',
    path: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@cardostation',
    path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
];

const LINK_CLASS =
  'relative inline-block transition-colors hover:text-[#7c73e6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c73e6] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-[#76B900] after:transition-transform hover:after:scale-x-100';

const HEADING_CLASS =
  'border-l-4 border-[#76B900] pl-2 text-xs font-bold uppercase tracking-wider text-[#7c73e6]';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setEmail('');
  };

  return (
    <footer className="relative z-10 mx-3 mb-3 rounded-2xl border border-[#7c73e6]/25 bg-white/95 pb-10 pt-8 text-slate-600 shadow-sm shadow-[#7c73e6]/15 backdrop-blur-md sm:mx-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 border-b border-[#7c73e6]/20 pb-6 md:grid-cols-12">
          {/* Brand */}
          <div className="space-y-4 md:col-span-4">
            <img src={logoImage} alt="CardoStation" className="block h-9 w-auto object-contain sm:h-11" />
            <p className="text-xs leading-relaxed text-slate-600">
              CardoStation Ltd. is a global technology engineering firm providing enterprise software
              development and managing high-growth proprietary SaaS products.
            </p>
            <p className="text-xs font-semibold text-slate-700">
              Reg No: 120984-BD • ISO 27001 Certified Stack
            </p>

          </div>

          {/* Products */}
          <nav aria-labelledby="footer-products" className="space-y-3 md:col-span-2">
            <h2 id="footer-products" className={HEADING_CLASS}>Products</h2>
            <ul className="space-y-2 text-xs text-slate-600">
              {PRODUCT_LINKS.map((name) => (
                <li key={name}>
                  <a href="#products" className={LINK_CLASS}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-labelledby="footer-services" className="space-y-3 md:col-span-2">
            <h2 id="footer-services" className={HEADING_CLASS}>Services</h2>
            <ul className="space-y-2 text-xs text-slate-600">
              {SERVICE_LINKS.map((name) => (
                <li key={name}>
                  <a href="#services" className={LINK_CLASS}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter */}
          <div className="space-y-4 md:col-span-4">
            <h2 className={HEADING_CLASS}>Subscribe To Tech Insights</h2>
            <p className="text-xs text-slate-600">
              Get monthly updates on enterprise software trends &amp; architecture case studies.
            </p>

            <form onSubmit={handleSubscribe} noValidate className="flex gap-2">
              <label htmlFor="newsletter-email" className="sr-only">Work email</label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Your work email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== 'idle') setStatus('idle');
                }}
                aria-invalid={status === 'error'}
                aria-describedby="newsletter-status"
                className="flex-1 rounded-lg border border-[#7c73e6]/30 bg-white px-3 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#7c73e6] focus:outline-none focus:ring-2 focus:ring-[#7c73e6]/40"
              />
              <button
                type="submit"
                className="group flex items-center gap-1.5 rounded-lg bg-[#7c73e6] px-4 py-2 text-xs font-bold text-white shadow-md shadow-[#7c73e6]/30 transition-all hover:bg-[#76B900] hover:shadow-[#76B900]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#76B900] focus-visible:ring-offset-2 active:scale-95"
              >
                Subscribe
                <ArrowRight className="h-3.5 w-3.5 text-[#76B900] transition-all group-hover:translate-x-0.5 group-hover:text-white" aria-hidden="true" />
              </button>
            </form>

            <p
              id="newsletter-status"
              aria-live="polite"
              className={`text-xs font-semibold ${
                status === 'error' ? 'text-red-500' : status === 'success' ? 'text-[#5c9400]' : 'sr-only'
              }`}
            >
              {status === 'error' && 'Please enter a valid email address.'}
              {status === 'success' && 'Thanks — you’re subscribed!'}
            </p>

            {/* Social icons */}
            <ul aria-label="Social media" className="flex flex-wrap items-center gap-2 pt-1">
              {SOCIAL_LINKS.map(({ label, href, path }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`CardoStation on ${label}`}
                    title={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#7c73e6]/25 bg-[#7c73e6]/10 text-[#7c73e6] transition-all hover:-translate-y-0.5 hover:border-[#76B900] hover:bg-[#76B900] hover:text-white hover:shadow-md hover:shadow-[#76B900]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#76B900] focus-visible:ring-offset-2 active:scale-95"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                      <path d={path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-4 text-xs text-slate-600 sm:flex-row">
          <p>© {YEAR} CardoStation Ltd. All rights reserved. Built for Next-Gen Scale.</p>
          <nav aria-label="Legal" className="flex gap-4">
            {LEGAL_LINKS.map(({ href, label }) => (
              <Link key={href} to={href} className={LINK_CLASS}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}