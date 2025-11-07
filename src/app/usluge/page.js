"use client";

import { useTranslation } from "react-i18next";
import "../../../i18n";

export default function UslugePage() {
  const { t, ready, i18n } = useTranslation();
  if (!ready) return null;

  const dokumenti = t("UslugePage.dokumenti", { returnObjects: true });
  const oblasti = t("UslugePage.oblasti", { returnObjects: true });

  const isArabic = i18n.language === "ar";

  // Conditional direction & alignment
  const directionClass = isArabic ? "rtl" : "ltr";
  const textAlignClass = isArabic ? "text-right" : "text-left";
  const listClass = isArabic ? "list-disc pr-6" : "list-disc pl-6";

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className={`flex flex-col justify-center items-center mt-40 mb-30 md:mt-50 md:mb-40 px-6 ${directionClass}`}
    >
      {/* Content wrapper for centering */}
      <div className="max-w-6xl w-full flex flex-col items-center gap-16">
        {/* Centered heading section */}
        <div className="w-full flex flex-col items-center text-center">
          <h1 className="text-3xl 2xl:text-5xl font-bold mb-2 md:mb-4">{t("UslugePage.heading")}</h1>
          <p className="px-7 md:px-0 text-black text-[13px] md:text-sm lg:text-md xl:text-lg">{t("UslugePage.subheading")}</p>
        </div>

        {/* List content */}
        <div
          className={`text-[13px] md:text-[14px] lg:text-[16px] text-gray-800 leading-relaxed mt-4 w-full ${textAlignClass}`}
        >
          <ul className={listClass}>
            {dokumenti.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="mb-6 text-[16px] md:text-lg lg:text-xl font-medium mt-10">
            {t("UslugePage.oblastiIntro")}
          </p>

          <ul className={listClass}>
            {oblasti.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Bottom notice */}
        <div className="flex justify-center items-center text-left md:text-center text-[13px] md:text-[15px] lg:text-lg font-semibold bg-[var(--secondary)] px-6 py-3 rounded-2xl border-3 border-black">
          {t("UslugePage.bottomNotice")}
        </div>
      </div>
    </div>
  );
}
