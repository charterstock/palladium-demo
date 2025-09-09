import Image from "next/image";

export function Loyalty() {
  return (
    <section id="loyalty" className="bg-neutral-900 text-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Join Shoreline Rewards
            </h2>
            <p className="mt-2 text-sm text-neutral-200">
              Members earn points on every stay, unlock room upgrades, and enjoy
              exclusive rates—plus welcome perks at check‑in.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-200 list-disc pl-5">
              <li>Earn & redeem across all brands</li>
              <li>Member‑only offers and early access</li>
              <li>Complimentary late checkout (subject to availability)</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-neutral-900"
              >
                Join now
              </a>
              <a
                href="#"
                className="rounded-xl border border-white/30 px-4 py-2 text-sm"
              >
                Sign in
              </a>
            </div>
          </div>
          <div className="relative h-72 overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
              alt="Loyalty moments"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
