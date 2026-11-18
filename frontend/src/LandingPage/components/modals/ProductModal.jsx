import { ArrowRight, X, Zap } from 'lucide-react';
import { useApp } from '../../../context/AppContext';

/*
  Brand colors (same as Navbar and Footer)
  Cardo purple : #7c73e6
  Tech green   : #76B900
*/

export default function ProductModal() {
  const { selectedProductModal, setSelectedProductModal } = useApp();
  if (!selectedProductModal) return null;

  const close = () => setSelectedProductModal(null);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-md">
      <div
        role="dialog"
        aria-modal="true"
        aria-label={selectedProductModal.name}
        className="relative w-full max-w-2xl space-y-6 rounded-2xl border border-[#7c73e6]/25 bg-white/95 p-6 shadow-2xl shadow-[#7c73e6]/20 sm:p-8"
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-lg bg-[#7c73e6]/10 p-2 text-[#7c73e6] transition-colors hover:bg-[#7c73e6] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c73e6]"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="flex items-center gap-3 pr-12">
          <div className="rounded-xl border border-[#7c73e6]/25 bg-[#7c73e6]/10 p-3 text-[#7c73e6]">
            <Zap className="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">{selectedProductModal.name}</h3>
            <span className="text-xs font-semibold text-slate-500">
              {selectedProductModal.category} • <span className="text-[#5c9400]">{selectedProductModal.status}</span>
            </span>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-slate-600">{selectedProductModal.description}</p>

        <div className="space-y-2 rounded-xl border border-[#7c73e6]/20 border-l-4 border-l-[#76B900] bg-[#7c73e6]/5 p-4">
          <span className="block text-xs font-bold uppercase tracking-wider text-[#7c73e6]">Performance Metric</span>
          <div className="text-2xl font-black text-slate-900">{selectedProductModal.metrics}</div>
        </div>

        <div>
          <span className="mb-2 block text-xs font-bold text-slate-500">Core Tech Stack</span>
          <div className="flex flex-wrap gap-2">
            {selectedProductModal.tech.map((t, idx) => (
              <span
                key={idx}
                className="rounded-md border border-[#7c73e6]/25 bg-[#7c73e6]/10 px-3 py-1 font-mono text-xs font-semibold text-slate-800 transition-colors hover:border-[#76B900] hover:bg-[#76B900]/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 border-t border-[#7c73e6]/20 pt-4">
          <button
            type="button"
            onClick={close}
            className="rounded-xl border border-[#7c73e6]/30 bg-white px-4 py-2 text-xs font-bold text-[#7c73e6] transition-colors hover:bg-[#7c73e6]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c73e6]"
          >
            Close
          </button>
          <a
            href="#contact"
            onClick={close}
            className="group flex items-center gap-2 rounded-xl bg-[#7c73e6] px-5 py-2 text-xs font-bold text-white shadow-md shadow-[#7c73e6]/30 transition-all hover:bg-[#76B900] hover:shadow-[#76B900]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#76B900] focus-visible:ring-offset-2 active:scale-95"
          >
            Request Enterprise Demo
            <ArrowRight className="h-3.5 w-3.5 text-[#76B900] transition-all group-hover:translate-x-0.5 group-hover:text-white" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}