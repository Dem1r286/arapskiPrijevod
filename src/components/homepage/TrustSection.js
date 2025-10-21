"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../../../i18n";

export default function TrustSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const { t, i18n, ready } = useTranslation();

  if (!ready) return null;

  // Determine if Arabic (for RTL)
  const isArabic = i18n.language === "ar";

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const animateWord = (word) => (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`inline-block ${isArabic ? "rtl" : ""}`}
    >
      {word.split("").map((char, i) => (
        <motion.span key={i} variants={letterVariants} className="inline-block">
          {char}
        </motion.span>
      ))}
    </motion.span>
  );

  return (
    <div
      ref={sectionRef}
      dir={isArabic ? "rtl" : "ltr"}
      className={`relative flex items-center flex-col justify-center h-[60vh] mt-50 mb-150 w-screen z-100 ${
        isArabic ? "text-right" : "text-left"
      }`}
    >
      {/* BACKGROUND TEXT */}
      <p
        className="absolute z-0 text-black text-[250px] font-medium -translate-y-[35%]"
        style={{ WebkitTextStroke: "5px black" }}
      >
        {animateWord(t("TrustSection.text-1"))}
      </p>

      {/* FOREGROUND WHITE TEXT */}
      <p
        className="absolute z-20 text-white text-[250px] font-medium -translate-y-[31%]"
        style={{ WebkitTextStroke: "5px black" }}
      >
        {animateWord(t("TrustSection.text-1"))}
      </p>

      {/* BLACK BOX */}
      <div className="flex justify-center items-center w-screen h-[20vh] bg-[#202020] z-10"></div>

      {/* BACKGROUND TEXT */}
      <p
        className="absolute z-0 text-black text-[250px] font-medium translate-y-[35%]"
        style={{ WebkitTextStroke: "5px black" }}
      >
        {animateWord(t("TrustSection.text-2"))}
      </p>

      {/* FOREGROUND WHITE TEXT */}
      <p
        className="absolute z-20 text-white text-[250px] font-medium translate-y-[31%]"
        style={{ WebkitTextStroke: "5px black" }}
      >
        {animateWord(t("TrustSection.text-2"))}
      </p>
    </div>
  );
}
