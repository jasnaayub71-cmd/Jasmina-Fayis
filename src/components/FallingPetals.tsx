import { useEffect, useRef, useState } from "react";
import { Sparkles, Wind } from "lucide-react";

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  flip: number;
  flipSpeed: number;
  opacity: number;
  color: string;
  swayAmplitude: number;
  swayFrequency: number;
  swayOffset: number;
}

interface FallingPetalsProps {
  enabled?: boolean;
}

export function FallingPetals({ enabled = true }: FallingPetalsProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [active, setActive] = useState(enabled);
  const [density, setDensity] = useState<"gentle" | "lush">("gentle");

  // Burgundy & blush velvet petal shades
  const petalColors = [
    "#6b1024", // deep burgundy
    "#84162e", // wine red
    "#9e1f3a", // crimson velvet
    "#b84d63", // rosewood
    "#d98294", // dusty rose
    "#f2b8c3", // blush pink
  ];

  useEffect(() => {
    // Respect system preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setActive(false);
    }
  }, []);

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const petalCount = density === "lush" ? (width < 768 ? 24 : 45) : (width < 768 ? 14 : 28);
    const petals: Petal[] = [];

    const createPetal = (startY?: number): Petal => ({
      x: Math.random() * width,
      y: startY !== undefined ? startY : Math.random() * -height * 0.5,
      size: Math.random() * 12 + 10,
      speedY: Math.random() * 1.2 + 0.6,
      speedX: (Math.random() - 0.5) * 0.4,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1.5,
      flip: Math.random() * Math.PI,
      flipSpeed: Math.random() * 0.03 + 0.01,
      opacity: Math.random() * 0.45 + 0.45,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
      swayAmplitude: Math.random() * 25 + 15,
      swayFrequency: Math.random() * 0.008 + 0.004,
      swayOffset: Math.random() * Math.PI * 2,
    });

    for (let i = 0; i < petalCount; i++) {
      petals.push(createPetal(Math.random() * height));
    }

    let time = 0;

    const drawPetal = (p: Petal) => {
      ctx.save();
      const currentSway = Math.sin(time * p.swayFrequency + p.swayOffset) * p.swayAmplitude;
      ctx.translate(p.x + currentSway, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.scale(1, Math.cos(p.flip));

      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;

      // Draw graceful curved rose petal silhouette
      ctx.beginPath();
      ctx.moveTo(0, -p.size);
      ctx.bezierCurveTo(p.size * 0.9, -p.size * 0.6, p.size * 1.1, p.size * 0.5, 0, p.size);
      ctx.bezierCurveTo(-p.size * 1.1, p.size * 0.5, -p.size * 0.9, -p.size * 0.6, 0, -p.size);
      ctx.fill();

      // Subtle center vein highlight
      ctx.strokeStyle = "rgba(255, 255, 255, 0.22)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, -p.size * 0.7);
      ctx.lineTo(0, p.size * 0.7);
      ctx.stroke();

      ctx.restore();
    };

    const render = () => {
      time++;
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p, idx) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotationSpeed;
        p.flip += p.flipSpeed;

        if (p.y > height + 40 || p.x < -60 || p.x > width + 60) {
          petals[idx] = createPetal(-20);
        }

        drawPetal(p);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [active, density]);

  return (
    <>
      {active && (
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none z-20 overflow-hidden"
        />
      )}

      {/* Floating control button for accessibility / reduced motion */}
      <div className="fixed bottom-5 left-5 z-40 flex items-center gap-1.5 bg-[#faf7f2]/95 backdrop-blur-md border border-[#cbaa55]/40 text-[#520b1a] px-3 py-1.5 rounded-full shadow-md text-xs font-serif tracking-wider transition-all hover:bg-white">
        <button
          onClick={() => setActive(!active)}
          className="flex items-center gap-1.5 focus:outline-none cursor-pointer"
          title={active ? "Pause falling rose petals" : "Enable falling rose petals"}
          aria-label={active ? "Pause falling rose petals" : "Enable falling rose petals"}
        >
          <Wind className={`w-3.5 h-3.5 text-[#9e1f3a] ${active ? "animate-spin" : "opacity-50"}`} style={{ animationDuration: "8s" }} />
          <span>{active ? "Petals: On" : "Petals: Off"}</span>
        </button>

        {active && (
          <button
            onClick={() => setDensity(d => (d === "gentle" ? "lush" : "gentle"))}
            className="border-l border-[#cbaa55]/30 pl-1.5 text-[11px] text-[#99752b] hover:text-[#520b1a] cursor-pointer"
            title="Toggle petal density"
          >
            {density === "gentle" ? "Gentle" : "Lush"}
          </button>
        )}
      </div>
    </>
  );
}
