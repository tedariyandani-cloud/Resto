import { useState, type FormEvent } from 'react';
import { Check, Copy, MessageCircle, ShieldCheck } from 'lucide-react';
import { VENUE_INFO } from '../data/loungeData';

interface BookingSummary {
  refCode: string;
  dateFormatted: string;
  time: string;
  guests: string;
  name: string;
  seating: string;
  notes: string;
  whatsappUrl: string;
  plainSummary: string;
}

function getTodayDateInput(): string {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

export function ReservationSection() {
  const minDate = getTodayDateInput();
  const [date, setDate] = useState(minDate);
  const [time, setTime] = useState('20:00 WIB (Prime Evening)');
  const [guests, setGuests] = useState('4 Guests');
  const [name, setName] = useState('');
  const [seating, setSeating] = useState('Outdoor Rooftop Edge (Skyline View)');
  const [notes, setNotes] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [summary, setSummary] = useState<BookingSummary | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedName = name.trim();
    if (trimmedName.length < 2) {
      setFormError('Please enter your full name (at least 2 characters) to prepare your reservation.');
      return;
    }
    if (!date) {
      setFormError('Please choose a reservation date.');
      return;
    }

    setFormError(null);
    setCopied(false);

    const dateObj = new Date(`${date}T00:00:00`);
    const dateFormatted = dateObj.toLocaleDateString('en-GB', {
      weekday: 'short',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const refCode = `CL49-${randomCode}`;
    const cleanNotes = notes.trim() || 'None';

    const plainSummary = `Hello Cloud Lounge Jakarta (49th Floor), I would like to confirm a table reservation via ${VENUE_INFO.domain}:

• Ref ID: #${refCode}
• Name: ${trimmedName}
• Date: ${dateFormatted}
• Time: ${time}
• Guests: ${guests}
• Seating: ${seating}
• Notes: ${cleanNotes}

Thank you.`;

    const whatsappUrl = `https://wa.me/${VENUE_INFO.whatsappNumber}?text=${encodeURIComponent(
      plainSummary
    )}`;

    setSummary({
      refCode,
      dateFormatted,
      time,
      guests,
      name: trimmedName,
      seating,
      notes: cleanNotes,
      whatsappUrl,
      plainSummary,
    });
  };

  const handleCopy = async () => {
    if (!summary) return;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(summary.plainSummary);
      } else {
        const temp = document.createElement('textarea');
        temp.value = summary.plainSummary;
        temp.setAttribute('readonly', '');
        temp.style.position = 'absolute';
        temp.style.left = '-9999px';
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setFormError('Unable to copy automatically. Please confirm directly via WhatsApp.');
    }
  };

  return (
    <section
      id="reservation"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-charcoal/60 border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Table Reservations</p>
          <h2 className="font-serif text-3xl sm:text-5xl text-alabaster font-medium mb-4 text-balance">
            Secure Your Vantage Point
          </h2>
          <p className="text-sm text-silver-muted font-light leading-relaxed">
            Reserve your table above the city lights. Complete your preferences below for an
            instant booking summary and direct WhatsApp confirmation with our host team.
          </p>
        </div>

        <div className="rounded-2xl bg-charcoal/80 border border-gold/20 p-6 sm:p-10 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label
                  htmlFor="res-date"
                  className="block text-xs uppercase tracking-[0.18em] text-silver-muted mb-2"
                >
                  Date <span className="text-gold">*</span>
                </label>
                <input
                  id="res-date"
                  type="date"
                  min={minDate}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full px-4 py-3.5 rounded-xl text-sm bg-obsidian/90 border border-gold/25 text-alabaster focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="res-time"
                  className="block text-xs uppercase tracking-[0.18em] text-silver-muted mb-2"
                >
                  Arrival Time <span className="text-gold">*</span>
                </label>
                <select
                  id="res-time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                  className="w-full px-4 py-3.5 rounded-xl text-sm bg-obsidian/90 border border-gold/25 text-alabaster focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors"
                >
                  <option value="18:00 WIB (Sunset Hour)">18:00 WIB (Sunset Hour)</option>
                  <option value="19:00 WIB">19:00 WIB</option>
                  <option value="20:00 WIB (Prime Evening)">20:00 WIB (Prime Evening)</option>
                  <option value="21:00 WIB">21:00 WIB</option>
                  <option value="22:00 WIB">22:00 WIB</option>
                  <option value="23:00 WIB">23:00 WIB</option>
                  <option value="00:00 WIB">00:00 WIB</option>
                  <option value="01:00 WIB">01:00 WIB</option>
                </select>
              </div>

              <div className="sm:col-span-2 lg:col-span-1">
                <label
                  htmlFor="res-guests"
                  className="block text-xs uppercase tracking-[0.18em] text-silver-muted mb-2"
                >
                  Number of Guests <span className="text-gold">*</span>
                </label>
                <select
                  id="res-guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  required
                  className="w-full px-4 py-3.5 rounded-xl text-sm bg-obsidian/90 border border-gold/25 text-alabaster focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors"
                >
                  <option value="2 Guests">2 Guests</option>
                  <option value="3 Guests">3 Guests</option>
                  <option value="4 Guests">4 Guests</option>
                  <option value="6 Guests">6 Guests</option>
                  <option value="8 Guests">8 Guests</option>
                  <option value="10+ VIP Group">10+ VIP Group</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="res-name"
                  className="block text-xs uppercase tracking-[0.18em] text-silver-muted mb-2"
                >
                  Guest Full Name <span className="text-gold">*</span>
                </label>
                <input
                  id="res-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., Alexander Wijaya"
                  required
                  className="w-full px-4 py-3.5 rounded-xl text-sm bg-obsidian/90 border border-gold/25 text-alabaster placeholder:text-silver-muted/60 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="res-seating"
                  className="block text-xs uppercase tracking-[0.18em] text-silver-muted mb-2"
                >
                  Seating Preference <span className="text-gold">*</span>
                </label>
                <select
                  id="res-seating"
                  value={seating}
                  onChange={(e) => setSeating(e.target.value)}
                  required
                  className="w-full px-4 py-3.5 rounded-xl text-sm bg-obsidian/90 border border-gold/25 text-alabaster focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors"
                >
                  <option value="Outdoor Rooftop Edge (Skyline View)">
                    Outdoor Rooftop Edge (Skyline View)
                  </option>
                  <option value="Indoor Lounge (Air-Conditioned)">
                    Indoor Lounge (Air-Conditioned)
                  </option>
                  <option value="VIP Sofa Section (Bottle Service)">
                    VIP Sofa Section (Bottle Service)
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="res-notes"
                className="block text-xs uppercase tracking-[0.18em] text-silver-muted mb-2"
              >
                Special Requests / Occasion (Optional)
              </label>
              <textarea
                id="res-notes"
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Birthday celebration, anniversary, dietary preferences, or specific table request..."
                className="w-full px-4 py-3 rounded-xl text-sm bg-obsidian/90 border border-gold/25 text-alabaster placeholder:text-silver-muted/60 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors"
              />
            </div>

            {formError && (
              <div
                role="alert"
                className="p-3.5 rounded-xl bg-red-950/50 border border-red-400/40 text-xs text-red-200"
              >
                {formError}
              </div>
            )}

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-silver-muted flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold shrink-0" aria-hidden="true" />
                <span>Tables are held for 20 minutes past reservation time.</span>
              </p>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-obsidian bg-gold-gradient rounded-xl hover:brightness-110 transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
              >
                Generate Reservation
              </button>
            </div>
          </form>

          {/* Instant Reservation Summary & WhatsApp Action */}
          {summary && (
            <div
              aria-live="polite"
              className="mt-10 pt-8 border-t border-gold/30 animate-fade-up"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold flex items-center justify-center text-gold shrink-0">
                    <Check className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.25em] text-gold block">
                      Request Prepared
                    </span>
                    <h3 className="font-serif text-2xl text-alabaster">Reservation Summary</h3>
                  </div>
                </div>
                <span className="text-xs font-mono tabular-nums text-alabaster bg-obsidian px-3.5 py-2 rounded-lg border border-gold/25 self-start sm:self-auto">
                  REF: #{summary.refCode}
                </span>
              </div>

              <dl className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-6 border-b border-white/10 text-sm">
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.2em] text-silver-muted mb-1">
                    Guest Name
                  </dt>
                  <dd className="text-alabaster font-medium">{summary.name}</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.2em] text-silver-muted mb-1">
                    Date &amp; Time
                  </dt>
                  <dd className="text-alabaster font-medium tabular-nums">
                    {summary.dateFormatted} &middot; {summary.time}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.2em] text-silver-muted mb-1">
                    Party &amp; Area
                  </dt>
                  <dd className="text-gold font-medium">
                    {summary.guests} ({summary.seating})
                  </dd>
                </div>
                <div className="sm:col-span-2 md:col-span-3">
                  <dt className="text-[11px] uppercase tracking-[0.2em] text-silver-muted mb-1">
                    Special Requests
                  </dt>
                  <dd className="text-silver-muted font-light">{summary.notes}</dd>
                </div>
              </dl>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
                <a
                  href={summary.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-obsidian font-semibold text-xs uppercase tracking-[0.16em] transition-colors duration-200 whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Confirm via WhatsApp ({VENUE_INFO.whatsappDisplay})</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-gold/40 text-alabaster hover:border-gold hover:text-gold text-xs uppercase tracking-[0.16em] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-gold" aria-hidden="true" />
                  ) : (
                    <Copy className="w-4 h-4" aria-hidden="true" />
                  )}
                  <span>{copied ? 'Copied!' : 'Copy Details'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
