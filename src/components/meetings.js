import Image from "next/image";

export function Meetings() {
  return (
    <section id="meetings" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Meetings, Weddings & Private Events
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              From boardrooms with sea views to barefoot beach ceremonies, our
              dedicated planners and on‑site tech teams turn big ideas into
              effortless gatherings.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700 list-disc pl-5">
              <li>Modular venues with daylight and pro AV</li>
              <li>Bespoke menus by resident chefs</li>
              <li>Group rates and room blocks</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white"
              >
                Plan an event
              </a>
              <a href="#" className="rounded-xl border px-4 py-2 text-sm">
                View venues
              </a>
            </div>
          </div>
          <div className="relative h-72 overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop"
              alt="Event space"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
