export function Search() {
  return (
    <section id="search">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl bg-white border p-4 sm:p-6 mt-8">
          <h2 className="text-gray-900 text-lg font-semibold">
            Find your next stay
          </h2>
          <p className="text-sm text-neutral-600">
            Dates, destination, and guests—ready when you are.
          </p>
          <form className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-3">
            <input
              aria-label="Destination"
              placeholder="Where to? (Ibiza, Sicily, Riviera Maya...)"
              className="placeholder:text-gray-500 text-gray-800 border-gray-200 bg-white rounded-xl border px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900"
            />
            <input
              aria-label="Check-in"
              placeholder="Check-in"
              type="date"
              className="placeholder:text-gray-500 text-gray-800 border-gray-200 bg-white rounded-xl border px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900"
            />
            <input
              aria-label="Check-out"
              placeholder="Check-out"
              type="date"
              className="placeholder:text-gray-500 text-gray-800 border-gray-200 bg-white rounded-xl border px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900"
            />
            <a href="/rooms">
              <button
                type="button"
                className="rounded-xl bg-neutral-900 border-gray-200 px-4 py-3 text-sm font-medium text-white hover:bg-neutral-800"
              >
                Search
              </button>
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}
