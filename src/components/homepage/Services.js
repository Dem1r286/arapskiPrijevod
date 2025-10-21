"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../../../i18n";

export default function Services() {
  const { t } = useTranslation();

  const allServices = [
    {
      id: 1,
      title: t("Services.service1.title"),
      description: t("Services.service1.description"),
    },
    {
      id: 2,
      title: t("Services.service2.title"),
      description: t("Services.service2.description"),
    },
    {
      id: 3,
      title: t("Services.service3.title"),
      description: t("Services.service3.description"),
    },
    {
      id: 4,
      title: t("Services.service4.title"),
      description: t("Services.service4.description"),
    },
    {
      id: 5,
      title: t("Services.service5.title"),
      description: t("Services.service5.description"),
    },
  ];

  const [activeId, setActiveId] = useState(1);
  const handleSelect = (id) => id !== activeId && setActiveId(id);
  const handleBigNumberClick = () => setActiveId(activeId === 5 ? 1 : activeId + 1);

  const activeService = allServices.find((s) => s.id === activeId);
  const otherServices = allServices;

  // ---- SCROLL ANIMATION ----
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
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

  return (
    <motion.div
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
      id="services"
      className="flex items-center justify-center flex-col w-screen"
    >
      <div className="flex justify-center items-end flex-row gap-10 w-full max-w-[1600px] px-10">
        {/* Left side */}
        <motion.div variants={itemVariants} className="flex flex-col justify-between items-center">
          <div
            className="flex items-center overflow-hidden h-[320px] cursor-pointer select-none mb-28 relative"
            onClick={handleBigNumberClick}
          >
            <span
              className="font-mono font-medium z-10"
              style={{
                WebkitTextStroke: "4px black",
                color: "white",
                fontSize: "320px",
                lineHeight: "1",
              }}
            >
              0
            </span>

            <div className="relative overflow-hidden h-[320px] w-[180px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeService.id}
                  initial={{ y: "50%", opacity: 0.1 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-50%", opacity: 0.1 }}
                  transition={{ type: "tween", duration: 0.4 }}
                  className="absolute top-0 left-0 w-full text-[320px] font-mono font-medium"
                  style={{
                    WebkitTextStroke: "4px black",
                    color: "white",
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
            className="font-semibold text-white text-2xl bg-[var(--secondary)] py-6 border-4 border-black rounded-xl bg-transform transition-transform duration-200 hover:scale-105 cursor-pointer w-[330px]"
            onClick={() => {
              const el = document.getElementById("footer");
              if (el) {
                const headerOffset = 600; // same as in Header
                const elementPosition = el.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }}
          >
            {t("Services.contactButton")}
          </motion.button>
        </motion.div>

        {/* Right side */}
        <motion.div variants={itemVariants} className="flex justify-center items-start flex-col gap-2 max-w-4xl w-full min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col justify-end items-start min-h-[180px] w-full gap-2"
            >
              <p className="font-medium text-[40px]">{activeService.title}</p>
              <p className="text-base">{activeService.description}</p>
            </motion.div>
          </AnimatePresence>

          <motion.div variants={itemVariants} className="flex justify-center items-center flex-col w-full mt-10">
            {otherServices.map((service) => (
              <div key={service.id} className="w-full">
                <div className="w-full h-[1px] bg-black"></div>
                <div
                  className="flex justify-between items-center w-full px-3 py-2 bg-transform transition-transform duration-200 hover:scale-105 cursor-pointer h-[60px]"
                  onClick={() => handleSelect(service.id)}
                >
                  <p className="font-medium text-xl">{service.title}</p>
                  <p
                    className="font-medium text-[30px] font-mono"
                    style={{
                      WebkitTextStroke: "1px black",
                      color: activeId === service.id ? "#ff582f" : "white",
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
