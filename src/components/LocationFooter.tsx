import { useState, type PointerEvent } from 'react';
import {
  Clock,
  Crosshair,
  ExternalLink,
  Info,
  Mail,
  MapPin,
  MessageCircle,
  Minus,
  Plus,
} from 'lucide-react';
import { VENUE_INFO } from '../data/loungeData';

export function LocationFooter() {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleZoomIn = () => setZoom((z) => Math.min(1.6, Number((z + 0.2).toFixed(2))));
  const handleZoomOut = () => setZoom((z) => Math.max(0.8, Number((z - 0.2).toFixed(2))));
  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    setDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const nextX = Math.max(-90, Math.min(90, e.clientX - dragStart.x));
    const nextY = Math.max(-60, Math.min(60, e.clientY - dragStart.y));
    setPan({ x: nextX, y: nextY });
  };

  const handlePointerUp = (e: PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    setDragging(false);
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <footer
      id="location"
      className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-obsidian border-t border-gold/20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Address Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-serif text-2xl tracking-[0.2em] text-alabaster font-semibold uppercase block">
                {VENUE_INFO.brand}
              </span>
              <span className="text-xs tracking-[0.3em] text-gold uppercase">
                Jakarta &middot; {VENUE_INFO.domain}
              </span>
            </div>

            <address className="not-italic text-sm text-silver-muted font-light leading-relaxed">
              {VENUE_INFO.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>

            <div className="space-y-3 text-sm">
              <p className="text-alabaster flex items-center gap-3">
                <Clock className="w-4 h-4 text-gold shrink-0" aria-hidden="true" />
                <span>
                  Open Daily:{' '}
                  <strong className="font-medium tabular-nums">{VENUE_INFO.hours}</strong>
                </span>
              </p>
              <p className="text-alabaster flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-gold shrink-0" aria-hidden="true" />
                <a
                  href={`https://wa.me/${VENUE_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  {VENUE_INFO.whatsappDisplay} (RSVP &amp; VIP Inquiries)
                </a>
              </p>
              <p className="text-alabaster flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${VENUE_INFO.emailReservation}`}
                  className="hover:text-gold transition-colors"
                >
                  {VENUE_INFO.emailReservation}
                </a>
              </p>
              <p className="text-silver-muted flex items-center gap-3">
                <Info className="w-4 h-4 text-gold shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${VENUE_INFO.emailInfo}`}
                  className="hover:text-gold transition-colors"
                >
                  {VENUE_INFO.emailInfo}
                </a>
              </p>
            </div>
          </div>

          {/* Single Unified Interactive Map & Location Card */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-gold/25 bg-charcoal shadow-2xl">
              {/* Interactive Dark Architectural Map of Bundaran HI & Thamrin */}
              <div
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                role="region"
                aria-label="Interactive street map of The Plaza Office Tower at Bundaran HI, Central Jakarta"
                className={`relative h-72 sm:h-80 w-full bg-obsidian overflow-hidden select-none touch-none ${
                  dragging ? 'cursor-grabbing' : 'cursor-grab'
                }`}
              >
                {/* Interactive Zoom & Pan Canvas */}
                <div
                  style={{
                    transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${zoom})`,
                  }}
                  className="w-full h-full transition-transform duration-150 ease-out origin-center"
                >
                  <svg
                    viewBox="0 0 800 420"
                    className="w-full h-full"
                    preserveAspectRatio="xMidYMid slice"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path
                          d="M 40 0 L 0 0 0 40"
                          fill="none"
                          stroke="rgba(212, 175, 55, 0.06)"
                          strokeWidth="1"
                        />
                      </pattern>
                      <radialGradient id="pin-glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="rgba(212, 175, 55, 0.35)" />
                        <stop offset="100%" stopColor="rgba(212, 175, 55, 0)" />
                      </radialGradient>
                    </defs>

                    <rect width="800" height="420" fill="#0A0A0C" />
                    <rect width="800" height="420" fill="url(#map-grid)" />

                    {/* Secondary Neighborhood Streets */}
                    <g stroke="#1E222B" strokeWidth="10" strokeLinecap="round" fill="none">
                      <path d="M 60 110 L 390 110" />
                      <path d="M 80 265 L 405 265" />
                      <path d="M 190 20 L 190 400" />
                      <path d="M 590 40 L 590 390" />
                      <path d="M 485 265 L 770 330" />
                      <path d="M 495 145 L 775 85" />
                    </g>

                    {/* Primary Arteries: Jl. M.H. Thamrin -> Bundaran HI -> Jl. Jend. Sudirman */}
                    <g stroke="#272C38" strokeWidth="22" strokeLinecap="round" fill="none">
                      <path d="M 465 0 L 465 420" />
                      <path d="M 465 215 L 790 265" />
                      <path d="M 110 215 L 465 215" />
                    </g>
                    <g stroke="rgba(212, 175, 55, 0.14)" strokeWidth="1.2" fill="none">
                      <path d="M 465 0 L 465 155" />
                      <path d="M 465 275 L 465 420" />
                    </g>

                    {/* Landmark Building Footprints */}
                    {/* Plaza Indonesia */}
                    <rect
                      x="215"
                      y="130"
                      width="145"
                      height="68"
                      rx="6"
                      fill="#121418"
                      stroke="rgba(255,255,255,0.08)"
                    />
                    {/* Grand Hyatt Jakarta */}
                    <rect
                      x="230"
                      y="45"
                      width="180"
                      height="52"
                      rx="6"
                      fill="#121418"
                      stroke="rgba(255,255,255,0.08)"
                    />
                    {/* Mandarin Oriental */}
                    <rect
                      x="518"
                      y="148"
                      width="95"
                      height="52"
                      rx="6"
                      fill="#121418"
                      stroke="rgba(255,255,255,0.07)"
                    />
                    {/* The Plaza Office Tower (Cloud Lounge 49F) */}
                    <rect
                      x="372"
                      y="120"
                      width="64"
                      height="76"
                      rx="6"
                      fill="#1A1D24"
                      stroke="#D4AF37"
                      strokeWidth="1.5"
                    />

                    {/* Bundaran HI Roundabout */}
                    <circle
                      cx="465"
                      cy="215"
                      r="58"
                      fill="#0D0F13"
                      stroke="#272C38"
                      strokeWidth="18"
                    />
                    <circle
                      cx="465"
                      cy="215"
                      r="34"
                      fill="#11151C"
                      stroke="rgba(212, 175, 55, 0.4)"
                      strokeWidth="1.5"
                    />
                    <circle cx="465" cy="215" r="10" fill="rgba(212, 175, 55, 0.25)" />

                    {/* Street & Landmark Labels */}
                    <text
                      x="485"
                      y="52"
                      fill="#A1A1AA"
                      fontSize="11"
                      letterSpacing="2"
                      fontFamily="Plus Jakarta Sans, sans-serif"
                    >
                      JL. M.H. THAMRIN
                    </text>
                    <text
                      x="485"
                      y="370"
                      fill="#A1A1AA"
                      fontSize="11"
                      letterSpacing="2"
                      fontFamily="Plus Jakarta Sans, sans-serif"
                    >
                      JL. JEND. SUDIRMAN
                    </text>
                    <text
                      x="600"
                      y="224"
                      fill="#71717A"
                      fontSize="10"
                      letterSpacing="1.6"
                      fontFamily="Plus Jakarta Sans, sans-serif"
                    >
                      JL. IMAM BONJOL
                    </text>
                    <text
                      x="120"
                      y="204"
                      fill="#71717A"
                      fontSize="10"
                      letterSpacing="1.5"
                      fontFamily="Plus Jakarta Sans, sans-serif"
                    >
                      JL. KEBON KACANG
                    </text>
                    <text
                      x="287"
                      y="168"
                      textAnchor="middle"
                      fill="#71717A"
                      fontSize="10"
                      fontFamily="Plus Jakarta Sans, sans-serif"
                    >
                      Plaza Indonesia
                    </text>
                    <text
                      x="320"
                      y="75"
                      textAnchor="middle"
                      fill="#71717A"
                      fontSize="10"
                      fontFamily="Plus Jakarta Sans, sans-serif"
                    >
                      Grand Hyatt Jakarta
                    </text>
                    <text
                      x="465"
                      y="296"
                      textAnchor="middle"
                      fill="#D4AF37"
                      fontSize="10"
                      letterSpacing="1.6"
                      fontFamily="Plus Jakarta Sans, sans-serif"
                    >
                      BUNDARAN HI
                    </text>

                    {/* Cloud Lounge Marker Pin on The Plaza Office Tower */}
                    <circle cx="404" cy="158" r="46" fill="url(#pin-glow)" />
                    <circle
                      cx="404"
                      cy="158"
                      r="14"
                      fill="rgba(212, 175, 55, 0.18)"
                      stroke="#D4AF37"
                      strokeWidth="1.5"
                    />
                    <circle cx="404" cy="158" r="5.5" fill="#D4AF37" />

                    {/* Marker Callout Tag */}
                    <g transform="translate(404, 108)">
                      <rect
                        x="-88"
                        y="-28"
                        width="176"
                        height="30"
                        rx="6"
                        fill="#0A0A0C"
                        stroke="rgba(212, 175, 55, 0.55)"
                      />
                      <text
                        x="0"
                        y="-9"
                        textAnchor="middle"
                        fill="#F4F4F6"
                        fontSize="11"
                        fontWeight="600"
                        letterSpacing="0.6"
                        fontFamily="Plus Jakarta Sans, sans-serif"
                      >
                        Cloud Lounge · Level 49
                      </text>
                    </g>
                  </svg>
                </div>

                {/* Coordinates Readout */}
                <div className="pointer-events-none absolute bottom-3 left-4 z-10 text-[11px] font-mono tabular-nums text-silver-muted/90 bg-obsidian/80 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10">
                  6.1928° S, 106.8228° E
                </div>

                {/* Interactive Map Zoom & Recenter Controls */}
                <div className="absolute top-3 right-3 z-10 flex flex-col gap-1.5">
                  <button
                    type="button"
                    onClick={handleZoomIn}
                    aria-label="Zoom in map"
                    className="w-9 h-9 rounded-lg bg-obsidian/90 border border-gold/30 text-alabaster hover:text-gold hover:border-gold flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    <Plus className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={handleZoomOut}
                    aria-label="Zoom out map"
                    className="w-9 h-9 rounded-lg bg-obsidian/90 border border-gold/30 text-alabaster hover:text-gold hover:border-gold flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    <Minus className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    aria-label="Reset map view"
                    className="w-9 h-9 rounded-lg bg-obsidian/90 border border-gold/30 text-alabaster hover:text-gold hover:border-gold flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    <Crosshair className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>

                {/* Bottom Fade */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-charcoal to-transparent"
                />
              </div>

              {/* Integrated Location Info & Single Styled CTA Button */}
              <div className="p-6 sm:p-8 bg-charcoal border-t border-gold/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="space-y-1.5 max-w-md">
                  <div className="inline-flex items-center gap-2 text-xs text-gold uppercase tracking-[0.18em]">
                    <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>Bundaran HI &middot; Central Jakarta</span>
                  </div>
                  <h3 className="font-serif text-2xl text-alabaster">
                    The Plaza Office Tower, 49F
                  </h3>
                  <p className="text-xs text-silver-muted leading-relaxed">
                    Adjacent to Plaza Indonesia &amp; Grand Hyatt Jakarta. Valet parking available
                    at The Plaza main drop-off.
                  </p>
                </div>

                <a
                  href={VENUE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 min-h-[44px] px-6 py-3 rounded-xl bg-gold-gradient text-obsidian hover:brightness-110 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-200 whitespace-nowrap shrink-0 shadow-lg shadow-gold/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Anchor Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-silver-muted">
          <p>
            &copy; 2026{' '}
            <a
              href={`https://${VENUE_INFO.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              {VENUE_INFO.domain}
            </a>{' '}
            &mdash; Cloud Lounge Jakarta (Rooftop). All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#experience" className="hover:text-gold transition-colors">
              Experience
            </a>
            <a href="#menu" className="hover:text-gold transition-colors">
              Menu
            </a>
            <a href="#vibe" className="hover:text-gold transition-colors">
              Dress Code
            </a>
            <a href="#reservation" className="hover:text-gold transition-colors">
              Reservations
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
