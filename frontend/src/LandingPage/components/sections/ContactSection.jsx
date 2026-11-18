import {
  Building2, MapPin, Mail, Phone, Calendar,
  CheckCircle2, Send, AlertCircle, Loader2,
} from 'lucide-react';

import { useApp } from '../../../context/AppContext';

/*
  Brand colors (same as Navbar, Footer, modals and Case Studies)
  Cardo purple : #7c73e6
  Tech green   : #76B900
*/

const INPUT_CLASS =
  'w-full rounded-xl border border-[#7c73e6]/30 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#7c73e6] focus:outline-none focus:ring-2 focus:ring-[#7c73e6]/30';

const LABEL_CLASS = 'mb-1.5 block text-xs font-bold text-slate-700';

const INFO_CARD_CLASS =
  'flex items-start gap-4 rounded-xl border border-[#7c73e6]/25 bg-white p-4 shadow-sm transition-all hover:border-[#76B900] hover:shadow-md hover:shadow-[#7c73e6]/10';

const SLOT_CLASS =
  'w-full rounded bg-[#7c73e6]/10 py-1.5 font-mono text-[11px] font-bold text-[#7c73e6] transition-colors hover:bg-[#76B900] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c73e6]';

export default function ContactSection() {
  const {
    contactForm, setContactForm, formSubmitted,
    handleContactSubmit, bookingMode, setBookingMode,
    submitting, formError, resetContactForm,
  } = useApp();

  return (
    <section id="contact" className="relative z-10 border-t border-[#7c73e6]/20 bg-[#7c73e6]/5 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

          {/* Left — Info */}
          <div className="space-y-8 lg:col-span-5">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#7c73e6]/25 bg-[#7c73e6]/10 px-3 py-1 text-xs font-bold text-[#7c73e6]">
                <Building2 className="h-3.5 w-3.5 text-[#76B900]" aria-hidden="true" /> Global Offices
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Let's Build Your Next Digital Product
              </h2>
              <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#7c73e6] to-[#76B900]" aria-hidden="true" />
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Have a software project in mind or want to learn more about licensing our SaaS tools?
                Reach out to CardoStation Ltd. engineering team directly.
              </p>
            </div>

            <div className="space-y-4">
              <div className={INFO_CARD_CLASS}>
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-[#7c73e6]" aria-hidden="true" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Dhaka R&amp;D Center</h4>
                  <p className="mt-0.5 text-xs text-slate-600">
                    CardoStation Ltd, Tech Park Tower, Level 8, Gulshan 2, Dhaka, Bangladesh
                  </p>
                </div>
              </div>
              <div className={INFO_CARD_CLASS}>
                <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-[#7c73e6]" aria-hidden="true" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Direct Email</h4>
                  <p className="mt-0.5 text-xs text-slate-600">
                    contact@CardoStation.com • engineering@CardoStation.com
                  </p>
                </div>
              </div>
              <div className={INFO_CARD_CLASS}>
                <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-[#7c73e6]" aria-hidden="true" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Phone Support</h4>
                  <p className="mt-0.5 text-xs text-slate-600">
                    +880 1700-000000 / +1 (800) 555-CARD
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setBookingMode(false)}
                aria-pressed={!bookingMode}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c73e6] ${
                  !bookingMode
                    ? 'bg-[#7c73e6] text-white shadow-md shadow-[#7c73e6]/30'
                    : 'border border-[#7c73e6]/30 bg-white text-[#7c73e6] hover:bg-[#7c73e6]/10'
                }`}
              >
                Message Form
              </button>
              <button
                type="button"
                onClick={() => setBookingMode(true)}
                aria-pressed={bookingMode}
                className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c73e6] ${
                  bookingMode
                    ? 'bg-[#7c73e6] text-white shadow-md shadow-[#7c73e6]/30'
                    : 'border border-[#7c73e6]/30 bg-white text-[#7c73e6] hover:bg-[#7c73e6]/10'
                }`}
              >
                <Calendar className="h-3.5 w-3.5" aria-hidden="true" /> Book 1-on-1 Consultation
              </button>
            </div>
          </div>

          {/* Right — Form / Calendar */}
          <div className="rounded-2xl border border-[#7c73e6]/25 border-t-4 border-t-[#7c73e6] bg-white p-6 shadow-md shadow-[#7c73e6]/10 sm:p-8 lg:col-span-7">
            {!bookingMode ? (
              formSubmitted ? (
                <div className="space-y-4 py-16 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#76B900]/15 text-[#5c9400]">
                    <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
                  <p className="mx-auto max-w-md text-sm text-slate-600">
                    Thank you for reaching out to CardoStation Ltd. Our solutions architect will review
                    your project details and contact you within 12 hours.
                  </p>
                  <button
                    type="button"
                    onClick={resetContactForm}
                    className="mt-2 rounded-xl bg-[#7c73e6] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-[#7c73e6]/30 transition-all hover:bg-[#76B900] hover:shadow-[#76B900]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#76B900] focus-visible:ring-offset-2 active:scale-95"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className={LABEL_CLASS}>Full Name</label>
                      <input
                        id="contact-name"
                        type="text" required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="John Doe"
                        className={INPUT_CLASS}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className={LABEL_CLASS}>Work Email</label>
                      <input
                        id="contact-email"
                        type="email" required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="john@company.com"
                        className={INPUT_CLASS}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-service" className={LABEL_CLASS}>Primary Interest</label>
                    <select
                      id="contact-service"
                      value={contactForm.service}
                      onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                      className={INPUT_CLASS}
                    >
                      <option>Custom Software Development</option>
                      <option>ExoDrive SaaS Enterprise License</option>
                      <option>UniVitalon Healthcare Solution</option>
                      <option>Cloud Infrastructure &amp; DevOps</option>
                      <option>AI &amp; Machine Learning Engine</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className={LABEL_CLASS}>
                      Project Scope / Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4} required
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Tell us about your technical requirements, goals, or timeline..."
                      className={INPUT_CLASS}
                    />
                  </div>

                  {formError && (
                    <div role="alert" className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700">
                      <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#7c73e6] py-3.5 text-sm font-bold text-white shadow-md shadow-[#7c73e6]/30 transition-all hover:bg-[#76B900] hover:shadow-[#76B900]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#76B900] focus-visible:ring-offset-2 active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-[#7c73e6]/50 disabled:shadow-none"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" aria-hidden="true" /> Send Technical Inquiry
                      </>
                    )}
                  </button>
                </form>
              )
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#7c73e6]/20 pb-4">
                  <div>
                    <h3 className="border-l-4 border-[#76B900] pl-3 text-lg font-bold text-slate-900">
                      Book 30-Min Discovery Call
                    </h3>
                    <p className="mt-1 pl-4 text-xs font-medium text-slate-500">
                      Select an open slot with our Chief Solutions Architect
                    </p>
                  </div>
                  <Calendar className="h-6 w-6 text-[#7c73e6]" aria-hidden="true" />
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  {['Mon, Oct 26', 'Tue, Oct 27', 'Wed, Oct 28'].map((day, i) => (
                    <div key={i} className="space-y-2 rounded-xl border border-[#7c73e6]/20 bg-[#7c73e6]/5 p-3">
                      <span className="block font-bold text-slate-800">{day}</span>
                      <button type="button" className={SLOT_CLASS}>10:00 AM</button>
                      <button type="button" className={SLOT_CLASS}>02:30 PM</button>
                      <button type="button" className={SLOT_CLASS}>04:00 PM</button>
                    </div>
                  ))}
                </div>

                <p className="text-center text-xs font-medium text-slate-500">
                  All consultation meetings include non-disclosure confidentiality assurance.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}