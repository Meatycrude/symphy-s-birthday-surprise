import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { memories } from "@/lib/photos";

export const Route = createFileRoute("/memories")({
  component: Memories,
  head: () => ({
    meta: [
      { title: "Our Memories — for Symphy" },
      { name: "description", content: "The beautiful moments we've shared." },
    ],
  }),
});

function Memories() {
  return (
    <main className="relative min-h-screen overflow-hidden pb-24">
      <section className="mx-auto max-w-5xl px-5 pt-20 text-center sm:pt-28">
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-script text-3xl text-primary"
        >our story</motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-3 font-display text-4xl font-semibold text-gradient-rose sm:text-6xl"
        >
          Beautiful Memories 
        </motion.h1>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          A small timeline  — every photo is a heartbeat I want to keep.
        </p>
      </section>

      {/* Timeline */}
      <section className="mx-auto mt-16 max-w-4xl px-5">
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-accent/40 to-transparent sm:left-1/2" />
          {memories.map((m, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: left ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`relative mb-12 flex flex-col sm:flex-row sm:items-center ${left ? "" : "sm:flex-row-reverse"}`}
              >
                <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8">
                  <div className="overflow-hidden rounded-3xl shadow-soft">
                    <img src={m.src} alt={m.date} loading="lazy" className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105" />
                  </div>
                </div>
                <div className="ml-12 mt-4 sm:ml-0 sm:mt-0 sm:w-1/2 sm:px-8">
                  <div className="glass rounded-2xl p-5 shadow-soft">
                    <p className="font-script text-2xl text-primary">{m.date}</p>
                    <p className="mt-2 text-foreground/80">{m.caption}</p>
                  </div>
                </div>
                {/* Dot */}
                <div className="absolute left-4 top-6 -translate-x-1/2 sm:left-1/2">
                  <div className="h-4 w-4 rounded-full bg-gradient-romance shadow-glow" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Letter from Feli */}
      <section className="mx-auto mt-16 max-w-3xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass relative rounded-3xl p-8 shadow-soft sm:p-12"
        >
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-romance px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground shadow-soft">
            A Special Message from Feli
          </div>
          <p className="font-script text-3xl text-primary sm:text-4xl">My dearest Symphy,</p>
          <div className="mt-5 space-y-4 font-display text-lg leading-relaxed text-foreground/85 sm:text-xl">
            <p>
              From the moment you walked into my life, every ordinary day started
              feeling like a celebration. You are the soft melody I never knew I
              was missing — gentle, warm, and entirely mine to love.
            </p>
            <p>
              I'm not sure how I got so lucky, but I thank the universe every
              single day for you. For your laugh, for the way your eyes light up
              when you're excited, for every small moment you've made unforgettable.
            </p>
            <p>
              Today is your day, and I wish I could give you the whole sky.
              Until I can, take this little site, every word, every photo — and
              know they all mean the same thing: <em>I love you, endlessly</em>.
            </p>
          </div>
          <p className="mt-8 text-right font-script text-3xl text-primary">— always yours, Feli</p>
        </motion.div>
      </section>

      <section className="mt-16 flex flex-col items-center px-5">
        <Link to="/surprise">
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
            className="glow-btn rounded-full bg-gradient-romance px-10 py-5 text-base font-semibold text-primary-foreground sm:text-lg"
          >
            One More Surprise… ✨
          </motion.button>
        </Link>
        <Link to="/" className="mt-6 text-sm text-muted-foreground hover:text-primary">← back to the beginning</Link>
      </section>
    </main>
  );
}
