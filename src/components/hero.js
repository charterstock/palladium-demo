import { motion } from "framer-motion";
import { Search } from "./search";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28  text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold max-w-3xl"
        >
          Stay where the shoreline meets the extraordinary
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-2xl text-base sm:text-lg text-neutral-100"
        >
          A curated collection of beachfront resorts and urban hideaways across
          the Mediterranean and the Caribbean—crafted for modern travelers,
          families, and curious wanderers.
        </motion.p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#search"
            className="rounded-2xl bg-white/90 text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-white"
          >
            Plan your escape
          </a>
          <a
            href="#experiences"
            className="rounded-2xl border border-white/60 px-5 py-3 text-sm font-medium hover:bg-white/10"
          >
            Explore experiences
          </a>
        </div>
        <Search />
      </div>
    </section>
  );
}
