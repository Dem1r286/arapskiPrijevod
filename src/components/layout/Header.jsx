"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import "../../../i18n";

export default function Header() {
  const [lang, setLang] = useState("BA");
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  const [scrollDir, setScrollDir] = useState("up");
  const lastScrollY = useRef(0);
  const [showHeader, setShowHeader] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const HIDE_THRESHOLD = 50;

  useEffect(() => {
    const current = i18n.language || "ba";
    setLang(current.toUpperCase());
  }, [i18n.language]);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) return;
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY.current) < 10) return;

      if (currentScrollY > HIDE_THRESHOLD) {
        if (currentScrollY > lastScrollY.current) {
          setScrollDir("down");
          setShowHeader(false);
        } else if (currentScrollY < lastScrollY.current) {
          setScrollDir("up");
          setShowHeader(true);
        }
      } else {
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflowY = menuOpen ? "hidden" : "auto";
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
      document.body.style.overflowX = "hidden";
    };
  }, [menuOpen]);

  const handleLangClick = () => {
    const newLang = lang === "AR" ? "BA" : "AR";
    setLang(newLang);
    i18n.changeLanguage(newLang.toLowerCase());

    if (menuOpen) setMenuOpen(false);
  };

  const scrollToSection = (id, defaultOffset = 400, mobileOffset = 200) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = window.innerWidth < 1024 ? mobileOffset : defaultOffset;
    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
  };

  const handlePriceClick = () => {
    scrollToSection("priceSection", 400, 20);
    if (pathname !== "/") {
      sessionStorage.setItem("scrollToPrice", "true");
      router.push("/");
    }
    setMenuOpen(false);
  };

  const handleFooterClick = () => {
    scrollToSection("footer", 600, 450);
    if (pathname !== "/") {
      sessionStorage.setItem("scrollToFooter", "true");
      router.push("/");
    }
    setMenuOpen(false);
  };

  const handleHomeClick = () => {
    if (pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
    else {
      sessionStorage.setItem("scrollToTop", "true");
      router.push("/");
    }
    setMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      sessionStorage.setItem("scrollToTop", "true");
      router.push("/");
    }
    setMenuOpen(false);
  };

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.div
          key="header"
          initial={{ scale: 0.9, opacity: 0, y: -40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: -40 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed top-0 min-w-[350px] left-0 right-0 z-[150] flex justify-center px-4 sm:px-6"
        >
          <div className="flex justify-between items-center w-full max-w-5xl px-6 md:px-8 py-4 md:py-6 mt-6 rounded-[50px] border-2 md:border-2 border-black bg-white font-medium relative overflow-hidden">
            {/* --- LOGO --- */}
            <div
              className="flex justify-center items-center flex-row gap-2 md:gap-3 transition-transform duration-200 hover:scale-105 cursor-pointer z-300"
              onClick={handleLogoClick}
            >
              <img src="/icons/logo.webp" alt="Logo" className="w-6 md:w-7 h-auto" />
              <div className="w-[1px] h-9 bg-gradient-to-b from-transparent via-black/95 to-transparent"></div>
              <div className="flex flex-col justify-center items-start text-black leading-tight">
                <p className="text-sm md:text-lg">{t("Header.title")}</p>
                <p className="text-[9px] xs:text-[10px] sm:text-[11px] md:text-[12px] font-normal text-gray-700 -mt-[1px] md:-mt-[3px]">
                  {t("Header.subtitle")}
                </p>
              </div>
            </div>

            {/* --- DESKTOP NAV --- */}
            <div className="hidden lg:flex flex-row gap-10 xl:gap-15 items-center">
              <button onClick={handleHomeClick} className="hover:scale-105 transition-transform cursor-pointer">
                {t("Header.home")}
              </button>
              <Link href="/usluge" className="hover:scale-105 transition-transform cursor-pointer">
                {t("Header.services")}
              </Link>
              <button onClick={handlePriceClick} className="hover:scale-105 transition-transform cursor-pointer">
                {t("Header.prices")}
              </button>
              <button
                onClick={handleFooterClick}
                className="bg-[var(--secondary)] rounded-[12px] border-2 border-black px-4 py-1 text-white hover:scale-105 transition-transform cursor-pointer"
              >
                {t("Header.contact")}
              </button>
              <button
                onClick={handleLangClick}
                className="flex items-center hover:scale-105 transition-transform cursor-pointer"
              >
                <p className="text-black font-medium w-6 text-center">{lang}</p>
                <img src="/arrows/arrow-down-black.webp" alt="Arrow" className="w-5 h-auto" />
              </button>
            </div>

            {/* --- MOBILE NAV BUTTON --- */}
            <div className="lg:hidden flex items-center relative z-[200]">
              <button
                id="hamburgerButton"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen((prev) => !prev)}
                className="flex flex-col justify-center items-center w-8 h-8 gap-[5px] relative z-[300] cursor-pointer"
              >
                <span
                  className={`w-6 h-[2px] bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""
                    }`}
                ></span>
                <span
                  className={`w-6 h-[2px] bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                    }`}
                ></span>
                <span
                  className={`w-6 h-[2px] bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                    }`}
                ></span>
              </button>
            </div>
          </div>

          {/* --- MOBILE MENU --- */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 w-screen h-screen flex flex-col justify-center bg-white items-center gap-15 lg:hidden z-[150] overflow-x-hidden"
              >
                <button onClick={handleHomeClick} className="text-xl font-medium">
                  {t("Header.home")}
                </button>
                <Link
                  href="/usluge"
                  onClick={() => setMenuOpen(false)}
                  className="text-xl font-medium"
                >
                  {t("Header.services")}
                </Link>
                <button onClick={handlePriceClick} className="text-xl font-medium">
                  {t("Header.prices")}
                </button>
                <button
                  onClick={handleFooterClick}
                  className="bg-[var(--secondary)] rounded-[10px] border-2 border-black px-6 py-1 text-white text-xl font-medium"
                >
                  {t("Header.contact")}
                </button>

                <button
                  onClick={handleLangClick}
                  className="flex items-center hover:scale-105 transition-transform"
                >
                  <p className="text-black text-lg font-medium w-6 text-center">{lang}</p>
                  <img src="/arrows/arrow-down-black.webp" alt="Arrow" className="w-5 h-auto" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
