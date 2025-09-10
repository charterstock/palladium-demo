import Image from "next/image";
import { motion } from "framer-motion";

export function Brands() {
  const brands = [
    {
      name: "Grand Riviera",
      desc: "Flagship luxury resorts with signature suites, private lounges, and curated dining.",
      img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
    },
    {
      name: "Urban Keys",
      desc: "Design‑forward city hotels with rooftop spaces and effortless connectivity.",
      img: "https://img.freepik.com/free-photo/beautiful-luxury-outdoor-swimming-pool-hotel-resort_74190-7433.jpg",
    },
    {
      name: "Family Bay",
      desc: "Bright, playful resorts with clubs for every age and stress‑free all‑inclusive days.",
      img: "https://img.freepik.com/free-photo/type-entertainment-complex-popular-resort-with-pools-water-parks-turkey-with-more-than-5-million-visitors-year-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer_146671-18728.jpg",
    },
    {
      name: "Boutique Coast",
      desc: "Intimate escapes blending local craft, calm beaches, and discreet service.",
      img: "https://static.vecteezy.com/system/resources/thumbnails/047/658/476/small_2x/luxurious-hotel-lobby-with-chandeliers-free-video.jpg",
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
