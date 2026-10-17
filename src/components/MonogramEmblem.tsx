interface MonogramEmblemProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function MonogramEmblem({ className = "", size = "lg" }: MonogramEmblemProps) {
  // Dimensions based on size prop
  const sizeClasses = {
    sm: "w-14 h-14",
    md: "w-20 h-20",
    lg: "w-36 h-36 sm:w-44 sm:h-44",
  }[size];

  return (
    <div className={`relative flex items-center justify-center ${sizeClasses} ${className}`}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full filter drop-shadow-md overflow-visible"
        aria-label="Monogram J & F Emblem"
      >
        <defs>
          {/* Champagne gold gradient */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3deb0" />
            <stop offset="30%" stopColor="#d4af37" />
            <stop offset="60%" stopColor="#aa7c11" />
            <stop offset="85%" stopColor="#e5c875" />
            <stop offset="100%" stopColor="#9a7116" />
          </linearGradient>

          {/* Deep royal burgundy gradient */}
          <linearGradient id="burgundyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#400610" />
            <stop offset="50%" stopColor="#5a0b1b" />
            <stop offset="100%" stopColor="#7a1428" />
          </linearGradient>

          {/* Soft inner cream glow */}
          <radialGradient id="creamBackdrop" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fffdfa" />
            <stop offset="75%" stopColor="#faf5ec" />
            <stop offset="100%" stopColor="#f4ebdb" />
          </radialGradient>

          {/* Subtle drop shadow for letters */}
          <filter id="subtleShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0.5" dy="1" stdDeviation="1" floodColor="#3f0712" floodOpacity="0.18" />
          </filter>
        </defs>

        {/* 1. Medallion Circular Backdrop */}
        <circle cx="100" cy="100" r="92" fill="url(#creamBackdrop)" />

        {/* 2. Outer Ornamental Gold Rings */}
        <circle
          cx="100"
          cy="100"
          r="92"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          opacity="0.85"
        />
        <circle
          cx="100"
          cy="100"
          r="86"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="0.8"
          strokeDasharray="2 3"
          opacity="0.75"
        />
        <circle
          cx="100"
          cy="100"
          r="78"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          opacity="0.6"
        />

        {/* 3. Symmetrical Botanical Leaves & Burgundy Rose Buds along Perimeter */}
        {/* Top & Bottom Star Accents */}
        <path
          d="M 100 6 L 102 12 L 108 14 L 102 16 L 100 22 L 98 16 L 92 14 L 98 12 Z"
          fill="url(#goldGradient)"
        />
        <path
          d="M 100 178 L 102 184 L 108 186 L 102 188 L 100 194 L 98 188 L 92 186 L 98 184 Z"
          fill="url(#goldGradient)"
        />

        {/* Left Laurel Foliage */}
        <g stroke="url(#goldGradient)" fill="none" strokeWidth="1" strokeLinecap="round">
          {/* Main vine curve left */}
          <path d="M 92 12 C 40 24 16 64 16 100 C 16 138 42 176 92 188" strokeWidth="1.2" />
          
          {/* Leaves left */}
          <path d="M 28 55 Q 16 48 24 40 Q 34 46 28 55 Z" fill="#b38b39" fillOpacity="0.4" />
          <path d="M 18 78 Q 6 74 14 65 Q 24 71 18 78 Z" fill="#b38b39" fillOpacity="0.4" />
          <path d="M 16 102 Q 4 102 12 92 Q 22 96 16 102 Z" fill="#b38b39" fillOpacity="0.4" />
          <path d="M 18 124 Q 6 130 15 137 Q 24 131 18 124 Z" fill="#b38b39" fillOpacity="0.4" />
          <path d="M 29 146 Q 18 154 26 162 Q 35 155 29 146 Z" fill="#b38b39" fillOpacity="0.4" />
        </g>

        {/* Right Laurel Foliage (Mirrored) */}
        <g stroke="url(#goldGradient)" fill="none" strokeWidth="1" strokeLinecap="round">
          {/* Main vine curve right */}
          <path d="M 108 12 C 160 24 184 64 184 100 C 184 138 158 176 108 188" strokeWidth="1.2" />
          
          {/* Leaves right */}
          <path d="M 172 55 Q 184 48 176 40 Q 166 46 172 55 Z" fill="#b38b39" fillOpacity="0.4" />
          <path d="M 182 78 Q 194 74 186 65 Q 176 71 182 78 Z" fill="#b38b39" fillOpacity="0.4" />
          <path d="M 184 102 Q 196 102 188 92 Q 178 96 184 102 Z" fill="#b38b39" fillOpacity="0.4" />
          <path d="M 182 124 Q 194 130 185 137 Q 176 131 182 124 Z" fill="#b38b39" fillOpacity="0.4" />
          <path d="M 171 146 Q 182 154 174 162 Q 165 155 171 146 Z" fill="#b38b39" fillOpacity="0.4" />
        </g>

        {/* Burgundy Floral Accent Buds on Laurel */}
        <circle cx="21" cy="66" r="3.5" fill="#6b1024" />
        <circle cx="21" cy="66" r="1.5" fill="#dec177" />
        <circle cx="15" cy="113" r="3.5" fill="#6b1024" />
        <circle cx="15" cy="113" r="1.5" fill="#dec177" />
        
        <circle cx="179" cy="66" r="3.5" fill="#6b1024" />
        <circle cx="179" cy="66" r="1.5" fill="#dec177" />
        <circle cx="185" cy="113" r="3.5" fill="#6b1024" />
        <circle cx="185" cy="113" r="1.5" fill="#dec177" />

        {/* 4. Centerpiece Monogram: Intertwined J & F */}
        <g filter="url(#subtleShadow)">
          {/* Letter J - Elegant Calligraphic Serif with teardrop terminal */}
          {/* Positioned on the left side, slightly forward */}
          <path
            d="
              M 64 54 
              C 64 51 68 49 76 49 
              L 94 49 
              C 92 53 87 54 84 58 
              L 84 116 
              C 84 130 81 141 73 147 
              C 66 153 56 155 46 150 
              C 38 145 35 136 38 130 
              C 41 125 47 125 50 129 
              C 53 133 50 140 43 140 
              C 48 144 56 143 61 139 
              C 67 134 70 126 70 114 
              L 70 58 
              C 67 54 62 53 58 54 
              Z
            "
            fill="url(#burgundyGradient)"
            stroke="url(#goldGradient)"
            strokeWidth="0.6"
          />

          {/* Letter F - Majestic Royal Serif */}
          {/* Positioned on the right, intertwined gracefully behind/with J */}
          <path
            d="
              M 98 49 
              L 144 49 
              C 147 55 145 61 143 66 
              L 138 66 
              C 137 60 134 56 128 56 
              L 112 56 
              L 112 90 
              L 126 90 
              C 131 90 133 87 134 83 
              L 138 83 
              L 138 103 
              L 134 103 
              C 133 99 131 96 126 96 
              L 112 96 
              L 112 136 
              C 112 142 115 144 122 144 
              L 126 144 
              L 126 149 
              L 88 149 
              L 88 144 
              L 92 144 
              C 98 144 100 142 100 136 
              L 100 56 
              L 92 56 
              C 89 60 88 63 87 66 
              L 83 66 
              Z
            "
            fill="url(#burgundyGradient)"
            stroke="url(#goldGradient)"
            strokeWidth="0.6"
          />

          {/* Golden Ampersand (&) nestled between J & F */}
          <path
            d="
              M 93 103 
              C 90 99 88 95 88 91 
              C 88 86 91 82 95 82 
              C 99 82 102 85 101 90 
              C 100 95 96 99 92 103 
              C 87 108 83 113 83 118 
              C 83 124 88 128 95 128 
              C 101 128 106 124 109 119 
              L 111 121 
              C 107 128 101 132 93 132 
              C 84 132 78 126 78 118 
              C 78 110 84 104 90 98 
              C 93 95 95 91 95 87 
              C 95 84 93 83 91 83 
              C 89 83 87 85 87 88 
              C 87 90 88 92 90 94 
              L 88 96 
              C 84 93 82 89 82 85 
              C 82 79 86 75 92 75 
              C 98 75 103 80 103 86 
              C 103 91 100 96 95 101 
              Z
            "
            fill="url(#goldGradient)"
          />
        </g>

        {/* Delicate inner accent circlet for balance */}
        <circle
          cx="100"
          cy="100"
          r="68"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="0.5"
          opacity="0.35"
        />
      </svg>
    </div>
  );
}
