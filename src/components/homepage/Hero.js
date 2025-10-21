"use client";
import { useTranslation } from "react-i18next";
import "../../../i18n";

export default function Hero() {
  const { t, ready } = useTranslation(); 

  const handleScroll = () => {
    const section = document.getElementById("services");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  if (!ready) return null; 
  return (
    <div className="relative w-screen h-[70vh] flex flex-col items-center text-center overflow-hidden">
      <div className="z-20 relative flex flex-col justify-center items-center px-4">
        <p className="text-[25px] text-black">{t("Hero.welcome")}</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black leading-tight mt-3">
          {t("Hero.h1-1")} <br /> {t("Hero.h1-2")}
        </h1>
        <p className="text-black text-center text-[14px] sm:text-[16px] w-[90%] md:w-[70%] mt-5">
          {t("Hero.subtext")}
        </p>

        <button
          onClick={handleScroll}
          className="bg-white border-2 border-black text-lg font-semibold text-black px-8 sm:px-12 py-1.5 rounded-[14px] mt-8 transition-transform duration-200 transform-gpu hover:scale-105 cursor-pointer"
        >
          {t("Hero.button")}
        </button>
      </div>

      <img
        src="/herobackground.png"
        alt="Hero Background"
        className="absolute bottom-20 left-0 w-full h-full object-cover -rotate-3 z-0"
      />
    </div>
  );
}
