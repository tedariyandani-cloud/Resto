import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#experience', label: 'The Experience' },
  { href: '#menu', label: 'Menu' },
  { href: '#vibe', label: 'Events & Dress Code' },
  { href: '#location', label: 'Location' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-obsidian/80 backdrop-blur-xl border-b border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16 md:h-20">
          {/* Zone 1: Single-line brand wordmark */}
          <a
            href="#top"
            className="font-serif text-xl sm:text-2xl tracking-[0.18em] text-alabaster font-semibold uppercase whitespace-nowrap shrink-0 hover:text-gold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
          >
            Cloud Lounge
          </a>

          {/* Zone 2: Concise single-line navigation links */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.16em] text-silver-muted"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-2 whitespace-nowrap shrink-0 hover:text-gold transition-colors duration-200 after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-none focus-visible:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action + Mobile toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#reservation"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-obsidian bg-gold-gradient rounded-lg hover:brightness-110 transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian"
            >
              Reserve a Table
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="md:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] rounded-lg border border-gold/25 text-alabaster hover:text-gold hover:border-gold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-obsidian/95 backdrop-blur-xl border-b border-gold/20 px-6 pt-3 pb-6 space-y-2 animate-fade-up"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-xs uppercase tracking-[0.2em] text-silver-muted hover:text-gold py-3 border-b border-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservation"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center mt-4 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-obsidian bg-gold-gradient rounded-lg"
          >
            Reserve a Table
          </a>
        </div>
      )}
    </header>
  );
}
