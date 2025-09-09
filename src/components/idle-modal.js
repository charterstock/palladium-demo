"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IdleModal() {
  const [showModal, setShowModal] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds
  const idleTimer = useRef(null);

  // detect idle (20s of no movement/keypress)
  useEffect(() => {
    let idleTimeout;

    const resetIdleTimer = () => {
      if (idleTimeout) clearTimeout(idleTimeout);
      if (!showModal && !collapsed) {
        idleTimeout = setTimeout(() => {
          setShowModal(true);
        }, 5000);
      }
    };

    window.addEventListener("mousemove", resetIdleTimer);
    window.addEventListener("keydown", resetIdleTimer);
    window.addEventListener("scroll", resetIdleTimer);

    resetIdleTimer();

    return () => {
      window.removeEventListener("mousemove", resetIdleTimer);
      window.removeEventListener("keydown", resetIdleTimer);
      window.removeEventListener("scroll", resetIdleTimer);
      if (idleTimeout) clearTimeout(idleTimeout);
    };
  }, [showModal, collapsed]);

  // countdown timer
  useEffect(() => {
    if (showModal || collapsed) {
      idleTimer.current = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => {
      if (idleTimer.current) clearInterval(idleTimer.current);
    };
  }, [collapsed, idleTimer, showModal]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <>
      {/* Modal */}
      <AnimatePresence>
        {showModal && !collapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative"
            >
              <button
                onClick={() => setCollapsed(true)}
                className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                ✕
              </button>
              <h2 className="text-xl font-semibold mb-3">
                Free Airport Pick-up 🎉
              </h2>
              <p className="text-gray-600 mb-4">
                Book within the next <strong>20 minutes</strong> and enjoy a
                free airport transfer on arrival.
              </p>
              <div className="p-4 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                <div className="text-4xl text-red-500 font-mono font-bold text-center ">
                  {formatTime(timeLeft)}
                </div>
              </div>
              <button
                className="rounded-xl cursor-pointer bg-neutral-900 border-gray-200 px-4 py-3 text-sm font-medium text-white hover:bg-neutral-800 w-full"
                onClick={() => setCollapsed(true)}
              >
                Continue
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Collapsed timer */}
      {(showModal || collapsed) && (
        <motion.div
          className="fixed bottom-4 left-4 z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <button
            onClick={() => setCollapsed(false)}
            className="bg-[#fff0ec] border-[#fc8b67] text-red-500 px-4 py-2 rounded-xl shadow-lg font-mono font-bold cursor-pointer"
          >
            ⏳ {formatTime(timeLeft)}
          </button>
        </motion.div>
      )}
    </>
  );
}
