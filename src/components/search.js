import { useRouter } from "next/navigation";

export function Search() {
  const { push } = useRouter();

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const destination = form.elements.destination.value;
    const startDate = new Date(form.elements.startDate.value)
      .toISOString()
      .slice(0, 10);
    const endDate = new Date(form.elements.endDate.value)
      .toISOString()
      .slice(0, 10);

    push(
      `/rooms?destination=${destination}&startDate=${startDate}&endDate=${endDate}`,
    );
  };

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
          <form
            className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-3"
            onSubmit={onSubmit}
          >
            <input
              aria-label="Destination"
              id="destination"
              placeholder="Where to? (Ibiza, Sicily, Riviera Maya...)"
              className="placeholder:text-gray-500 text-gray-800 border-gray-200 bg-white rounded-xl border px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900"
            />
            <input
              aria-label="Check-in"
              placeholder="Check-in"
              type="date"
              id="startDate"
              className="placeholder:text-gray-500 text-gray-800 border-gray-200 bg-white rounded-xl border px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900"
            />
            <input
              aria-label="Check-out"
              placeholder="Check-out"
              type="date"
              id="endDate"
              className="placeholder:text-gray-500 text-gray-800 border-gray-200 bg-white rounded-xl border px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900"
            />
            <button
              type="submit"
              className="rounded-xl bg-neutral-900 border-gray-200 px-4 py-3 text-sm font-medium text-white hover:bg-neutral-800"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
