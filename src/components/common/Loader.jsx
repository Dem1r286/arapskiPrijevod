"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      className="fixed inset-0 bg-white z-[9999] flex items-center justify-center pointer-events-none"
    >
      <motion.img
        src="/other/loader.webp"
        alt="Loading..."
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: "linear",
        }}
        className="w-10 h-10 object-contain"
      />
    </motion.div>
  );
}
