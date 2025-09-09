"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

export default function RoomsPage() {
  const [showCustomerModal, setShowCustomerModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);

  const rooms = [
    {
      id: 1,
      name: "Deluxe Sea View Room",
      price: 220,
      img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Garden Suite",
      price: 180,
      img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Penthouse",
      price: 400,
      img: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero section */}
      <div className="relative bg-neutral-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Available Rooms</h1>
        <p className="mt-2 text-neutral-300">
          Handpicked stays with comfort and elegance
        </p>
      </div>

      {/* Room list */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={room.img}
                  alt={room.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col justify-between h-48">
                <div>
                  <h2 className="text-xl text-gray-800 font-semibold">
                    {room.name}
                  </h2>
                  <p className="text-neutral-600">
                    <span className="text-xl">€{room.price}</span> / night
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedRoom(room);
                    setShowCustomerModal(true);
                  }}
                  className="mt-4 w-full rounded-xl bg-neutral-900 text-white px-4 py-2 font-medium hover:bg-neutral-800 transition-colors"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Customer Checkout Modal */}
      <AnimatePresence>
        {showCustomerModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl text-gray-800"
            >
              <h2 className="text-2xl font-semibold mb-6">Your Details</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  const data = new FormData(e.target);
                  const details = {
                    name: data.get("name"),
                    email: data.get("email"),
                    phone: data.get("phone"),
                    checkIn: data.get("checkIn"),
                    checkOut: data.get("checkOut"),
                  };

                  setBookingDetails(details);
                  setShowCustomerModal(false);
                  setShowSuccessModal(true);
                }}
                className="space-y-4 text-gray-800"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-neutral-900 outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-neutral-900 outline-none"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-neutral-900 outline-none"
                />

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowCustomerModal(false)}
                    className="rounded-lg border px-4 py-2 hover:bg-neutral-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-lg bg-neutral-900 text-white px-4 py-2 hover:bg-neutral-800"
                  >
                    Book
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              className="relative bg-white overflow-scroll rounded-2xl w-[70%] h-[90%] shadow-2xl"
            >
              <div className="p-6 border-b flex justify-between items-center sticky top-0 bg-white z-10">
                <h2 className="text-2xl font-bold text-gray-800">
                  Your Reservation is Confirmed!
                </h2>

                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="rounded-lg bg-neutral-900 text-white px-4 py-2 hover:bg-neutral-800"
                >
                  X
                </button>
              </div>

              {/* Booking Summary */}
              <div className="border border-gray-200 rounded-xl m-4 mb-0">
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Booking Summary
                  </h3>
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-neutral-700">
                    <li>
                      <strong>Room:</strong> {selectedRoom?.name}
                    </li>
                    <li>
                      <strong>Check-in:</strong> 10/09/2025
                    </li>
                    <li>
                      <strong>Email:</strong> {bookingDetails?.email}
                    </li>
                    <li>
                      <strong>Check-out:</strong> 12/09/2025
                    </li>
                    <li>
                      <strong>Phone:</strong> {bookingDetails?.phone}
                    </li>
                    <li>
                      <strong>Booking Reference Number:</strong> TE23SD54
                    </li>
                    <li>
                      <strong>Total:</strong> €{selectedRoom?.price * 2}
                    </li>
                  </ul>
                  <div className="flex items-center justify-between mt-4 bg-[#CCF2F3] text-[#0053B8] shadow-[0px_0px_0px_1px_#A0E2EC] rounded-xl p-4">
                    <div className="flex flex-col">
                      <p className="text-xl font-semibold">
                        ⚡ Book now and get more than 10% discount on car
                        rental!
                      </p>
                      <p className="pl-7 text-base font-medium">
                        We will deliver it to the hotel.
                      </p>
                    </div>
                    <a href="#frame">
                      <button className="bg-gray-800 cursor-pointer h-fit p-2 px-4 rounded-lg text-white">
                        Book Now
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <iframe
                id="frame"
                src="https://develop.bookinguru.com/offers/ba12e786-6dc4-4512-9ee8-098520055ea6?scroll=0&hideHeader=true&utm_content=Analytics+Test&hideFilters=true&hideLogo=false&orderBy=price%3Aasc&vertical=cars&utm_source=catalog&utm_medium=referral&hideVerticals=true&hideOfferDetails=true&pickUpLocation=Ibiza&startDate=2025-09-10&startTime=600&endDate=2025-09-12&endTime=600&isDriverAgeBetween30And65=true"
                className="w-[111%] origin-top-left scale-90 h-[4000px] -mb-[400px] border-0"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
