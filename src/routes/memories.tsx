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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-script text-3xl text-primary"
        >
          A Collection of Beautiful Memories
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-3 font-display text-4xl font-semibold text-gradient-rose sm:text-6xl"
        ></motion.h1>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">A small timeline</p>
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
                    <img
                      src={m.src}
                      alt={m.date}
                      loading="lazy"
                      className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="ml-12 mt-3 sm:ml-0 sm:mt-0 sm:w-1/2 sm:px-8">
                  <div className="glass rounded-2xl p-5 shadow-soft">
                    <p className="font-script text-2xl text-primary">{m.date}</p>
                    <p className="mt-2 text-foreground/80">{m.caption}</p>
                  </div>
                </div>
                {/* Dot */}
                <div className="absolute left-4 top-6 -translate-x-1/2 sm:left-1/2">
                  <div className="h-3 w-4 rounded-full bg-gradient-romance shadow-glow" />
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
            A Special Message
          </div>
          <p className="font-script text-3xl text-primary sm:text-4xl"></p>
          <div className="mt-5 space-y-4 font-display text-lg leading-relaxed text-foreground/85 sm:text-xl">
            <p>
              Happy Birthday, Sheila! Today, as you celebrate another wonderful year of life, we
              want you to know how much you mean to all of us. Even though you're far away , you
              remain close to our hearts every single day. Distance may separate us, but it can
              never weaken the love, memories, and bond we share as a family.
            </p>

            <p>
              We miss your presence, your laughter, your warmth, and the special way you bring
              people together. Home never quite feels the same without you. As we celebrate you
              today, we are filled with gratitude for the joy, kindness, strength, and love you
              bring into our lives. We are proud of all that you have accomplished and excited for
              all the beautiful things that still lie ahead for you.{" "}
            </p>

            <p>
              We wish we could be there to celebrate this special day by your side, sharing
              laughter, stories, and creating new memories together. Until then, please know that
              our thoughts, prayers, and love are with you. May this new year bring you happiness,
              good health, success, peace, and countless reasons to smile. May every dream you hold
              in your heart find its way to reality, and may you always feel surrounded by love, no
              matter where in the world you are. From every one of us, this message carries the same
              meaning: we love you, we miss you, and we are incredibly grateful to have you as part
              of our family. Happy Birthday, Sheila. May your day be as beautiful and special as you
              are. With all our love, Your Family ❤️
            </p>
          </div>
          <p className="mt-8 text-right font-script text-3xl text-primary">Have a lovely one!</p>
        </motion.div>
      </section>

      <section className="mt-16 flex flex-col items-center px-5">
        <Link to="/surprise">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="glow-btn rounded-full bg-gradient-romance px-10 py-5 text-base font-semibold text-primary-foreground sm:text-lg"
          >
            One More Surprise… ✨
          </motion.button>
        </Link>
        <Link to="/" className="mt-6 text-sm text-muted-foreground hover:text-primary">
          ← back to the beginning
        </Link>
      </section>
    </main>
  );
}
