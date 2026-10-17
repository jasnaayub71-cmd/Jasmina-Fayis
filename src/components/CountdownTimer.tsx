import { useEffect, useState } from "react";
import { WeddingConfigType, getTargetTimestamp } from "../config/weddingConfig";
import { Clock, Sparkles, Heart } from "lucide-react";

interface CountdownTimerProps {
  config: WeddingConfigType;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export function CountdownTimer({ config }: CountdownTimerProps) {
  const calculateTimeRemaining = (): TimeRemaining => {
    try {
      const target = getTargetTimestamp(config);
      const now = Date.now();
      const difference = target - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutesLeft = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const secondsLeft = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        days,
        hours: hoursLeft,
        minutes: minutesLeft,
        seconds: secondsLeft,
        isPast: false,
      };
    } catch {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: false };
    }
  };

  const [timeLeft, setTimeLeft] = useState<TimeRemaining>(calculateTimeRemaining);

  useEffect(() => {
    // Recalculate immediately when config changes
    setTimeLeft(calculateTimeRemaining());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, [config.NIKAH_DATE, config.NIKAH_TIME, config.TIMEZONE_OFFSET]);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="py-12 sm:py-16 max-w-4xl mx-auto px-4 text-center">
      {/* Header */}
      <div className="space-y-2 mb-8">
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#99752b] font-medium block">
          Until We Say "Qubool Hai"
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif text-[#3f0712] font-normal tracking-wide">
          Counting Down to Our Blessed Day
        </h3>
        <p className="text-xs sm:text-sm font-serif italic text-[#84162e]">
          Every second brings us closer to this cherished union
        </p>
      </div>

      {timeLeft.isPast ? (
        <div className="bg-[#fcf0f2] border border-[#dec177] rounded-2xl p-8 max-w-lg mx-auto shadow-md">
          <Heart className="w-8 h-8 text-[#84162e] mx-auto mb-3 fill-[#84162e]/20" />
          <h4 className="text-2xl font-serif text-[#520b1a] mb-2 font-normal">
            Alhamdulillah! The Blessed Day Is Here
          </h4>
          <p className="text-sm font-serif text-[#741628] leading-relaxed">
            Celebrating the sacred Nikkah & Wedding of {config.BRIDE_NAME} & {config.GROOM_NAME}. May Allah bless their journey together with barakah and perpetual love.
          </p>
        </div>
      ) : (
        /* Countdown 4 separate boxes */
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto">
          {units.map((unit) => (
            <div
              key={unit.label}
              className="group relative bg-[#fcf0f2] border border-[#dec177]/60 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center overflow-hidden"
            >
              {/* Subtle top gold accent line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#dec177] via-[#cbaa55] to-[#dec177]" />

              {/* Number display with tabular numbers */}
              <span className="text-3xl sm:text-5xl md:text-6xl font-serif font-semibold text-[#520b1a] tabular-nums tracking-tight leading-none group-hover:scale-105 transition-transform duration-300">
                {String(unit.value).padStart(2, "0")}
              </span>

              {/* Unit label */}
              <span className="mt-2 text-[11px] sm:text-xs uppercase tracking-[0.2em] font-serif text-[#99752b] font-medium">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
