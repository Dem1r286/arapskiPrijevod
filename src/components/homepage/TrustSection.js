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
      className={`relative flex items-center flex-col justify-center mt-50 md:mt-80 lg:mt-120 w-screen z-100 min-w-[350px] ${isArabic ? "text-right" : "text-left"
        }`}
    >
      <p
        className="absolute z-0 text-black tracking-wide md:tracking-normal text-[55px] xs:text-[65px] sm:text-[100px] md:text-[120px] lg:text-[170px] xl:text-[230px] 2xl:text-[250px] font-bold lg:font-medium -translate-y-[35%] whitespace-nowrap"
        style={{ WebkitTextStroke: "5px black" }}
      >
        {animateWord(t("TrustSection.text-1"))}
      </p>

      {/* FOREGROUND WHITE TEXT */}
      <p
        className="absolute z-20 text-white tracking-wide md:tracking-normal text-[55px] xs:text-[65px] sm:text-[100px] md:text-[120px] lg:text-[170px] xl:text-[230px] 2xl:text-[250px] font-bold lg:font-medium -translate-y-[31%] whitespace-nowrap"
        style={{ WebkitTextStroke: "5px black" }}
      >
        {animateWord(t("TrustSection.text-1"))}
      </p>

      {/* BLACK BOX */}
      <div className="flex justify-center items-center w-screen h-[60px] xs:h-[80px] sm:h-[120px] lg:h-[190px] xl:h-[230px] bg-[#202020] z-10"></div>

      {/* BACKGROUND TEXT */}
      <p
        className="absolute z-0 text-black tracking-wide md:tracking-normal text-[55px] xs:text-[65px] sm:text-[100px] md:text-[120px] lg:text-[170px] xl:text-[230px] 2xl:text-[250px] font-bold lg:font-medium translate-y-[35%] whitespace-nowrap"
        style={{ WebkitTextStroke: "5px black" }}
      >
        {animateWord(t("TrustSection.text-2"))}
      </p>

      {/* FOREGROUND WHITE TEXT */}
      <p
        className="absolute z-20 text-white tracking-wide md:tracking-normal text-[55px] xs:text-[65px] sm:text-[100px] md:text-[120px] lg:text-[170px] xl:text-[230px] 2xl:text-[250px]  font-bold lg:font-medium translate-y-[31%] whitespace-nowrap"
        style={{ WebkitTextStroke: "5px black" }}
      >
        {animateWord(t("TrustSection.text-2"))}
      </p>
    </div>
  );
}