/**
 * ==============================================================================
 * EDITABLE WEDDING INFORMATION CONFIGURATION
 * ==============================================================================
 * Central configuration object driving every section, title, timer, venue card,
 * and contact link across the entire wedding invitation website.
 */

export interface WeddingConfigType {
  // Bride Details
  BRIDE_NAME: string;
  BRIDE_DISPLAY_NAME: string;
  BRIDE_PARENTS: string;
  BRIDE_ADDRESS: string;

  // Groom Details
  GROOM_NAME: string;
  GROOM_DISPLAY_NAME: string;
  GROOM_PARENTS: string;
  GROOM_ADDRESS: string;

  // Date & Time
  NIKAH_DATE: string; // YYYY-MM-DD format (2026-11-14)
  NIKAH_DATE_DISPLAY: string; // e.g. "Saturday, 14 November 2026"
  NIKAH_TIME: string; // e.g. "10:00"
  NIKAH_TIME_DISPLAY: string; // e.g. "10:00 AM"
  COVER_DATE: string; // e.g. "14.11.2026"
  TIMEZONE: string; // "Asia/Kolkata"
  TIMEZONE_OFFSET: string; // "+05:30"

  // Venue & Location
  NIKAH_VENUE: string;
  VENUE_LOCATION: string;
  NIKAH_ADDRESS: string;
  GOOGLE_MAPS_URL: string;

  // Terminology
  EVENT_TITLE: string; // "Nikkah & Wedding"
  CEREMONY_TITLE: string; // "Nikkah & Wedding"

  // Audio
  MUSIC_FILE: string;

  // Visual & Islamic texts
  MONOGRAM_INITIALS: string;
  COVER_NAMES: string;
  DRESS_CODE?: string;
  RECEPTION_NOTE?: string;
  ISLAMIC_BLESSING_ARABIC: string;
  ISLAMIC_BLESSING_ENGLISH: string;
  QURAN_SURAH: string;
  QURAN_ARABIC: string;
  QURAN_TRANSLATION: string;
  INVITATION_MESSAGE: string;
  THANK_YOU_MESSAGE: string;
}

export const INITIAL_WEDDING_CONFIG: WeddingConfigType = {
  // 1. Bride's Details
  BRIDE_NAME: "Jasmina Jebi",
  BRIDE_DISPLAY_NAME: "Jasmina",
  BRIDE_PARENTS: "Mr. Mujeeb & Mrs. Faseela",
  BRIDE_ADDRESS: "Mattara (H)",

  // 2. Groom's Details
  GROOM_NAME: "Muhammed Fayis",
  GROOM_DISPLAY_NAME: "Fayis",
  GROOM_PARENTS: "Mr. Nasar & Mrs. Bushra",
  GROOM_ADDRESS: "Velliyath (H)",

  // 3. Wedding Date & Time (Saturday, 14 November 2026, 10:00 AM IST)
  NIKAH_DATE: "2026-11-14",
  NIKAH_DATE_DISPLAY: "Saturday, 14 November 2026",
  NIKAH_TIME: "10:00",
  NIKAH_TIME_DISPLAY: "10:00 AM",
  COVER_DATE: "14.11.2026",
  TIMEZONE: "Asia/Kolkata",
  TIMEZONE_OFFSET: "+05:30",

  // 4. Venue & Location
  NIKAH_VENUE: "Volpe Occasion Centre",
  VENUE_LOCATION: "Thottasseriyara",
  NIKAH_ADDRESS: "State Highway 65, Thottasseriyara, Kannamangalam, Malappuram, Kerala - 676305",
  GOOGLE_MAPS_URL: "https://maps.app.goo.gl/znavTsacm1uLivbdA",

  // 5. Terminology
  EVENT_TITLE: "Nikkah & Wedding",
  CEREMONY_TITLE: "Nikkah & Wedding",

  // 6. Audio
  MUSIC_FILE: "https://youtu.be/musuf2_Bea4?si=_d1avT2ZMqjwq33e",

  // 7. Visual Elements
  MONOGRAM_INITIALS: "J & F",
  COVER_NAMES: "Jasmina and Fayis",
  DRESS_CODE: "Modest Formal / Traditional Elegance",
  RECEPTION_NOTE: "",

  // 8. Sacred Islamic Texts
  ISLAMIC_BLESSING_ARABIC: "بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
  ISLAMIC_BLESSING_ENGLISH: "May Allah bless you both, shower His blessings upon you, and unite you in goodness.",

  QURAN_SURAH: "Surah Ar-Rum (30:21)",
  QURAN_ARABIC: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ",
  QURAN_TRANSLATION: "And among His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy. Indeed in that are signs for a people who reflect.",

  INVITATION_MESSAGE: "With hearts full of joy and gratitude, we cordially invite you and your family to celebrate the blessed occasion of the Nikkah & Wedding ceremony of our beloved ones. Your prayers, blessings, and gracious presence will make this sacred and joyous occasion truly memorable.",
  THANK_YOU_MESSAGE: "With our deepest gratitude for your heartfelt prayers, love, and joyous company on this blessed beginning."
};

