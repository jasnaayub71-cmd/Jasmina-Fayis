import { useState, useEffect } from "react";
import { INITIAL_WEDDING_CONFIG, WeddingConfigType } from "./config/weddingConfig";
import { FallingPetals } from "./components/FallingPetals";
import { AudioPlayer } from "./components/AudioPlayer";
import { OpeningCover } from "./components/OpeningCover";
import { Navbar } from "./components/Navbar";
import { IslamicHeader } from "./components/IslamicHeader";
import { CoupleSection } from "./components/CoupleSection";
import { CountdownTimer } from "./components/CountdownTimer";
import { NikahDetails } from "./components/NikahDetails";
import { QuranicVerse } from "./components/QuranicVerse";
import { RSVPModal } from "./components/RSVPModal";
import { Footer } from "./components/Footer";

export default function App() {
  const [config] = useState<WeddingConfigType>(INITIAL_WEDDING_CONFIG);
  const [isCoverOpen, setIsCoverOpen] = useState(false);
  const [musicTrigger, setMusicTrigger] = useState(false);
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);
  const [guestName, setGuestName] = useState<string | undefined>(undefined);

  // Extract personalized guest name from URL if provided (e.g. ?guest=Uncle+Tariq or ?to=Amina+Family)
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const guest = params.get("guest") || params.get("to") || params.get("invite");
      if (guest) {
        setGuestName(decodeURIComponent(guest.replace(/\+/g, " ")));
      }
    } catch {
      // Ignore URL parsing errors
    }
  }, []);

  const handleOpenInvitation = () => {
    setIsCoverOpen(true);
    setMusicTrigger(true); // Automatically triggers YouTube background melody
  };

  return (
    <div className="min-h-screen bg-parchment text-[#3f0712] relative selection:bg-[#741628] selection:text-[#fdfcf9] overflow-x-hidden">
      {/* 1. Fullscreen Opening Cover with unified circular floral monogram */}
      <OpeningCover
        config={config}
        isOpen={isCoverOpen}
        onOpen={handleOpenInvitation}
        guestName={guestName}
      />

      {/* 2. Floating Rose Petals Animation Layer */}
      <FallingPetals enabled={true} />

      {/* 3. Floating YouTube Background Music Player in Bottom-Right Corner */}
      <AudioPlayer
        youtubeVideoId="musuf2_Bea4"
        autoPlayTrigger={musicTrigger}
      />

      {/* 4. Luxury Decorative Left-Side & Corner Burgundy Floral Elements */}
      {/* Top Left Corner Floral Garland */}
      <div className="fixed -top-10 -left-10 w-48 sm:w-72 md:w-88 pointer-events-none z-10 opacity-90 transition-opacity duration-500">
        <img
          src="/src/assets/images/burgundy_corner_roses_1791994747122.jpg"
          alt="Burgundy Roses Floral Frame"
          className="w-full h-auto object-contain filter drop-shadow-md"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Subtle Bottom Left Side Florals with Jasmina & Fayis wedding card */}
      <div className="fixed -bottom-16 -left-12 w-44 sm:w-64 md:w-80 pointer-events-none z-10 opacity-70 transition-opacity duration-500">
        <img
          src="/src/assets/images/burgundy_wedding_florals_jasmina_1792220812500.jpg"
          alt="Jasmina & Fayis Wedding Floral Invitation Card"
          className="w-full h-auto object-contain filter drop-shadow-sm"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* 5. Navigation Bar */}
      <Navbar
        config={config}
        onOpenRSVP={() => setIsRSVPOpen(true)}
        onOpenCover={() => setIsCoverOpen(false)}
      />

      {/* 6. Main Central Content Container */}
      <main className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Guest greeting badge if URL parameter present */}
        {guestName && (
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1.5 bg-[#fcf0f2] border border-[#dec177]/60 rounded-full text-xs font-serif tracking-widest text-[#6b1024] shadow-xs">
              Honoured Guest: <strong className="font-semibold">{guestName}</strong>
            </span>
          </div>
        )}

        {/* Section 3: Islamic Welcome Section with Bismillah & Invitation Prose */}
        <IslamicHeader config={config} />

        {/* Delicate Golden Divider */}
        <div className="flex items-center justify-center gap-3 w-48 mx-auto my-6 opacity-70">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#cbaa55]" />
          <span className="text-xs text-[#b38b39]">❦</span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#cbaa55]" />
        </div>

        {/* Section 4: Couple's Names & Parents Section with matching circular floral monogram */}
        <CoupleSection config={config} />

        {/* Section 5: Wedding Countdown Timer */}
        <CountdownTimer config={config} />

        {/* Section 6: Nikkah & Wedding Ceremony Details with Venue, Map & Calendar */}
        <NikahDetails config={config} />

        {/* Section 7: Quranic Verse (Surah Ar-Rum 30:21) */}
        <QuranicVerse config={config} />

        {/* Final RSVP Invitation Callout Banner */}
        <section className="py-10 text-center max-w-3xl mx-auto">
          <div className="bg-[#fffefc] border border-[#dec177]/80 rounded-2xl p-8 shadow-md">
            <h4 className="text-2xl font-serif text-[#520b1a] mb-2 font-normal">
              Kindly Favour Us With Your RSVP
            </h4>
            <p className="text-sm font-serif italic text-[#6b1024] mb-6 max-w-lg mx-auto">
              Please let us know if you can join our celebration and grace us with your presence and prayers.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setIsRSVPOpen(true)}
                className="px-8 py-3 rounded-full gold-shimmer-btn text-white font-serif text-xs uppercase tracking-[0.2em] font-medium shadow-md hover:scale-103 active:scale-98 transition-all cursor-pointer"
              >
                RSVP Online
              </button>
            </div>
          </div>
        </section>

        {/* Section 10: Footer & Thank You Message with matching circular floral monogram */}
        <Footer
          config={config}
          onOpenCover={() => setIsCoverOpen(false)}
          onOpenRSVP={() => setIsRSVPOpen(true)}
        />
      </main>

      {/* 7. RSVP Interactive Modal */}
      <RSVPModal
        config={config}
        isOpen={isRSVPOpen}
        onClose={() => setIsRSVPOpen(false)}
      />
    </div>
  );
}
