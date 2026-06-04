/* eslint-disable prettier/prettier */
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { symphyPhotos } from "@/lib/photos";
import { burstConfetti, sideCannons } from "@/lib/confetti";
import { useMusic } from "@/components/MusicPlayer";

export const Route = createFileRoute("/")({
  component: Welcome,
  head: () => ({
    meta: [
      { title: "Happy Birthday, Sheila❤️" },
      { name: "description", content: "A magical birthday surprise from HarryPotter." },
    ],
  }),
});

function Welcome() {
  const { playing, toggle } = useMusic();

  useEffect(() => {
    const t = setTimeout(burstConfetti, 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Soft floating petals */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-3 w-3 rounded-full bg-primary/30 blur-[1px]"
            initial={{ x: `${(i * 53) % 100}%`, y: -20, opacity: 0 }}
            animate={{ y: ["-5%", "110%"], opacity: [0, 1, 0] }}
            transition={{
              duration: 10 + (i % 6),
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
            style={{ left: `${(i * 53) % 100}%` }}
          />
        ))}
      </div>

      <section className="mx-auto flex max-w-6xl flex-col items-center px-5 pt-20 pb-12 text-center sm:pt-28">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-script text-3xl text-primary sm:text-4xl"
        >
          
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-4 font-display text-5xl font-semibold leading-tight text-gradient-rose sm:text-7xl md:text-8xl"
        >
          Happy Birthday, Sheila! ❤️
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          Today the whole world gets a little brighter because you were born. We built this little
          corner of the internet just for you. 
        </motion.p>

        <motion.button
          onClick={() => {
            toggle();
            sideCannons();
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 rounded-full glass px-6 py-3 text-sm font-medium text-foreground shadow-soft"
        >
          {playing ? "🎵 Pause Music" : "Click here"}
        </motion.button>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
          {symphyPhotos.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -6, rotate: i % 2 ? 1 : -1 }}
              className={`group relative overflow-hidden rounded-3xl shadow-soft ${
                i % 5 === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={src}
                alt={`Symphy ${i + 1}`}
                loading="lazy"
                className="aspect-square h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="flex flex-col items-center px-5 pb-24">
        <Link to="/memories">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="glow-btn rounded-full bg-gradient-romance px-10 py-5 text-base font-semibold text-primary-foreground sm:text-lg"
          >
            Step into your Memories →
          </motion.button>
        </Link>
        <p className="mt-4 font-script text-xl text-primary/80">click me,</p>
      </section>
    </main>
  );
}
