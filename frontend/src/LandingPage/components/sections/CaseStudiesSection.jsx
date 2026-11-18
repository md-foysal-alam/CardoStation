import { BarChart3 } from 'lucide-react';
import { CASE_STUDIES } from '../../data/siteData';

/*
  Brand colors (same as Navbar, Footer and the modals)
  Cardo purple : #7c73e6
  Tech green   : #76B900
*/

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="relative z-10 bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl space-y-3 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#7c73e6]/25 bg-[#7c73e6]/10 px-3 py-1 text-xs font-bold text-[#7c73e6]">
            <BarChart3 className="h-3.5 w-3.5 text-[#76B900]" aria-hidden="true" /> Proven Impact
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900">Client Transformation Stories</h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-[#7c73e6] to-[#76B900]" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {CASE_STUDIES.map((study, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between rounded-2xl border border-[#7c73e6]/25 border-t-4 border-t-[#7c73e6] bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#76B900] hover:border-t-[#76B900] hover:shadow-lg hover:shadow-[#7c73e6]/15"
            >
              <div>
                <div className="mb-1 text-xs font-bold text-[#7c73e6]">{study.client}</div>
                <h3 className="mb-3 text-lg font-bold text-slate-900">{study.title}</h3>
                <p className="mb-6 text-sm text-slate-600">{study.summary}</p>
              </div>

              <div>
                <div className="mb-4 grid grid-cols-2 gap-2 rounded-xl border border-[#7c73e6]/20 bg-[#7c73e6]/5 p-3">
                  <div>
                    <span className="block text-[10px] font-bold text-slate-500">Metric Impact</span>
                    <span className="text-sm font-extrabold text-[#7c73e6]">{study.metrics}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-slate-500">Performance</span>
                    <span className="text-sm font-extrabold text-[#5c9400]">{study.latency}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {study.tags.map((t, i) => (
                    <span
                      key={i}
                      className="rounded-md border border-[#7c73e6]/25 bg-[#7c73e6]/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}