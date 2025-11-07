"use client";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "../../../i18n";

export default function Hero() {
  const { t, ready } = useTranslation();

  const handleScroll = () => {
    const section = document.getElementById("services");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  if (!ready) return null;

  return (
    <div className="relative min-w-[350px] w-screen h-[60vh] md:h-[80vh] flex flex-col items-center text-center overflow-hidden mt-45 md:mt-50">
      {/* Motion container for fade + upward slide */}
      <motion.div
        className="z-20 relative flex flex-col justify-center items-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        <p className="text-xs xs:text-sm sm:text-md md:text-lg xl:text-[25px] text-black">{t("Hero.welcome")}</p>
        <h1 className="text-md xs:text-[19px] sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-black leading-tight mt-3">
          {t("Hero.h1-1")} <br /> {t("Hero.h1-2")}
        </h1>
        <p className="text-black text-center text-[11px] sm:text-[13px] md:text-[16px] lg:text-[17px] w-[90%] md:w-[70%] mt-3 md:mt-5">
          {t("Hero.subtext")}
        </p>

        <motion.button
          onClick={handleScroll}
          className="bg-white border-2 border-black text-[11px] xs:text-xs sm:text-sm md:text-lg font-semibold text-black px-8 sm:px-12 py-1.5 rounded-[14px] mt-8 transition-transform duration-200 transform-gpu hover:scale-105 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          {t("Hero.button")}
        </motion.button>
      </motion.div>
    </div>
  );
}
