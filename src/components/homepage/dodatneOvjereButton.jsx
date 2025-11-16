"use client";

import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "../../../i18n";

export default function DodatneOvjereButton() {
  const router = useRouter();
  const { t, ready, i18n } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  if (i18n.language === "ar") return null;

  if (!ready) return null;

  const isArabic = i18n.language === "ar";
  const handleClick = () => router.push("/dodatneOvjere");

  const rtlFlexClass = isArabic ? "flex-row-reverse" : "flex-row";
  const rtlTextClass = isArabic ? "text-right" : "text-left";
  const orangeBlockPositionClass = isArabic
    ? "absolute -bottom-[20px] md:-bottom-[30px] left-[-15px] md:left-[-40px] 2xl:left-[-70px] w-[100px] h-[50px] md:w-[150px] md:h-[70px] 2xl:w-[250px] 2xl:h-[100px]"
    : "absolute -bottom-[20px] md:-bottom-[30px] right-[-15px] md:right-[-40px] 2xl:right-[-70px] w-[100px] h-[50px] md:w-[150px] md:h-[70px] 2xl:w-[250px] 2xl:h-[100px]";
  const arrowMirrorStyle = { transform: isArabic ? "scaleX(-1)" : "scaleX(1)" };

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className="flex items-center justify-center flex-col w-full my-50 md:my-80 xl:my-70 min-w-[350px]"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div
        onClick={handleClick}
        className="relative inline-block group cursor-pointer"
      >
        {/* Orange block behind */}
        <div
          className={`${orangeBlockPositionClass} bg-[var(--secondary)] bg-transform transition-transform duration-300 ease-out group-hover:rotate-[-365deg]`}
        ></div>

        {/* Outer container */}
        <div className="relative border-[#202020] bg-transform transition-transform duration-200 hover:scale-105">
          <div className="absolute -inset-[10px] bg-white rounded-[31px] border-[5px]"></div>

          {/* Main black card */}
          <div
            className={`relative flex justify-between items-center bg-[#202020] text-white px-5 2xl:px-10 py-5 2xl:py-6 gap-2 xs:gap-5 sm:gap-10 md:gap-14 lg:gap-16 xl:gap-18 2xl:gap-20 rounded-[21px] border-[2px] border-white ${rtlFlexClass}`}
          >
            <p
              dir={isArabic ? "rtl" : "ltr"}
              className={`text-sm ssm:text-[17px] md:text-xl lg:text-2xl 2xl:text-3xl font-medium bg-transform transition-transform duration-200 hover:scale-105 ${rtlTextClass}`}
            >
              {t("dodatneOvjereButton.text-1")} <br />
              {t("dodatneOvjereButton.text-2")}
            </p>

            <img
              src="/arrows/right-up-arrow.webp"
              alt="Arrow"
              className="w-10 xs:w-12 sm:w-12 md:w-16 lg:w-22 xl:w-24 2xl:w-28 h-auto object-contain bg-transform transition-transform duration-200 hover:scale-110"
              style={arrowMirrorStyle}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
