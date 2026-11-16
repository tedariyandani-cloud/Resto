import { Check, IdCard, UserCheck, X } from 'lucide-react';
import { LOUNGE_IMAGES, WEEKLY_SESSIONS } from '../data/loungeData';
import { SmartImage } from './SmartImage';

export function VibeSection() {
  return (
    <section
      id="vibe"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute w-96 h-96 rounded-full bg-gold/10 blur-[120px] -bottom-20 -left-20 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Weekly Sounds & Sunset Sessions */}
          <div className="lg:col-span-7 rounded-2xl bg-charcoal/70 border border-gold/20 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                <span className="text-xs uppercase tracking-[0.28em] text-gold">
                  Nocturnal Rhythm
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-silver-muted">
                  Live DJ Nightly
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-alabaster mb-4 text-balance">
                Sunset Sessions &amp; After-Hours
              </h2>
              <p className="text-sm text-silver-muted font-light leading-relaxed mb-8">
                As dusk settles over Thamrin, resident selectors and guest international DJs curate
                a seamless progression from melodic sunset deep house to elevated nocturnal grooves.
              </p>

              {/* Hairline Schedule List (Whitespace over nested cards) */}
              <div className="divide-y divide-white/10 border-t border-b border-white/10">
                {WEEKLY_SESSIONS.map((session) => (
                  <div
                    key={session.id}
                    className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <span
                        className={`text-[11px] uppercase tracking-[0.2em] block mb-0.5 ${
                          session.featured ? 'text-amber-warm' : 'text-gold'
                        }`}
                      >
                        {session.days}
                      </span>
                      <h3 className="font-serif text-xl text-alabaster">{session.title}</h3>
                    </div>
                    <span
                      className={`text-xs font-mono tabular-nums whitespace-nowrap shrink-0 ${
                        session.featured ? 'text-gold font-medium' : 'text-silver-muted'
                      }`}
                    >
                      {session.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden border border-gold/30 shrink-0">
                <SmartImage
                  src={LOUNGE_IMAGES.djLounge}
                  alt="Cloud Lounge Jakarta DJ Console and nocturnal skyline"
                  fallbackLabel="DJ Booth"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm text-alabaster font-medium">
                  VIP Bottle Service &amp; Private Celebrations
                </p>
                <p className="text-xs text-silver-muted font-light mt-1 leading-relaxed">
                  Minimum spend applies for prime outdoor edge sofas on Friday &amp; Saturday
                  evenings.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Guest Etiquette & Dress Code */}
          <div className="lg:col-span-5 rounded-2xl p-8 sm:p-10 bg-gradient-to-b from-charcoal-light to-obsidian border border-gold/30 flex flex-col justify-between relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute -top-16 -right-16 w-48 h-48 rounded-full border border-gold/15 pointer-events-none"
            />

            <div>
              <div className="w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center text-gold mb-6">
                <UserCheck className="w-5 h-5" aria-hidden="true" />
              </div>

              <p className="text-xs uppercase tracking-[0.28em] text-gold mb-2">House Policy</p>
              <h2 className="font-serif text-3xl text-alabaster mb-4">
                Guest Etiquette &amp; Dress Code
              </h2>
              <p className="text-sm text-silver-muted font-light leading-relaxed mb-6">
                To preserve our refined nocturnal atmosphere, we kindly ask all guests to adhere to
                our <strong className="text-alabaster font-medium">Smart Casual / Elegant</strong>{' '}
                dress code.
              </p>

              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-alabaster/90 font-light leading-relaxed">
                    Collared shirts, tailored trousers, elegant dresses, and smart closed-toe
                    footwear are encouraged.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-silver-muted font-light leading-relaxed">
                    Strictly{' '}
                    <strong className="text-alabaster font-normal">
                      no sandals, flip-flops, sleeveless shirts, athletic wear, or shorts
                    </strong>{' '}
                    for gentlemen.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <IdCard className="w-4 h-4 text-gold mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-alabaster/90 font-light leading-relaxed">
                    <strong className="text-gold font-medium">21+ Only after 21:00 WIB.</strong>{' '}
                    Valid government-issued ID or passport may be requested at the lobby lift.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-gold/20 text-xs text-silver-muted leading-relaxed">
              <span className="text-gold font-medium uppercase tracking-[0.18em] block mb-1.5">
                Private Lift Access
              </span>
              Proceed to The Plaza Office Tower Main Lobby concierge for dedicated high-speed
              elevator access to Level 49.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