// Aliases and individual named exports
export const WEDDING_CONFIG = INITIAL_WEDDING_CONFIG;

export const BRIDE_NAME = INITIAL_WEDDING_CONFIG.BRIDE_NAME;
export const BRIDE_DISPLAY_NAME = INITIAL_WEDDING_CONFIG.BRIDE_DISPLAY_NAME;
export const BRIDE_PARENTS = INITIAL_WEDDING_CONFIG.BRIDE_PARENTS;
export const BRIDE_ADDRESS = INITIAL_WEDDING_CONFIG.BRIDE_ADDRESS;

export const GROOM_NAME = INITIAL_WEDDING_CONFIG.GROOM_NAME;
export const GROOM_DISPLAY_NAME = INITIAL_WEDDING_CONFIG.GROOM_DISPLAY_NAME;
export const GROOM_PARENTS = INITIAL_WEDDING_CONFIG.GROOM_PARENTS;
export const GROOM_ADDRESS = INITIAL_WEDDING_CONFIG.GROOM_ADDRESS;

export const NIKAH_DATE = INITIAL_WEDDING_CONFIG.NIKAH_DATE;
export const NIKAH_TIME = INITIAL_WEDDING_CONFIG.NIKAH_TIME;
export const NIKAH_VENUE = INITIAL_WEDDING_CONFIG.NIKAH_VENUE;
export const NIKAH_ADDRESS = INITIAL_WEDDING_CONFIG.NIKAH_ADDRESS;
export const GOOGLE_MAPS_URL = INITIAL_WEDDING_CONFIG.GOOGLE_MAPS_URL;
export const MUSIC_FILE = INITIAL_WEDDING_CONFIG.MUSIC_FILE;
export const YOUTUBE_VIDEO_ID = "musuf2_Bea4";

/**
 * Format date consistently e.g., "Saturday, 14 November 2026"
 */
export function formatWeddingDate(dateStr: string): string {
  try {
    const [year, month, day] = dateStr.split("-").map(Number);
    if (!year || !month || !day) return "Saturday, 14 November 2026";
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return "Saturday, 14 November 2026";
  }
}

/**
 * Date formatted as DD.MM.YYYY e.g., "14.11.2026"
 */
export function formatCoverDate(dateStr: string): string {
  try {
    const [year, month, day] = dateStr.split("-").map(Number);
    if (!year || !month || !day) return "14.11.2026";
    const d = String(day).padStart(2, "0");
    const m = String(month).padStart(2, "0");
    return `${d}.${m}.${year}`;
  } catch {
    return "14.11.2026";
  }
}

export const formatShortDate = formatCoverDate;

/**
 * Calculate target timestamp in milliseconds for Asia/Kolkata (IST: UTC+05:30)
 */
export function getTargetTimestamp(config: WeddingConfigType): number {
  try {
    const datePart = config.NIKAH_DATE || "2026-11-14";
    const timePart = config.NIKAH_TIME || "10:00";
    const offset = config.TIMEZONE_OFFSET || "+05:30";
    
    // ISO string with explicit timezone offset for Asia/Kolkata (IST)
    const isoString = `${datePart}T${timePart}:00${offset}`;
    const timestamp = new Date(isoString).getTime();
    
    if (!isNaN(timestamp)) {
      return timestamp;
    }
  } catch {
    // fallback
  }
  // Default to 14 Nov 2026 10:00 AM IST (UTC: 2026-11-14T04:30:00Z)
  return new Date("2026-11-14T10:00:00+05:30").getTime();
}

