import Image from "next/image";

export function Sustainability() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Our Path to Positive Impact
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              We partner with local communities and global initiatives to
              protect coastlines, reduce waste, and celebrate regional culture
              across our properties.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700 list-disc pl-5">
              <li>100% renewable electricity at flagship resorts</li>
              <li>Zero single‑use plastics in guestrooms</li>
              <li>Locally sourced ingredients & fair‑trade spa products</li>
            </ul>
            <a
              href="#"
              className="mt-4 inline-block rounded-xl border px-4 py-2 text-sm"
            >
              Read our report
            </a>
          </div>
          <div className="relative h-72 overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070&auto=format&fit=crop"
              alt="Coastal conservation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
