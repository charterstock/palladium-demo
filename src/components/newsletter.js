export function Newsletter() {
  return (
    <section className="bg-neutral-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-semibold">
                Travel with us in your inbox
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                Get stories, openings, and exclusive offers—no spam, just
                sunshine.
              </p>
            </div>
            <form className="flex gap-3">
              <input
                aria-label="Email"
                placeholder="you@example.com"
                className="w-full rounded-xl border px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900"
              />
              <button
                type="button"
                className="rounded-xl bg-neutral-900 px-4 py-3 text-sm font-medium text-white hover:bg-neutral-800"
              >
                Subscribe
              </button>
            </form>
          </div>
          <p className="mt-2 text-xs text-neutral-500">
            You can unsubscribe at any time. By subscribing, you agree to our
            Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
}
