import Image from "next/image";
import { motion } from "framer-motion";

export function Brands() {
  const brands = [
    {
      name: "Grand Riviera",
      desc: "Flagship luxury resorts with signature suites, private lounges, and curated dining.",
      img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2069&auto=format&fit=crop",
    },
    {
      name: "Urban Keys",
      desc: "Design‑forward city hotels with rooftop spaces and effortless connectivity.",
      img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2069&auto=format&fit=crop",
    },
    {
      name: "Family Bay",
      desc: "Bright, playful resorts with clubs for every age and stress‑free all‑inclusive days.",
      img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2069&auto=format&fit=crop",
    },
    {
      name: "Boutique Coast",
      desc: "Intimate escapes blending local craft, calm beaches, and discreet service.",
      img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2069&auto=format&fit=crop",
    },
  ];
  return (
    <section id="brands" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold">Our Brands</h2>
          <a href="#" className="text-sm underline underline-offset-4">
            See all brands
          </a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((b) => (
            <motion.article
              key={b.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group overflow-hidden rounded-2xl border bg-white shadow-sm"
            >
              <div className="relative h-44">
                <Image
                  src={b.img}
                  alt={b.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{b.name}</h3>
                <p className="mt-1 text-sm text-neutral-600">{b.desc}</p>
                <a
                  href="#"
                  className="mt-3 inline-block text-sm font-medium underline underline-offset-4"
                >
                  Discover
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
