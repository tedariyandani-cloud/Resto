import { LOUNGE_IMAGES } from '../data/loungeData';
import { SmartImage } from './SmartImage';

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute w-80 h-80 rounded-full bg-amber-warm/10 blur-[120px] top-20 right-10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with Unboxed Metadata */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">The Experience</p>
            <h2 className="font-serif text-3xl sm:text-5xl text-alabaster font-medium leading-tight text-balance">
              Where Nocturnal Elegance Meets <span className="italic text-gold">The Horizon</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 text-xs tracking-[0.16em] uppercase text-silver-muted shrink-0">
            <span className="text-alabaster">49th Floor</span>
            <span aria-hidden="true" className="text-gold">
              &middot;
            </span>
            <span className="tabular-nums">Open Daily 18:00 – 02:00 WIB</span>
          </div>
        </div>

        {/* Asymmetric Editorial Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Marquee Feature 01 — Full-width 2-Column Split Card */}
          <article className="lg:col-span-12 rounded-2xl bg-charcoal/70 border border-gold/20 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch hover:border-gold/45 transition-colors duration-200">
            <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[340px]">
              <SmartImage
                src={LOUNGE_IMAGES.heroSkyline}
                alt="360-degree view of Bundaran HI and Thamrin skyline from Cloud Lounge terrace"
                fallbackLabel="360° City Skyline Views"
                className="w-full h-full lg:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-charcoal/80" />
            </div>

            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <p className="text-xs font-mono tabular-nums uppercase tracking-[0.22em] text-gold mb-4">
                  01. Skyline Terrace
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl text-alabaster mb-4">
                  360° City Skyline Views
                </h3>
                <p className="text-sm sm:text-base text-silver-muted leading-relaxed font-light">
                  Perched atop Bundaran HI and Thamrin&apos;s iconic skyline, our open-air terrace
                  and glass-walled lounge deliver Jakarta&apos;s most coveted vantage point from
                  golden twilight into midnight.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-silver-muted tracking-[0.18em] uppercase">
                <span>Outdoor &amp; Indoor</span>
                <span className="text-gold">Level 49</span>
              </div>
            </div>
          </article>

          {/* Feature 02 — Artisanal Craft Cocktails */}
          <article className="lg:col-span-6 rounded-2xl bg-charcoal/70 border border-gold/20 overflow-hidden flex flex-col justify-between hover:border-gold/45 transition-colors duration-200">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <SmartImage
                src={LOUNGE_IMAGES.craftCocktail}
                alt="Smoked Cloud 49 Signature Negroni on obsidian marble bar"
                fallbackLabel="Artisanal Craft Cocktails"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-xs font-mono tabular-nums uppercase tracking-[0.22em] text-gold mb-3">
                  02. Mixology
                </p>
                <h3 className="font-serif text-2xl text-alabaster mb-3">
                  Artisanal Craft Cocktails
                </h3>
                <p className="text-sm text-silver-muted leading-relaxed font-light">
                  Curated by master mixologists using house-infused botanicals, rare single malts,
                  and bespoke cedar-smoke infusions designed to elevate every evening conversation.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-silver-muted tracking-[0.18em] uppercase">
                <span>Bespoke Mixology</span>
                <span className="text-gold">Rare Spirits</span>
              </div>
            </div>
          </article>

          {/* Feature 03 — Global Tapas & Wood-Fired Pizza */}
          <article className="lg:col-span-6 rounded-2xl bg-charcoal/70 border border-gold/20 overflow-hidden flex flex-col justify-between hover:border-gold/45 transition-colors duration-200">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <SmartImage
                src={LOUNGE_IMAGES.woodfiredDining}
                alt="Wood-fired truffle mushroom sourdough pizza on dark slate"
                fallbackLabel="Global Tapas & Wood-Fired Pizza"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-xs font-mono tabular-nums uppercase tracking-[0.22em] text-gold mb-3">
                  03. Culinary
                </p>
                <h3 className="font-serif text-2xl text-alabaster mb-3">
                  Global Tapas &amp; Wood-Fired Pizza
                </h3>
                <p className="text-sm text-silver-muted leading-relaxed font-light">
                  From 48-hour fermented truffle mushroom pizzas to Australian MB7+ Wagyu sliders,
                  our kitchen crafts refined shareable plates tailored for late-night dining.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-silver-muted tracking-[0.18em] uppercase">
                <span>Shareable Plates</span>
                <span className="text-gold">Artisanal Oven</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
