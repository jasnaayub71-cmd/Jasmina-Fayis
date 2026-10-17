import { useState } from "react";
import floralCrestImg from "../assets/images/gold_floral_crest_jf_1792221604852.jpg";

interface MonogramEmblemProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: string;
}

export function MonogramEmblem({
  className = "",
  size = "lg",
}: MonogramEmblemProps) {
  const [imageError, setImageError] = useState(false);
  const [imgSrc, setImgSrc] = useState<string>(floralCrestImg);

  // Dimensions based on size prop
  const sizeClasses = {
    sm: "w-14 h-14 sm:w-16 sm:h-16",
    md: "w-20 h-20 sm:w-24 sm:h-24",
    lg: "w-32 h-32 sm:w-40 sm:h-40",
    xl: "w-44 h-44 sm:w-52 sm:h-52",
  }[size];

  const handleImageError = () => {
    // If the bundled import URL fails, try the static public folder URL
    if (imgSrc !== "/images/gold_floral_crest_jf_1792221604852.jpg") {
      setImgSrc("/images/gold_floral_crest_jf_1792221604852.jpg");
    } else {
      // If both fail, render the inline vector SVG fallback so no placeholder text is shown
      setImageError(true);
    }
  };

  return (
    <div
      className={`relative flex items-center justify-center shrink-0 ${sizeClasses} ${className}`}
      aria-label="Jasmina & Fayis Floral Monogram"
    >
      <div className="relative w-full h-full rounded-full overflow-hidden shadow-md border border-[#dec177]/60 bg-[#fffdfa] flex items-center justify-center">
        {!imageError ? (
          <img
            src={imgSrc}
            alt=""
            onError={handleImageError}
            className="w-full h-full object-cover transform scale-108 filter contrast-[1.02] select-none"
            loading="eager"
            decoding="async"
          />
        ) : (
          /* Graceful inline vector SVG fallback ensuring flowers, wreath and elegant J & F initials always render */
          <svg viewBox="0 0 200 200" className="w-full h-full p-1" aria-hidden="true">
            <defs>
              <linearGradient id="goldG" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f7e7c4" />
                <stop offset="40%" stopColor="#d4af37" />
                <stop offset="80%" stopColor="#aa7c11" />
              </linearGradient>
              <linearGradient id="burgundyG" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4a0815" />
                <stop offset="100%" stopColor="#7a1428" />
              </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="92" fill="#fffdfa" stroke="url(#goldG)" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="86" fill="none" stroke="url(#goldG)" strokeWidth="0.8" strokeDasharray="2 3" />
            <circle cx="100" cy="100" r="76" fill="none" stroke="url(#goldG)" strokeWidth="1" />
            {/* Burgundy floral accents around border */}
            <circle cx="24" cy="65" r="4.5" fill="#6b1024" />
            <circle cx="176" cy="65" r="4.5" fill="#6b1024" />
            <circle cx="18" cy="115" r="4.5" fill="#6b1024" />
            <circle cx="182" cy="115" r="4.5" fill="#6b1024" />
            <circle cx="100" cy="22" r="5" fill="#6b1024" />
            <circle cx="100" cy="178" r="5" fill="#6b1024" />
            {/* Elegant smaller J & F centered inside the inner circle */}
            <text
              x="72"
              y="118"
              fontSize="52"
              fontFamily="'Cormorant Garamond', 'Playfair Display', Georgia, serif"
              fill="url(#burgundyG)"
              textAnchor="middle"
              fontWeight="600"
            >
              J
            </text>
            <text
              x="100"
              y="108"
              fontSize="24"
              fontStyle="italic"
              fontFamily="'Cormorant Garamond', Georgia, serif"
              fill="url(#goldG)"
              textAnchor="middle"
            >
              &amp;
            </text>
            <text
              x="128"
              y="118"
              fontSize="52"
              fontFamily="'Cormorant Garamond', 'Playfair Display', Georgia, serif"
              fill="url(#burgundyG)"
              textAnchor="middle"
              fontWeight="600"
            >
              F
            </text>
          </svg>
        )}
      </div>
    </div>
  );
}
