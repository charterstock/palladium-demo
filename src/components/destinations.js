import Image from "next/image";

export function Destinations() {
  const spots = [
    {
      name: "Ibiza, Spain",
      img: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?cs=srgb&dl=pexels-thorsten-technoman-109353-338504.jpg&fm=jpg",
    },
    {
      name: "Sicily, Italy",
      img: "https://media.istockphoto.com/id/1420792712/photo/hotels-and-beaches-along-coastline-below-taormina-in-sicily.jpg?s=612x612&w=0&k=20&c=B7Ge5z1Ucz99hhHQovVnuzatjEgfxmSV4MfEWFKkFx0=",
    },
    {
      name: "Riviera Maya, Mexico",
      img: "https://www.shutterstock.com/image-photo/aerial-panoramic-view-cancun-beach-600nw-2421381857.jpg",
    },
    {
      name: "Tenerife, Spain",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/dc/61/30/best-tenerife.jpg?w=500&h=-1&s=1",
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
