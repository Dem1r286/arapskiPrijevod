"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../../../i18n";

export default function Services() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const allServices = [
    { id: 1, title: t("Services.service1.title"), description: t("Services.service1.description") },
    { id: 2, title: t("Services.service2.title"), description: t("Services.service2.description") },
    { id: 3, title: t("Services.service3.title"), description: t("Services.service3.description") },
    { id: 4, title: t("Services.service4.title"), description: t("Services.service4.description") },
    { id: 5, title: t("Services.service5.title"), description: t("Services.service5.description") },
  ];

  const [activeId, setActiveId] = useState(1);
  const handleSelect = (id) => id !== activeId && setActiveId(id);
  const handleBigNumberClick = () => setActiveId(activeId === 5 ? 1 : activeId + 1);

  const activeService = allServices.find((s) => s.id === activeId);
  const otherServices = allServices;

  // ---- SCROLL ANIMATION ----
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      const sequence = async () => {
        await controls.start("visible");
        await controls.start("drop");
      };
      sequence();
    }
  }, [inView, controls]);

  // ---- RESPONSIVE BIG NUMBER STYLES ----
  const [bigNumberStyles, setBigNumberStyles] = useState({
    fontSize: "200px",
    stroke: "3px black",
    numberWidth: "120px",
    numberHeight: "200px",
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 350) {
        setBigNumberStyles({
          fontSize: "110px",
          stroke: "1.5px black",
          numberWidth: "80px",
          numberHeight: "110px",
        });
      } else if (width < 480) {
        setBigNumberStyles({
          fontSize: "120px",
          stroke: "1.5px black",
          numberWidth: "80px",
          numberHeight: "120px",
        });
      } else if (width < 768) {
        setBigNumberStyles({
          fontSize: "150px",
          stroke: "2px black",
          numberWidth: "100px",
          numberHeight: "150px",
        });
      } else if (width < 1024) {
        setBigNumberStyles({
          fontSize: "220px",
          stroke: "3px black",
          numberWidth: "120px",
          numberHeight: "220px",
        });
      } else {
        setBigNumberStyles({
          fontSize: "260px",
          stroke: "4px black",
          numberWidth: "140px",
          numberHeight: "260px",
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ---- VARIANTS ----
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
    drop: { y: 20, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const rtlClass = isArabic ? "lg:flex-row-reverse" : "lg:flex-row";
  const contentAlignClass = isArabic ? "items-end" : "items-start";

  return (
    <motion.div
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
      id="services"
      className={`flex items-center justify-center flex-col w-screen ${isArabic ? "text-right" : "text-left"}`}
    >
      <div className={`flex justify-center h-[480px] md:h-[550px] items-end gap-0 lg:gap-10 w-full min-w-[350px] max-w-[1600px] px-10 sm:px-15 flex-col ${rtlClass}`}>

        {/* --- LEFT SECTION (BIG NUMBER & CONTACT BUTTON) --- */}
        <motion.div
          variants={itemVariants}

          className="flex justify-between items-center w-full lg:w-auto flex-row lg:flex-col">

          <div
            dir="ltr"
            className="flex items-center overflow-hidden cursor-pointer select-none relative lg:mb-45"
            style={{ height: bigNumberStyles.numberHeight }}
            onClick={handleBigNumberClick}
          >
            <span
              className="font-mono-custom font-medium z-10"
              style={{
                WebkitTextStroke: bigNumberStyles.stroke,
                color: "white",
                fontSize: bigNumberStyles.fontSize,
                lineHeight: "1",
              }}
            >
              0
            </span>

            <div
              className="relative"
              style={{ height: bigNumberStyles.numberHeight, width: bigNumberStyles.numberWidth }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeService.id}
                  initial={{ y: "50%", opacity: 0.1 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-50%", opacity: 0.1 }}
                  transition={{ type: "tween", duration: 0.4 }}
                  className="absolute top-0 left-0 w-full font-mono-custom font-medium"
                  style={{
                    WebkitTextStroke: bigNumberStyles.stroke,
                    color: "white",
                    fontSize: bigNumberStyles.fontSize,
                    lineHeight: "1",
                  }}
                >
                  {activeService.id}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <motion.button
            variants={itemVariants}
            className="font-semibold whitespace-nowrap text-xs md:text-xl lg:text-2xl mt-9 lg:mt-0 text-white bg-[var(--secondary)] py-2 xs:py-3 sm:py-4 lg:py-6 border-3 lg:border-4 border-black rounded-xl bg-transform transition-transform duration-200 hover:scale-105 cursor-pointer w-1/2 lg:w-full"
            onClick={() => {
              const el = document.getElementById("footer");
              if (el) {
                const headerOffset = 450;
                const elementPosition = el.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }}
          >
            {t("Services.contactButton")}
          </motion.button>
        </motion.div>

        {/* --- RIGHT SECTION (SERVICE DETAILS & LIST) --- */}
        <motion.div
          variants={itemVariants}
          className={`flex justify-center ${contentAlignClass} flex-col gap-2 max-w-full md:max-w-4xl w-full min-h-[180px] md:min-h-[250px]`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ x: isArabic ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: isArabic ? 50 : -50, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={`flex flex-col justify-end ${contentAlignClass} min-h-[120px] md:min-h-[180px] w-full gap-2`}
              style={{ textAlign: isArabic ? "right" : "left" }}
            >
              <p className="font-medium text-md xs:text-lg sm:text-xl md:text-3xl xl:text-4xl whitespace-nowrap">{activeService.title}</p>
              <p className="text-[10px] sm:text-[14px] md:text-[17px]">{activeService.description}</p>
            </motion.div>
          </AnimatePresence>

          <motion.div variants={itemVariants} className="flex justify-center items-center flex-col w-full mt-6 md:mt-10">
            {otherServices.map((service) => (
              <div key={service.id} className="w-full">
                <div className="w-full h-[1px] bg-black"></div>
                <div
                  className={`flex justify-between items-center w-full px-3 py-2 bg-transform transition-transform duration-200 hover:scale-105 cursor-pointer h-[50px] md:h-[60px] ${isArabic ? "flex-row-reverse" : ""}`}
                  onClick={() => handleSelect(service.id)}
                >
                  <p className="font-medium text-xs sm:text-sm md:text-xl">{service.title}</p>
                  <p
                    dir="ltr"
                    className="font-medium text-2xl md:text-[30px] font-mono-custom"
                    style={{
                      WebkitTextStroke: "1px black",
                      color: activeId === service.id ? "#FF582F" : "white",
                    }}
                  >
                    {String(service.id).padStart(2, "0")}
                  </p>
                </div>
              </div>
            ))}
            <div className="w-full h-[1px] bg-black"></div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}