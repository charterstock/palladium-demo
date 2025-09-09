export function Experiences() {
  const experiences = [
    {
      title: "Adults‑Only Serenity",
      copy: "Private pools, quiet beaches, and low‑key lounges designed for time together.",
      icon: "M12 3l2.09 6.26H21l-5.17 3.76 1.97 6.23L12 15.51 6.2 19.25l1.97-6.23L3 9.26h6.91L12 3z",
    },
    {
      title: "All‑Inclusive Ease",
      copy: "Dining, drinks, and daily activities covered—so vacations feel like vacations.",
      icon: "M3 12l18 0M12 3l0 18",
    },
    {
      title: "Family Clubs",
      copy: "Creative spaces and hosted adventures for little travelers and teens alike.",
      icon: "M4 6h16v12H4z M8 10h8v4H8z",
    },
    {
      title: "Wellness & Rituals",
      copy: "From sunrise yoga to locally inspired spa therapies and sound baths.",
      icon: "M12 4a8 8 0 100 16 8 8 0 000-16z",
    },
  ];
  return (
    <section id="experiences" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Signature Experiences
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-neutral-600">
          Pick a vibe—serene, spirited, or somewhere in between. Our properties
          are built around the way you travel.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((e) => (
            <article
              key={e.title}
              className="rounded-2xl border bg-white p-5 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d={e.icon} />
                </svg>
              </div>
              <h3 className="mt-3 font-semibold">{e.title}</h3>
              <p className="mt-1 text-sm text-neutral-600">{e.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