/**
 * Generate Google Calendar URL with exact venue and timing
 */
export function getGoogleCalendarUrl(config: WeddingConfigType): string {
  const [year, month, day] = (config.NIKAH_DATE || "2026-11-14").split("-").map(Number);
  const [hours, minutes] = (config.NIKAH_TIME || "10:00").split(":").map(Number);
  
  const startYear = String(year || 2026).padStart(4, "0");
  const startMonth = String(month || 11).padStart(2, "0");
  const startDay = String(day || 14).padStart(2, "0");
  const startHour = String(hours !== undefined && !isNaN(hours) ? hours : 10).padStart(2, "0");
  const startMin = String(minutes !== undefined && !isNaN(minutes) ? minutes : 0).padStart(2, "0");
  const endHour = String(Math.min((hours !== undefined && !isNaN(hours) ? hours : 10) + 4, 23)).padStart(2, "0");

  const startFormatted = `${startYear}${startMonth}${startDay}T${startHour}${startMin}00`;
  const endFormatted = `${startYear}${startMonth}${startDay}T${endHour}${startMin}00`;

  const title = encodeURIComponent(`The Nikkah & Wedding of ${config.BRIDE_NAME} & ${config.GROOM_NAME}`);
  const details = encodeURIComponent(
    `You are cordially invited to celebrate the blessed Nikkah & Wedding of ${config.BRIDE_NAME} & ${config.GROOM_NAME}.\n\nDate: ${config.NIKAH_DATE_DISPLAY}\nTime: ${config.NIKAH_TIME_DISPLAY}\nVenue: ${config.NIKAH_VENUE}, ${config.VENUE_LOCATION}\nAddress: ${config.NIKAH_ADDRESS}`
  );
  const location = encodeURIComponent(`${config.NIKAH_VENUE}, ${config.NIKAH_ADDRESS}`);

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startFormatted}/${endFormatted}&ctz=${encodeURIComponent(config.TIMEZONE || "Asia/Kolkata")}&details=${details}&location=${location}`;
}

/**
 * Download standard .ICS calendar file for Apple Calendar / Outlook
 */
export function downloadIcsFile(config: WeddingConfigType) {
  const [year, month, day] = (config.NIKAH_DATE || "2026-11-14").split("-").map(Number);
  const [hours, minutes] = (config.NIKAH_TIME || "10:00").split(":").map(Number);
  
  const startYear = String(year || 2026).padStart(4, "0");
  const startMonth = String(month || 11).padStart(2, "0");
  const startDay = String(day || 14).padStart(2, "0");
  const startHour = String(hours !== undefined && !isNaN(hours) ? hours : 10).padStart(2, "0");
  const startMin = String(minutes !== undefined && !isNaN(minutes) ? minutes : 0).padStart(2, "0");
  const endHour = String(Math.min((hours !== undefined && !isNaN(hours) ? hours : 10) + 4, 23)).padStart(2, "0");

  const icsData = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Luxury Wedding Invitation//Nikkah Celebration//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `SUMMARY:The Nikkah & Wedding of ${config.BRIDE_NAME} & ${config.GROOM_NAME}`,
    `DESCRIPTION:Celebrate the blessed occasion of the Nikkah & Wedding ceremony.\\nDate: ${config.NIKAH_DATE_DISPLAY}\\nTime: ${config.NIKAH_TIME_DISPLAY}\\nVenue: ${config.NIKAH_VENUE}, ${config.VENUE_LOCATION}\\nAddress: ${config.NIKAH_ADDRESS}`,
    `LOCATION:${config.NIKAH_VENUE}, ${config.NIKAH_ADDRESS}`,
    `DTSTART;TZID=Asia/Kolkata:${startYear}${startMonth}${startDay}T${startHour}${startMin}00`,
    `DTEND;TZID=Asia/Kolkata:${startYear}${startMonth}${startDay}T${endHour}${startMin}00`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `Nikkah_Wedding_${config.BRIDE_NAME.replace(/\s+/g, "_")}_${config.GROOM_NAME.replace(/\s+/g, "_")}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
