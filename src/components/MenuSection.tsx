import { useState } from 'react';
import { MENU_DATA, MENU_TABS, type MenuCategory } from '../data/loungeData';

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('cocktails');
  const items = MENU_DATA[activeCategory];

  return (
    <section
      id="menu"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-charcoal/50 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Curated Selections</p>
          <h2 className="font-serif text-3xl sm:text-5xl text-alabaster font-medium mb-4 text-balance">
            The Cloud 49 Menu
          </h2>
          <p className="text-sm text-silver-muted font-light leading-relaxed">
            Crafted with prime ingredients and fine spirits. Prices are in thousands of Rupiah
            (IDR) and subject to service charge &amp; government tax.
          </p>
        </div>

        {/* Interactive Category Tabs */}
        <div
          role="tablist"
          aria-label="Menu categories"
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-10 border-b border-white/10 pb-3 mb-12"
        >
          {MENU_TABS.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(tab.id)}
                className={`relative py-2.5 px-2 text-xs sm:text-sm uppercase tracking-[0.18em] font-medium transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded ${
                  isActive ? 'text-gold' : 'text-silver-muted hover:text-alabaster'
                }`}
              >
                {tab.label}
                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 left-0 h-px bg-gold transition-all duration-200 ${
                    isActive ? 'w-full' : 'w-0'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <div
          key={activeCategory}
          role="tabpanel"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-up"
        >
          {items.map((item) => (
            <article
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-obsidian/80 border border-gold/15 hover:border-gold/45 transition-colors duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-alabaster font-medium leading-snug">
                    {item.name}
                  </h3>
                  <span className="font-mono tabular-nums text-sm text-gold font-medium shrink-0 pt-1 whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-amber-warm/90 mb-3">
                  {item.tag}
                </p>
                <p className="text-xs sm:text-sm text-silver-muted font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Menu Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-silver-muted italic">
            * Full bottle service menu, vintage champagne list, and zero-proof botanical cocktails
            available upon request at the lounge.
          </p>
        </div>
      </div>
    </section>
  );
}
