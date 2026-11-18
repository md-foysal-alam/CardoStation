import {
  Sparkles, ArrowRight, Layers, Activity, Globe, Server,
  Cpu, Database, ShieldCheck,
} from 'lucide-react';
import { useApp } from '../../../context/AppContext';

/*
  Brand colors (same as Navbar, Footer, modals, Case Studies and Contact)
  Cardo purple : #7c73e6
  Tech green   : #76B900   (#5c9400 is used for green text on white for readability)
*/

const STATS = [
  { value: '50+', label: 'Enterprise Apps Built', color: 'text-slate-900' },
  { value: '99.9%', label: 'Uptime SLA Guarantee', color: 'text-[#7c73e6]' },
  { value: '10M+', label: 'Users Served Globally', color: 'text-slate-900' },
  { value: '120+', label: 'Software Engineers', color: 'text-[#5c9400]' },
  { value: '25+', label: 'Countries Served', color: 'text-slate-900' },
  { value: '4.9/5', label: 'Client Satisfaction', color: 'text-[#7c73e6]' },
];

export default function HeroSection() {
  const { t } = useApp();

  return (
    <section id="hero" className="relative z-10 overflow-hidden bg-white pb-20 pt-32 md:pb-32 md:pt-44">
      {/* soft brand glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#7c73e6]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#76B900]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">

          {/* Left */}
          <div className="space-y-8 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#7c73e6]/25 bg-[#7c73e6]/10 px-3.5 py-1.5 text-xs font-bold tracking-wide text-[#7c73e6]">
              <Sparkles className="h-3.5 w-3.5 animate-pulse text-[#76B900]" aria-hidden="true" />
              <span>Next-Gen Enterprise Engineering &amp; SaaS</span>
            </div>

            <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Engineering Scalable{' '}
              <span className="bg-gradient-to-r from-[#7c73e6] to-[#76B900] bg-clip-text text-transparent">
                Products
              </span>{' '}
              &amp; Digital Platforms
            </h1>

            <p className="max-w-2xl text-lg font-normal leading-relaxed text-slate-600">{t.subhead}</p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#services"
                className="group flex items-center gap-2 rounded-xl bg-[#7c73e6] px-6 py-3.5 font-bold text-white shadow-lg shadow-[#7c73e6]/30 transition-all hover:scale-[1.02] hover:bg-[#76B900] hover:shadow-[#76B900]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#76B900] focus-visible:ring-offset-2 active:scale-95"
              >
                {t.ctaServices}
                <ArrowRight className="h-4 w-4 text-[#76B900] transition-all group-hover:translate-x-1 group-hover:text-white" aria-hidden="true" />
              </a>
              <a
                href="#products"
                className="flex items-center gap-2 rounded-xl border border-[#7c73e6]/30 bg-white px-6 py-3.5 font-bold text-slate-800 transition-all hover:border-[#76B900] hover:bg-[#7c73e6]/5 hover:text-[#7c73e6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c73e6]"
              >
                <Layers className="h-4 w-4 text-[#7c73e6]" aria-hidden="true" /> {t.ctaProducts}
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-[#7c73e6]/20 pt-8 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6">
              {STATS.map(({ value, label, color }) => (
                <div key={label}>
                  <div className={`text-xl font-black sm:text-2xl lg:text-3xl ${color}`}>{value}</div>
                  <div className="mt-1 text-[10px] font-semibold text-slate-500 sm:text-xs">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Architecture Widget */}
          <div className="relative lg:col-span-5">
            <div className="group relative mx-auto max-w-md rounded-2xl border border-[#7c73e6]/25 border-t-4 border-t-[#7c73e6] bg-white p-5 shadow-xl shadow-[#7c73e6]/15 transition-all duration-500 hover:border-[#76B900] hover:border-t-[#76B900] lg:max-w-none">
              <div className="mb-4 flex items-center justify-between border-b border-[#7c73e6]/20 pb-4">
                <div className="flex items-center gap-2">
                  <span className="block h-3 w-3 rounded-full bg-rose-400"></span>
                  <span className="block h-3 w-3 rounded-full bg-amber-400"></span>
                  <span className="block h-3 w-3 rounded-full bg-[#76B900]"></span>
                  <span className="ml-2 font-mono text-xs font-semibold text-slate-500">CardoStation-cloud-sys</span>
                </div>
                <div className="flex items-center gap-1 rounded bg-[#76B900]/15 px-2 py-0.5 font-mono text-[10px] font-bold text-[#4f7d00]">
                  <Activity className="h-3 w-3 animate-spin" aria-hidden="true" /> RUNNING
                </div>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between rounded-lg border border-[#7c73e6]/20 bg-[#7c73e6]/5 p-3 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="rounded bg-[#7c73e6]/15 p-2 text-[#7c73e6]"><Globe className="h-4 w-4" aria-hidden="true" /></div>
                    <div>
                      <div className="font-bold text-slate-900">Edge API Gateway</div>
                      <div className="text-[10px] text-slate-500">Latency: 12ms • HTTPS SSL</div>
                    </div>
                  </div>
                  <span className="rounded border border-[#7c73e6]/25 bg-[#7c73e6]/15 px-2 py-0.5 text-[10px] font-bold text-[#7c73e6]">ACTIVE</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1 rounded-lg border border-[#7c73e6]/20 bg-[#7c73e6]/5 p-3">
                    <div className="flex items-center justify-between">
                      <Server className="h-3.5 w-3.5 text-[#7c73e6]" aria-hidden="true" />
                      <span className="rounded bg-[#7c73e6]/15 px-1.5 text-[9px] font-bold text-[#7c73e6]">Node.js</span>
                    </div>
                    <div className="mt-1 text-xs font-bold text-slate-900">Auth Engine</div>
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-[#7c73e6]/15">
                      <div className="h-full w-[65%] rounded-full bg-[#7c73e6]"></div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 rounded-lg border border-[#7c73e6]/20 bg-[#7c73e6]/5 p-3">
                    <div className="flex items-center justify-between">
                      <Cpu className="h-3.5 w-3.5 text-[#7c73e6]" aria-hidden="true" />
                      <span className="rounded bg-[#76B900]/15 px-1.5 text-[9px] font-bold text-[#4f7d00]">Go Service</span>
                    </div>
                    <div className="mt-1 text-xs font-bold text-slate-900">SaaS VFS Pipeline</div>
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-[#76B900]/20">
                      <div className="h-full w-[88%] rounded-full bg-[#76B900]"></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-[#7c73e6]/20 bg-[#7c73e6]/5 p-3">
                  <div className="flex items-center gap-2.5">
                    <Database className="h-4 w-4 text-[#5c9400]" aria-hidden="true" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">PostgreSQL + Redis</div>
                      <div className="text-[10px] text-slate-500">Distributed Multi-AZ Storage</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-[#5c9400]">SYNCED</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-[#7c73e6]/20 pt-3 text-[11px] text-slate-500">
                <span className="flex items-center gap-1.5 font-semibold">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#7c73e6]" aria-hidden="true" /> CardoStation Enterprise Standard
                </span>
                <span className="font-bold text-[#7c73e6]">ISO 27001</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}