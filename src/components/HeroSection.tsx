import { ChevronDown } from 'lucide-react';
import { LOUNGE_IMAGES, VENUE_INFO } from '../data/loungeData';
import { SmartImage } from './SmartImage';

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
    >
      {/* Full-bleed Rooftop Skyline Backdrop */}
      <div className="absolute inset-0 z-0">
        <SmartImage
          src={LOUNGE_IMAGES.heroSkyline}
          alt="Cloud Lounge Jakarta 49th Floor Open-Air Rooftop overlooking Thamrin skyline"
          fallbackLabel="Cloud Lounge Jakarta · 49th Floor Skyline"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 hero-vignette" />
        <div
          aria-hidden="true"
          className="absolute w-96 h-96 rounded-full bg-gold/15 blur-[120px] top-1/4 left-1/2 -translate-x-1/2 pointer-events-none"
        />
      </div>

      {/* Hero Foreground */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs uppercase tracking-[0.28em] text-gold font-medium mb-5">
          {VENUE_INFO.floor} <span aria-hidden="true" className="mx-2 text-gold/60">&middot;</span>{' '}
          {VENUE_INFO.building}, Thamrin
        </p>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-medium tracking-tight text-alabaster leading-[1.08] mb-6 text-balance max-w-4xl mx-auto">
          Above the <span className="italic text-gold font-normal">Jakarta</span> Skyline
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-silver-muted font-light leading-relaxed mb-10">
          An open-air rooftop sanctuary on Level 49. Savour house-infused cocktails, wood-fired
          artisanal cuisine, and unobstructed 360-degree nocturnal views across Central Jakarta.
        </p>

        {/* Actions: One primary CTA + one secondary outline action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#reservation"
            className="w-full sm:w-auto px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-obsidian bg-gold-gradient rounded-lg hover:brightness-110 transition-all duration-200 whitespace-nowrap shrink-0 shadow-xl shadow-gold/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian"
          >
            Reserve a Table
          </a>
          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-alabaster border border-gold/40 bg-obsidian/60 backdrop-blur-md rounded-lg hover:border-gold hover:text-gold transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            Explore Menu
          </a>
        </div>

        {/* Key Venue Strip */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl mx-auto text-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-silver-muted mb-1">
              Altitude
            </p>
            <p className="font-serif text-lg sm:text-xl text-alabaster">Level 49 Rooftop</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-silver-muted mb-1">
              Nightly Hours
            </p>
            <p className="font-serif text-lg sm:text-xl text-alabaster tabular-nums">
              {VENUE_INFO.hours}
            </p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-[11px] uppercase tracking-[0.24em] text-silver-muted mb-1">
              Dress Code
            </p>
            <p className="font-serif text-lg sm:text-xl text-gold">Smart Elegant</p>
          </div>
        </div>
      </div>

      {/* Scroll Down Affordance */}
      <a
        href="#experience"
        aria-label="Scroll to The Experience section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 p-2 text-silver-muted hover:text-gold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-full"
      >
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
}
