import { useState } from "react";
import { WeddingConfigType, formatWeddingDate, getGoogleCalendarUrl, downloadIcsFile } from "../config/weddingConfig";
import { MapPin, Clock, Calendar, ExternalLink, Download, Check } from "lucide-react";

interface NikahDetailsProps {
  config: WeddingConfigType;
}

export function NikahDetails({ config }: NikahDetailsProps) {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownloadIcs = () => {
    downloadIcsFile(config);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <section id="nikah-details" className="py-12 sm:py-16 max-w-4xl mx-auto px-4">
      {/* Section Header */}
      <div className="text-center space-y-2 mb-10">
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#99752b] font-medium block">
          Ceremony & Venue
        </span>
        <h3 className="text-3xl sm:text-4xl font-serif text-[#3f0712] font-normal tracking-wide">
          {config.EVENT_TITLE || "Nikkah & Wedding"}
        </h3>
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#cbaa55] to-transparent mx-auto mt-2" />
      </div>

      {/* Main Ceremony Card */}
      <div className="relative bg-[#fffefc] border border-[#dec177]/70 rounded-2xl shadow-lg p-6 sm:p-10 overflow-hidden">
        {/* Subtle Decorative Floral Background Corner */}
        <div className="absolute top-0 right-0 w-36 sm:w-48 opacity-15 pointer-events-none">
          <img
            src="/src/assets/images/burgundy_wedding_florals_jasmina_1792220812500.jpg"
            alt=""
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Ornate Gold Inset Border */}
        <div className="absolute inset-2 sm:inset-3 rounded-xl border border-[#dec177]/30 pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8">
          {/* Islamic Ceremony Title */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#84162e] font-serif font-semibold">
              The Sacred Solemnization
            </p>
            <h4 className="text-2xl sm:text-3xl font-serif text-[#520b1a] mt-1 font-normal">
              {config.CEREMONY_TITLE || "Nikkah & Wedding"}
            </h4>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left bg-[#fdfaf5] p-5 sm:p-7 rounded-xl border border-[#dec177]/40">
            {/* Date */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-[#fcf0f2] border border-[#dec177]/60 flex items-center justify-center shrink-0 text-[#84162e]">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#99752b] font-serif font-medium">
                  Date
                </p>
                <p className="text-sm sm:text-base font-serif font-semibold text-[#3f0712] mt-0.5">
                  {config.NIKAH_DATE_DISPLAY || formatWeddingDate(config.NIKAH_DATE)}
                </p>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-[#fcf0f2] border border-[#dec177]/60 flex items-center justify-center shrink-0 text-[#84162e]">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#99752b] font-serif font-medium">
                  Time
                </p>
                <p className="text-sm sm:text-base font-serif font-semibold text-[#3f0712] mt-0.5">
                  {config.NIKAH_TIME_DISPLAY || "10:00 AM"}
                </p>
              </div>
            </div>

            {/* Venue & Location */}
            <div className="sm:col-span-2 flex items-start gap-3.5 pt-2 border-t border-[#dec177]/30">
              <div className="w-9 h-9 rounded-full bg-[#fcf0f2] border border-[#dec177]/60 flex items-center justify-center shrink-0 text-[#84162e]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#99752b] font-serif font-medium">
                  Wedding Venue
                </p>
                <p className="text-base sm:text-lg font-serif font-semibold text-[#3f0712] mt-0.5">
                  {config.NIKAH_VENUE}, {config.VENUE_LOCATION}
                </p>
                <p className="text-xs sm:text-sm font-serif text-[#741628] mt-1 leading-relaxed">
                  {config.NIKAH_ADDRESS}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons: View Location, Calendar */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {/* View Location / Get Directions Button */}
            <a
              href={config.GOOGLE_MAPS_URL || "https://maps.app.goo.gl/znavTsacm1uLivbdA"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#6b1024] hover:bg-[#84162e] text-[#fdfcf9] font-serif text-xs uppercase tracking-widest transition-all shadow-sm cursor-pointer hover:scale-102"
              title="Open Google Maps Location in a new tab"
            >
              <MapPin className="w-3.5 h-3.5 text-[#dec177]" />
              <span>View Location</span>
              <ExternalLink className="w-3 h-3 text-[#dec177]/80" />
            </a>

            {/* Google Calendar Add */}
            <a
              href={getGoogleCalendarUrl(config)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#faf7f2] hover:bg-white text-[#520b1a] border border-[#cbaa55] font-serif text-xs uppercase tracking-widest transition-all shadow-sm cursor-pointer hover:scale-102"
            >
              <Calendar className="w-3.5 h-3.5 text-[#9e782f]" />
              <span>Google Calendar</span>
            </a>

            {/* Download iCal file */}
            <button
              onClick={handleDownloadIcs}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#faf7f2] hover:bg-white text-[#520b1a] border border-[#cbaa55]/60 font-serif text-xs uppercase tracking-widest transition-all shadow-sm cursor-pointer"
              title="Download iCal (.ics) file for Apple Calendar or Outlook"
            >
              {downloaded ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Downloaded</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-[#9e782f]" />
                  <span>iCal (.ics)</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
