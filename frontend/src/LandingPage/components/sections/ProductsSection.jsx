import { Layers, Zap, CheckCircle2, ExternalLink } from 'lucide-react';
import { useApp } from '../../../context/AppContext';
import { PRODUCTS_DATA } from '../../data/siteData';

/*
  Brand colors (same as the rest of the site)
  Cardo purple : #7c73e6
  Tech green   : #76B900   (#5c9400 / #4f7d00 used for green text on light backgrounds)
*/

const CATEGORIES = ['All', 'Enterprise SaaS', 'Consumer Apps', 'Cloud Tools'];

export default function ProductsSection() {
  const { productCategoryFilter, setProductCategoryFilter, setSelectedProductModal } = useApp();

  const filteredProducts =
    productCategoryFilter === 'All'
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((p) => p.category === productCategoryFilter);

  return (
    <section id="products" className="relative z-10 bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#7c73e6]/25 bg-[#7c73e6]/10 px-3 py-1 text-xs font-bold text-[#7c73e6]">
            <Layers className="h-3.5 w-3.5 text-[#76B900]" aria-hidden="true" /> In-House SaaS Products
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Proprietary Tech Applications Built &amp; Operated By Us
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-[#7c73e6] to-[#76B900]" aria-hidden="true" />
          <p className="text-base text-slate-600">
            CardoStation Ltd. designs, engineers, and operates high-concurrency SaaS products used by thousands daily.
          </p>
        </div>

        <div className="mb-10 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-1 rounded-xl border border-[#7c73e6]/25 bg-[#7c73e6]/5 p-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setProductCategoryFilter(cat)}
                aria-pressed={productCategoryFilter === cat}
                className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c73e6] sm:text-sm ${
                  productCategoryFilter === cat
                    ? 'bg-[#7c73e6] font-bold text-white shadow-md shadow-[#7c73e6]/30'
                    : 'text-slate-600 hover:bg-[#7c73e6]/10 hover:text-[#7c73e6]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#7c73e6]/25 border-t-4 border-t-[#7c73e6] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#76B900] hover:border-t-[#76B900] hover:shadow-xl hover:shadow-[#7c73e6]/15 sm:p-8"
            >
              <div>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br from-[#7c73e6] to-[#76B900] p-[1px] shadow-md shadow-[#7c73e6]/20">
                      <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-white">
                        <Zap className="h-6 w-6 text-[#7c73e6]" aria-hidden="true" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-[#7c73e6]">{product.name}</h3>
                      <span className="text-xs font-semibold text-slate-500">{product.category}</span>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 rounded-full border border-[#76B900]/40 bg-[#76B900]/15 px-2.5 py-1 font-mono text-[11px] font-bold text-[#4f7d00]">
                    <span className="h-1.5 w-1.5 animate-ping rounded-full bg-[#76B900]"></span>
                    {product.status}
                  </span>
                </div>

                <p className="mb-2 text-sm font-bold text-slate-800">{product.tagline}</p>
                <p className="mb-6 text-sm leading-relaxed text-slate-600">{product.description}</p>

                <div className="mb-6 grid grid-cols-2 gap-2 text-xs font-medium text-slate-700">
                  {product.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-[#76B900]" aria-hidden="true" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#7c73e6]/20 pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {product.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="rounded-md border border-[#7c73e6]/25 bg-[#7c73e6]/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProductModal(product)}
                  className="flex items-center gap-1.5 rounded-lg border border-[#7c73e6]/30 bg-[#7c73e6]/10 px-4 py-2 text-xs font-bold text-[#7c73e6] transition-all hover:border-[#76B900] hover:bg-[#76B900] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#76B900] focus-visible:ring-offset-2 active:scale-95"
                >
                  Product Specs &amp; Demo <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}