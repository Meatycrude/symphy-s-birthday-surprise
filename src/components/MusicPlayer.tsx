import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { birthdaySong } from "@/lib/photos";

type Ctx = { playing: boolean; toggle: () => void };
const MusicCtx = createContext<Ctx | null>(null);

export function MusicProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const a = new Audio(birthdaySong);
    a.loop = true;
    a.volume = 0.55;
    audioRef.current = a;
    return () => { a.pause(); };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) { a.play().then(() => setPlaying(true)).catch(() => setPlaying(false)); }
    else { a.pause(); setPlaying(false); }
  };

  return (
    <MusicCtx.Provider value={{ playing, toggle }}>
      {children}
      <FloatingToggle />
    </MusicCtx.Provider>
  );
}

export function useMusic() {
  const ctx = useContext(MusicCtx);
  if (!ctx) throw new Error("useMusic outside provider");
  return ctx;
}

function FloatingToggle() {
  const { playing, toggle } = useMusic();
  return (
    <motion.button
      onClick={toggle}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 glass rounded-full px-4 py-3 text-sm font-medium shadow-soft text-foreground"
      aria-label={playing ? "Pause music" : "Play music"}
    >
      {playing ? "🎵 Pause Music" : "🎵 Play Music"}
    </motion.button>
  );
}
