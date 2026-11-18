import { useApp } from '../../../context/AppContext';
import { TECH_STACK_DATA } from '../../data/siteData';

/*
  Brand colors (same as the rest of the site)
  Cardo purple : #7c73e6
  Tech green   : #76B900
*/

export default function TechStackSection() {
  const { techTab, setTechTab } = useApp();

  return (
    <section id="tech-stack" className="relative z-10 border-t border-[#7c73e6]/20 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl space-y-3 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900">Modern Engineering Stack</h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-[#7c73e6] to-[#76B900]" aria-hidden="true" />
          <p className="text-sm text-slate-600">
            We strictly utilize resilient, battle-tested programming languages, frameworks, and database architectures.
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-1 rounded-xl border border-[#7c73e6]/25 bg-[#7c73e6]/5 p-1">
            {Object.keys(TECH_STACK_DATA).map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setTechTab(category)}
                aria-pressed={techTab === category}
                className={`rounded-lg px-5 py-2 text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c73e6] ${
                  techTab === category
                    ? 'bg-[#7c73e6] text-white shadow-md shadow-[#7c73e6]/30'
                    : 'text-slate-600 hover:bg-[#7c73e6]/10 hover:text-[#7c73e6]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {TECH_STACK_DATA[techTab].map((item, idx) => (
            <div
              key={idx}
              className="group space-y-2 rounded-xl border border-[#7c73e6]/25 border-t-4 border-t-[#7c73e6] bg-white p-4 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-[#76B900] hover:border-t-[#76B900] hover:shadow-md hover:shadow-[#7c73e6]/15"
            >
              <div className="text-2xl">{item.icon}</div>
              <div className="text-sm font-bold text-slate-900 transition-colors group-hover:text-[#7c73e6]">{item.name}</div>
              <div className="rounded-md border border-[#76B900]/40 bg-[#76B900]/15 py-0.5 font-mono text-[10px] font-semibold text-[#4f7d00]">
                {item.level}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}