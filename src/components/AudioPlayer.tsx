import { useEffect, useRef, useState } from "react";
import { Music, VolumeX, Disc, AlertCircle, Loader2 } from "lucide-react";
import { YOUTUBE_VIDEO_ID } from "../config/weddingConfig";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

interface AudioPlayerProps {
  youtubeVideoId?: string;
  autoPlayTrigger?: boolean; // Triggered when "Tap to Open" is clicked by visitor
}

export function AudioPlayer({
  youtubeVideoId = YOUTUBE_VIDEO_ID,
  autoPlayTrigger,
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  const playerRef = useRef<any>(null);
  const pendingPlayRef = useRef(false);
  const playerIdRef = useRef(`yt-audio-${Math.random().toString(36).substring(2, 9)}`);

  // Initialize YouTube IFrame API
  useEffect(() => {
    let isMounted = true;

    const initPlayer = () => {
      if (!window.YT || !window.YT.Player) return;

      const element = document.getElementById(playerIdRef.current);
      if (!element) return;

      try {
        playerRef.current = new window.YT.Player(playerIdRef.current, {
          height: "200",
          width: "200",
          videoId: youtubeVideoId,
          playerVars: {
            autoplay: 0,
            controls: 0,
            disablekb: 1,
            enablejsapi: 1,
            fs: 0,
            loop: 1,
            playlist: youtubeVideoId, // Required for looping single video
            modestbranding: 1,
            playsinline: 1,
            rel: 0,
            iv_load_policy: 3,
            origin: window.location.origin,
          },
          events: {
            onReady: (event: any) => {
              if (!isMounted) return;
              setIsReady(true);
              setHasError(false);

              // If visitor clicked play or tap-to-open while API was initializing
              if (pendingPlayRef.current) {
                try {
                  event.target.playVideo();
                } catch {
                  // Browser gesture restriction handling
                }
                pendingPlayRef.current = false;
              }
            },
            onStateChange: (event: any) => {
              if (!isMounted) return;
              // YT.PlayerState: -1 (unstarted), 0 (ended), 1 (playing), 2 (paused), 3 (buffering), 5 (cued)
              if (event.data === 1) {
                setIsPlaying(true);
                setIsBuffering(false);
                setHasError(false);
              } else if (event.data === 2) {
                setIsPlaying(false);
                setIsBuffering(false);
              } else if (event.data === 3) {
                setIsBuffering(true);
              } else if (event.data === 0) {
                // Loop video as background music
                try {
                  event.target.playVideo();
                } catch {
                  // Loop fallback
                }
              }
            },
            onError: (err: any) => {
              if (!isMounted) return;
              console.warn("YouTube background audio player notification:", err);
              // Handle restricted playback or unavailable video gracefully
              setHasError(true);
              setIsPlaying(false);
              setIsBuffering(false);
            },
          },
        });
      } catch (err) {
        console.warn("Could not instantiate YouTube player:", err);
      }
    };

    // Load YouTube API script if not already present
    if (!window.YT) {
      const existingScript = document.querySelector('script[src*="youtube.com/iframe_api"]');
      if (!existingScript) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
      }

      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (prevCallback) prevCallback();
        if (isMounted) initPlayer();
      };
    } else if (window.YT && window.YT.Player) {
      initPlayer();
    }

    return () => {
      isMounted = false;
      if (playerRef.current && typeof playerRef.current.destroy === "function") {
        try {
          playerRef.current.destroy();
        } catch {
          // Cleanup
        }
      }
    };
  }, [youtubeVideoId]);

  // Handle play/pause toggle
  const toggleMusic = () => {
    if (hasError) {
      // Retry loading if error previously occurred
      setHasError(false);
      setIsBuffering(true);
      if (playerRef.current && typeof playerRef.current.playVideo === "function") {
        try {
          playerRef.current.playVideo();
        } catch {
          setHasError(true);
        }
      }
      return;
    }

    if (isPlaying) {
      if (playerRef.current && typeof playerRef.current.pauseVideo === "function") {
        playerRef.current.pauseVideo();
      }
      setIsPlaying(false);
    } else {
      if (isReady && playerRef.current && typeof playerRef.current.playVideo === "function") {
        setIsBuffering(true);
        try {
          playerRef.current.playVideo();
        } catch {
          setIsBuffering(false);
        }
      } else {
        // Player still loading; mark pending play
        pendingPlayRef.current = true;
        setIsBuffering(true);
      }
    }
  };

  // Trigger playback when visitor clicks "Tap to Open"
  useEffect(() => {
    if (autoPlayTrigger && !isPlaying) {
      if (isReady && playerRef.current && typeof playerRef.current.playVideo === "function") {
        try {
          playerRef.current.playVideo();
        } catch {
          // If browser restricts sound without direct button click
        }
      } else {
        pendingPlayRef.current = true;
      }
    }
  }, [autoPlayTrigger, isReady]);

  return (
    <>
      {/* 
        Hidden YouTube Player Container
        Positioned completely off-screen and invisible so it NEVER renders over the invitation,
        while maintaining active DOM presence so audio playback functions seamlessly.
      */}
      <div
        style={{
          position: "fixed",
          top: "-9999px",
          left: "-9999px",
          width: "1px",
          height: "1px",
          opacity: 0,
          pointerEvents: "none",
          zIndex: -100,
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        <div id={playerIdRef.current} />
      </div>

      {/* Floating Bottom-Right Music Control Button */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center">
        <button
          onClick={toggleMusic}
          aria-label={
            hasError
              ? "Music unavailable"
              : isPlaying
              ? "Pause wedding background music"
              : "Play wedding background music"
          }
          className={`group flex items-center gap-2.5 px-3.5 py-2 rounded-full border shadow-lg backdrop-blur-md transition-all duration-300 cursor-pointer ${
            hasError
              ? "bg-[#faf7f2]/95 text-[#84162e] border-[#84162e]/40 hover:bg-white"
              : isPlaying
              ? "bg-[#6b1024] text-[#fdfcf9] border-[#cbaa55] shadow-[#6b1024]/30 hover:bg-[#84162e]"
              : "bg-[#faf7f2]/95 text-[#6b1024] border-[#cbaa55]/40 hover:bg-white hover:border-[#cbaa55]"
          }`}
          title={
            hasError
              ? "Click to retry music"
              : isPlaying
              ? "Pause Wedding Music"
              : "Play Wedding Music"
          }
        >
          <div className="relative flex items-center justify-center">
            {hasError ? (
              <AlertCircle className="w-4 h-4 text-[#84162e]" />
            ) : isBuffering ? (
              <Loader2 className="w-4 h-4 text-[#dec177] animate-spin" />
            ) : isPlaying ? (
              <Disc
                className="w-4 h-4 text-[#dec177] animate-spin"
                style={{ animationDuration: "3s" }}
              />
            ) : (
              <Music className="w-4 h-4 text-[#84162e] group-hover:scale-110 transition-transform" />
            )}
          </div>

          <span className="text-xs font-serif tracking-wider whitespace-nowrap">
            {hasError
              ? "Music Error"
              : isBuffering
              ? "Loading..."
              : isPlaying
              ? "Music Playing"
              : "Wedding Music"}
          </span>

          <div className="flex items-center text-[#cbaa55]">
            {isPlaying ? (
              <div className="flex items-center gap-0.5 h-3" aria-hidden="true">
                <span
                  className="w-0.5 h-2 bg-[#dec177] rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                />
                <span
                  className="w-0.5 h-3 bg-[#dec177] rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                />
                <span
                  className="w-0.5 h-1.5 bg-[#dec177] rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                />
              </div>
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-[#9e782f]/60" />
            )}
          </div>
        </button>
      </div>
    </>
  );
}
