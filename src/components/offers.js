export function Offers() {
  const promos = [
    {
      title: "Late‑Summer Escape: up to 25% off",
      copy: "Book by September 30. Flexible rates and free cancellation on select stays.",
      tag: "Limited time",
    },
    {
      title: "Stay Longer, Save More",
      copy: "Save an extra 10% on 5+ nights. Members stack an additional 5%.",
      tag: "Members",
    },
    {
      title: "Suite Moments",
      copy: "Complimentary breakfast and lounge access when you reserve a suite.",
      tag: "Suites",
    },
  ];
  return (
    <section id="offers" className="bg-neutral-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Featured Offers
          </h2>
          <a href="#" className="text-sm underline underline-offset-4">
            View all
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {promos.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border bg-white p-5 shadow-sm"
            >
              <span className="inline-flex items-center rounded-full border px-2 py-1 text-xs">
                {p.tag}
              </span>
              <h3 className="mt-3 font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-neutral-600">{p.copy}</p>
              <a
                href="#"
                className="mt-3 inline-block text-sm font-medium underline underline-offset-4"
              >
                Book this offer
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
