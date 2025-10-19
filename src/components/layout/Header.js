"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import "../../../i18n";

export default function Header() {
  const [lang, setLang] = useState("BA");
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const current = i18n.language || "ba";
    setLang(current.toUpperCase());
  }, [i18n.language]);

  const handleClick = () => {
    const newLang = lang === "AR" ? "BA" : "AR";
    setLang(newLang);
    i18n.changeLanguage(newLang.toLowerCase());
  };

  const scrollToPrice = () => {
    const el = document.getElementById("priceSection");
    if (el) {
      const headerOffset = 400;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const scrollToFooter = () => {
    const el = document.getElementById("footer");
    if (el) {
      const headerOffset = 600;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handlePriceClick = () => {
    if (pathname === "/") {
      scrollToPrice();
    } else {
      sessionStorage.setItem("scrollToPrice", "true");
      router.push("/");
    }
  };

  const handleHomeClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      sessionStorage.setItem("scrollToTop", "true");
      router.push("/");
    }
  };

  const handleFooterClick = () => {
    if (pathname === "/") {
      scrollToFooter();
    } else {
      sessionStorage.setItem("scrollToFooter", "true");
      router.push("/");
    }
  };

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-150 w-full max-w-5xl">
      <div className="flex justify-between items-center px-8 py-5 mt-6 rounded-[50px] border border-[#C3C3C3] bg-white font-medium">
        {/* Logo → scroll to footer */}
        <div
          className="flex justify-center items-center flex-row gap-3 bg-transform transition-transform duration-200 hover:scale-105 cursor-pointer"
          onClick={handleFooterClick}
        >
          <img src="/logo.png" alt="Logo" className="w-7 h-auto" />
          <div className="w-[1px] h-9 bg-gradient-to-b from-transparent via-black/95 to-transparent"></div>

          <div className="flex flex-col justify-center items-start text-black leading-tight">
            <p className="text-lg">{t("Header.title")}</p>
            <p className="text-[12px] font-normal text-gray-700 -mt-[2px]">
              {t("Header.subtitle")}
            </p>
          </div>
        </div>

        <nav className="flex flex-row items-center justify-center gap-30">
          <div className="flex flex-row gap-16">
            <button
              onClick={handleHomeClick}
              className="text-black bg-transform transition-transform duration-200 hover:scale-105 cursor-pointer p-0 m-0 inline-flex items-center"
            >
              {t("Header.home")}
            </button>

            <Link
              href="/usluge"
              className="text-black bg-transform transition-transform duration-200 hover:scale-105 cursor-pointer p-0 m-0 inline-flex items-center"
            >
              {t("Header.services")}
            </Link>

            <button
              onClick={handlePriceClick}
              className="text-black bg-transform transition-transform duration-200 hover:scale-105 cursor-pointer"
            >
              {t("Header.prices")}
            </button>

            <button
              onClick={handleFooterClick}
              className="bg-[var(--secondary)] rounded-[12px] border-2 border-black px-4 py-1 bg-transform transition-transform duration-200 hover:scale-105 cursor-pointer"
            >
              <p className="font-medium text-white">{t("Header.contact")}</p>
            </button>

            <button
              onClick={handleClick}
              className="flex justify-center items-center rounded bg-transform cursor-pointer transition-transform duration-200 hover:scale-105"
            >
              <p className="text-black font-medium w-6 text-center">
                {lang}
              </p>
              <img
                src="/arrow-down-black.png"
                alt="Arrow"
                className="w-5 h-auto"
              />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
