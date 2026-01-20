"use client";

import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { Brands } from "../components/brands";
import { Destinations } from "../components/destinations";
import { Experiences } from "../components/experiences";
import { Offers } from "../components/offers";
import { Meetings } from "../components/meetings";
import { Loyalty } from "../components/loyalty";
import { Sustainability } from "../components/sustainability";
import { Newsletter } from "../components/newsletter";
import { Footer } from "../components/footer";

export default function HotelGroupLanding() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />
      <main>
        <Hero />
        <Brands />
        <Destinations />
        <Experiences />
        <Offers />
        <Meetings />
        <Loyalty />
        <Sustainability />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
