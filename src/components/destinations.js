import Image from "next/image";

export function Destinations() {
  const spots = [
    {
      name: "Ibiza, Spain",
      img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2069&auto=format&fit=crop",
    },
    {
      name: "Sicily, Italy",
      img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2069&auto=format&fit=crop",
    },
    {
      name: "Riviera Maya, Mexico",
      img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2069&auto=format&fit=crop",
    },
    {
      name: "Tenerife, Spain",
      img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2069&auto=format&fit=crop",
    },
  ];
  return (
    <section id="destinations" className="bg-neutral-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Destinations by the sea—and beyond
          </h2>
          <a href="#" className="text-sm underline underline-offset-4">
            View map
          </a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {spots.map((s) => (
            <article
              key={s.name}
              className="overflow-hidden rounded-2xl border bg-white shadow-sm"
            >
              <div className="relative h-44">
                <Image src={s.img} alt={s.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{s.name}</h3>
                <p className="mt-1 text-sm text-neutral-600">
                  Sun‑kissed days, late‑night culture, and everything in
                  between.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
