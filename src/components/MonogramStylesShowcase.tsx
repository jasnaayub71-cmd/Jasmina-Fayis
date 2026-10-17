import { useState } from "react";
import { MonogramEmblem } from "./MonogramEmblem";
import { X, Sparkles, Check, Eye } from "lucide-react";

interface MonogramStylesShowcaseProps {
  currentStyle: "classic" | "serif" | "crest" | "minimal";
  onSelectStyle: (style: "classic" | "serif" | "crest" | "minimal") => void;
  isOpen: boolean;
  onClose: () => void;
}

export function MonogramStylesShowcase({
  currentStyle,
  onSelectStyle,
  isOpen,
  onClose,
}: MonogramStylesShowcaseProps) {
  const [selected, setSelected] = useState(currentStyle);

  if (!isOpen) return null;

  const styles = [
    {
      id: "classic" as const,
      label: "Style 1: Classic Intertwined",
      tagline: "Romantic Calligraphy",
      description:
        "Elegant J and F letters intertwined in luxury burgundy calligraphy with fine gold detailing, botanical laurel vines, and floral buds.",
      features: ["Intertwined calligraphic script", "Curved teardrop terminal", "Champagne gold accent vines"],
    },
    {
      id: "serif" as const,
      label: "Style 2: Luxury Serif",
      tagline: "High-Contrast Editorial",
      description:
        "Large, clearly readable J and F initials in a sophisticated Roman serif font, with a delicate italic gold ampersand between them.",
      features: ["Maximum clarity & readability", "Classic editorial proportion", "Delicate gold & ampersand"],
    },
    {
      id: "crest" as const,
      label: "Style 3: Royal Wedding Crest",
      tagline: "Regal Heritage Filigree",
      description:
        "J & F initials inside an ornate circular champagne-gold crest with lace scalloping, cardinal floral points, and regal crown finial.",
      features: ["Lace filigree border", "Bold regal Roman lettering", "Four cardinal floral accents"],
    },
    {
      id: "minimal" as const,
      label: "Style 4: Minimal Elegant",
      tagline: "Modern Sophistication",
      description:
        "Clean, refined J and F initials in deep burgundy, with generous spacing, modern hairline gold rings, and a subtle central diamond star.",
      features: ["Spacious modern typography", "Hairline geometric gold circles", "Refined central diamond emblem"],
    },
  ];

  const handleApplyPreview = (id: "classic" | "serif" | "crest" | "minimal") => {
    setSelected(id);
    onSelectStyle(id);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#fffefc] border border-[#dec177] rounded-3xl shadow-2xl p-6 sm:p-8 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle decorative inner border */}
        <div className="absolute inset-2 sm:inset-3 rounded-2xl border border-[#dec177]/30 pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#741628] hover:text-[#520b1a] hover:bg-[#fcf0f2] rounded-full transition-colors cursor-pointer z-10"
          aria-label="Close styles preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-1 mb-6 shrink-0 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fcf0f2] border border-[#dec177]/60 text-xs font-serif text-[#84162e] mb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#9e782f]" />
            <span>Monogram Design Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#3f0712] font-normal">
            4 Design Styles for the J &amp; F Monogram
          </h2>
          <p className="text-xs sm:text-sm font-serif italic text-[#6b1024] max-w-xl mx-auto">
            Compare all 4 styles inside the circular floral emblem. Click on any style to preview it live on the wedding invitation.
          </p>
        </div>

        {/* 4 Styles Grid */}
        <div className="flex-1 overflow-y-auto pr-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative z-10 py-2">
          {styles.map((style) => {
            const isCurrent = selected === style.id;
            return (
              <div
                key={style.id}
                onClick={() => handleApplyPreview(style.id)}
                className={`group relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col items-center text-center ${
                  isCurrent
                    ? "bg-[#fdfaf5] border-[#b38b39] ring-2 ring-[#cbaa55]/40 shadow-lg scale-[1.01]"
                    : "bg-[#fffdfa] border-[#dec177]/50 hover:border-[#b38b39] hover:shadow-md"
                }`}
              >
                {/* Active Indicator Badge */}
                {isCurrent && (
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-[#6b1024] text-white text-[10px] font-serif uppercase tracking-wider flex items-center gap-1 shadow-xs">
                    <Check className="w-3 h-3 text-[#dec177]" />
                    <span>Active Preview</span>
                  </div>
                )}

                {/* Monogram Visual Render */}
                <div className="my-2 p-2">
                  <MonogramEmblem variant={style.id} size="lg" />
                </div>

                {/* Style Title & Tagline */}
                <h3 className="text-lg font-serif font-semibold text-[#520b1a] mt-2">
                  {style.label}
                </h3>
                <span className="text-[11px] font-serif uppercase tracking-[0.2em] text-[#99752b] mb-2 font-medium">
                  {style.tagline}
                </span>

                {/* Description */}
                <p className="text-xs font-serif text-[#6b1024] leading-relaxed mb-3">
                  {style.description}
                </p>

                {/* Key Features Pill list */}
                <div className="flex flex-wrap items-center justify-center gap-1.5 mt-auto pt-2">
                  {style.features.map((feat, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-serif px-2 py-0.5 rounded-full bg-[#faf5ec] border border-[#dec177]/40 text-[#741628]"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Preview Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleApplyPreview(style.id);
                  }}
                  className={`mt-4 w-full py-2 px-4 rounded-full text-xs font-serif uppercase tracking-widest transition-all cursor-pointer ${
                    isCurrent
                      ? "bg-[#6b1024] text-[#fdfcf9] font-medium shadow-sm"
                      : "bg-[#faf7f2] text-[#6b1024] hover:bg-white border border-[#dec177]"
                  }`}
                >
                  {isCurrent ? "Currently Selected" : `Preview ${style.label.split(":")[0]}`}
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer info note */}
        <div className="mt-4 pt-3 border-t border-[#dec177]/40 text-center text-xs font-serif text-[#99752b] shrink-0">
          ✨ Which style would you like to use? Tell me your choice (Style 1, 2, 3, or 4) to set it as your final invitation monogram.
        </div>
      </div>
    </div>
  );
}
