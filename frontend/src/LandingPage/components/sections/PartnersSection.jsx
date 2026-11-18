import { Cloud, Globe, Server, Cpu, Zap } from 'lucide-react';

/*
  Brand colors (same as the rest of the site)
  Cardo purple : #7c73e6
  Tech green   : #76B900
*/

const PARTNERS = [
  { name: 'AWS Partner', Icon: Cloud, color: 'text-[#7c73e6]' },
  { name: 'Google Cloud', Icon: Globe, color: 'text-[#76B900]' },
  { name: 'Microsoft Azure', Icon: Server, color: 'text-[#7c73e6]' },
  { name: 'Docker Ecosystem', Icon: Cpu, color: 'text-[#76B900]' },
  { name: 'Vercel Enterprise', Icon: Zap, color: 'text-[#7c73e6]' },
];

export default function PartnersSection() {
  return (
    <section className="border-y border-[#7c73e6]/20 bg-[#7c73e6]/5 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-bold uppercase tracking-widest text-[#7c73e6]">
          Enterprise Tech Ecosystem &amp; Cloud Partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {PARTNERS.map(({ name, Icon, color }) => (
            <span
              key={name}
              className="group flex items-center gap-2 rounded-xl border border-[#7c73e6]/25 bg-white px-4 py-2 text-lg font-bold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#76B900] hover:text-[#7c73e6] hover:shadow-md hover:shadow-[#7c73e6]/15"
            >
              <Icon className={`h-5 w-5 ${color}`} aria-hidden="true" /> {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
