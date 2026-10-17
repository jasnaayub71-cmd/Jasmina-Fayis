interface MonogramEmblemProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: string;
}

export function MonogramEmblem({
  className = "",
  size = "lg",
}: MonogramEmblemProps) {
  // Dimensions based on size prop
  const sizeClasses = {
    sm: "w-14 h-14 sm:w-16 sm:h-16",
    md: "w-20 h-20 sm:w-24 sm:h-24",
    lg: "w-32 h-32 sm:w-40 sm:h-40",
    xl: "w-44 h-44 sm:w-52 sm:h-52",
  }[size];

  return (
    <div
      className={`relative flex items-center justify-center shrink-0 ${sizeClasses} ${className}`}
      aria-label="Jasmina & Fayis Floral Monogram Emblem"
    >
      {/* 
        Circular Floral Monogram Emblem
        Reusing the exact opening cover artwork with burgundy roses, gold filigree,
        and smaller, elegant J & F initials positioned completely inside the inner circle.
      */}
      <div className="relative w-full h-full rounded-full overflow-hidden shadow-md border border-[#dec177]/50 bg-[#fffdfa] flex items-center justify-center">
        <img
          src="/src/assets/images/gold_floral_crest_jf_1792221604852.jpg"
          alt="J & F Monogram"
          className="w-full h-full object-cover transform scale-108 filter contrast-[1.02]"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}
