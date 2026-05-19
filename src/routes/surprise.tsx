import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useMemo } from "react";
import { symphyPhotos } from "@/lib/photos";
import { startContinuousConfetti, burstConfetti } from "@/lib/confetti";
import { useMusic } from "@/components/MusicPlayer";

export const Route = createFileRoute("/surprise")({
  component: Surprise,
  head: () => ({
    meta: [
      { title: "A Surprise for Symphy ✨" },
      { name: "description", content: "A floating dream for the most incredible girl in the world." },
    ],
  }),
});

function Surprise() {
  const { playing, toggle } = useMusic();

  useEffect(() => {
    burstConfetti();
    const stop = startContinuousConfetti();
    if (!playing) toggle();
    return () => stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Pre-compute random positions/animations
  const floaters = useMemo(() => {
    return symphyPhotos.concat(symphyPhotos).map((src, i) => ({
      src,
      key: i,
      size: 90 + ((i * 37) % 110),
      startX: ((i * 73) % 100),
      startY: ((i * 41) % 100),
      driftX: 30 + ((i * 17) % 60),
      driftY: 20 + ((i * 23) % 50),
      duration: 14 + ((i * 7) % 12),
      delay: (i % 6) * 0.6,
      rot: (i % 2 ? 1 : -1) * (4 + (i % 5)),
    }));
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Floating gallery */}
      <div className="pointer-events-none absolute inset-0">
        {floaters.map((f) => (
          <motion.div
            key={f.key}
            className="absolute overflow-hidden rounded-2xl shadow-soft ring-1 ring-white/40"
            style={{ width: f.size, height: f.size, left: `${f.startX}%`, top: `${f.startY}%` }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: [0, 0.85, 0.85, 0],
              x: [0, f.driftX, -f.driftX, 0],
              y: [0, -f.driftY, f.driftY, 0],
              rotate: [0, f.rot, -f.rot, 0],
              scale: [0.7, 1, 1, 0.7],
            }}
            transition={{ duration: f.duration, repeat: Infinity, delay: f.delay, ease: "easeInOut" }}
          >
            <img src={f.src} alt="Symphy" loading="lazy" className="h-full w-full object-cover" />
          </motion.div>
        ))}
      </div>

      {/* Soft overlay so text remains readable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/80" />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-5 py-24 text-center">
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="font-script text-4xl text-primary">
          my forever
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mt-4 font-display text-5xl font-semibold text-gradient-rose sm:text-7xl"
        >
          You, Symphy. Always you.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="glass mt-12 max-w-2xl rounded-3xl p-8 shadow-soft sm:p-12"
        >
          <p className="font-display text-xl leading-relaxed text-foreground sm:text-2xl">
            To the most incredible girl in the world  your smile lights up my
            whole life. Happy Birthday, Symphy.
          </p>
          <p className="mt-6 font-script text-2xl text-primary">all my love, Feli ❤️</p>
        </motion.div>

        <Link to="/" className="mt-10 text-sm text-muted-foreground hover:text-primary">
          ← back to the beginning
        </Link>
      </section>
    </main>
  );
}
