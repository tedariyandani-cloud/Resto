import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export function SmartImage({
  src,
  alt,
  className = '',
  fallbackLabel,
}: SmartImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-charcoal via-obsidian to-charcoal-light border border-gold/20 text-center p-6 ${className}`}
      >
        <Sparkles className="w-6 h-6 text-gold/70 mb-2" aria-hidden="true" />
        <span className="font-serif text-base text-alabaster/90 tracking-wide">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
