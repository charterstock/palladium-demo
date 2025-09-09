import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="#" className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-900 text-white font-semibold">
                RC
              </span>
              <span className="font-semibold tracking-wide">
                Resort Collection
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#destinations" className="hover:text-neutral-600">
              Destinations
            </a>
            <a href="#brands" className="hover:text-neutral-600">
              Our Brands
            </a>
            <a href="#experiences" className="hover:text-neutral-600">
              Experiences
            </a>
            <a href="#offers" className="hover:text-neutral-600">
              Offers
            </a>
            <a href="#meetings" className="hover:text-neutral-600">
              Meetings & Events
            </a>
            <a href="#loyalty" className="hover:text-neutral-600">
              Loyalty
            </a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#search"
              className="rounded-xl border px-3 py-2 text-sm hover:bg-neutral-50"
            >
              Find a stay
            </Link>
            <Link
              href="#"
              className="rounded-xl bg-neutral-900 px-3 py-2 text-sm text-white hover:bg-neutral-800"
            >
              Sign in
            </Link>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-lg border p-2"
            aria-label="Open menu"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-sm">
              <a
                href="#destinations"
                className="rounded-lg px-3 py-2 hover:bg-neutral-50"
              >
                Destinations
              </a>
              <a
                href="#brands"
                className="rounded-lg px-3 py-2 hover:bg-neutral-50"
              >
                Our Brands
              </a>
              <a
                href="#experiences"
                className="rounded-lg px-3 py-2 hover:bg-neutral-50"
              >
                Experiences
              </a>
              <a
                href="#offers"
                className="rounded-lg px-3 py-2 hover:bg-neutral-50"
              >
                Offers
              </a>
              <a
                href="#meetings"
                className="rounded-lg px-3 py-2 hover:bg-neutral-50"
              >
                Meetings & Events
              </a>
              <a
                href="#loyalty"
                className="rounded-lg px-3 py-2 hover:bg-neutral-50"
              >
                Loyalty
              </a>
              <div className="flex gap-2 pt-2">
                <Link
                  href="#search"
                  className="flex-1 rounded-xl border px-3 py-2 text-sm text-center"
                >
                  Find a stay
                </Link>
                <Link
                  href="#"
                  className="flex-1 rounded-xl bg-neutral-900 px-3 py-2 text-sm text-white text-center"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
