import { Workflow, Check, ChevronRight } from 'lucide-react';

import { useApp } from '../../../context/AppContext';
import { SERVICES_DATA } from '../../data/siteData';

/*
  Brand colors (same as the rest of the site)
  Cardo purple : #7c73e6
  Tech green   : #76B900
*/

export default function ServicesSection() {
  const { setSelectedServiceModal } = useApp();

  return (
    <section id="services" className="relative z-10 border-y border-[#7c73e6]/20 bg-[#7c73e6]/5 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#7c73e6]/25 bg-[#7c73e6]/10 px-3 py-1 text-xs font-bold text-[#7c73e6]">
            <Workflow className="h-3.5 w-3.5 text-[#76B900]" aria-hidden="true" /> Enterprise B2B Services
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            End-to-End Software Engineering Services
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-[#7c73e6] to-[#76B900]" aria-hidden="true" />
          <p className="text-base text-slate-600">
            From ideation to deployment, we build high-concurrency systems, cloud infrastructure, and custom AI applications for startups and enterprise clients globally.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_DATA.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between rounded-2xl border border-[#7c73e6]/25 border-t-4 border-t-[#7c73e6] bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#76B900] hover:border-t-[#76B900] hover:shadow-lg hover:shadow-[#7c73e6]/15"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="rounded-xl border border-[#7c73e6]/25 bg-[#7c73e6]/10 p-3 text-[#7c73e6] transition-transform group-hover:scale-110">
                      <IconComp className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="rounded border border-[#76B900]/40 bg-[#76B900]/15 px-2.5 py-0.5 text-[10px] font-bold text-[#4f7d00]">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="mb-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-[#7c73e6]">{service.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-slate-600">{service.description}</p>

                  <div className="mb-6 space-y-2">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <Check className="h-3.5 w-3.5 shrink-0 text-[#76B900]" aria-hidden="true" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-4 flex flex-wrap gap-1 border-t border-[#7c73e6]/20 pt-4">
                    {service.stack.map((st, i) => (
                      <span
                        key={i}
                        className="rounded-md border border-[#7c73e6]/25 bg-[#7c73e6]/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-slate-700"
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedServiceModal(service)}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#7c73e6] py-2.5 text-xs font-bold text-white shadow-md shadow-[#7c73e6]/30 transition-all hover:bg-[#76B900] hover:shadow-[#76B900]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#76B900] focus-visible:ring-offset-2 active:scale-95"
                  >
                    Service Architecture &amp; Scope <ChevronRight className="h-4 w-4 text-[#76B900] group-hover:text-white" aria-hidden="true" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}