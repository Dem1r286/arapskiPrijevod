"use client";

import { useTranslation } from "react-i18next";
import "../../../i18n";

export default function UslugePage() {
  const { t, ready } = useTranslation();

  if (!ready) return null;

  const dokumenti = t("UslugePage.dokumenti", { returnObjects: true });
  const oblasti = t("UslugePage.oblasti", { returnObjects: true });

  return (
    <div className="flex justify-center items-start mt-40 px-50 flex-col gap-20">

      {/* Centered heading section */}
      <div className="w-full flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold mb-4">{t("UslugePage.heading")}</h1>
        <p className="text-black text-lg">{t("UslugePage.subheading")}</p>
      </div>

      {/* List content */}
      <div className="text-[16px] text-gray-800 leading-relaxed mt-10">
        <ul className="list-disc">
          {dokumenti.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <p className="mb-6 text-xl font-medium mt-10">{t("UslugePage.oblastiIntro")}</p>

        <ul className="list-disc">
          {oblasti.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Bottom notice */}
      <div className="flex justify-center items-center text-lg self-center font-semibold bg-[var(--secondary)] px-5 py-2 rounded-2xl border-3 border-black">
        {t("UslugePage.bottomNotice")}
      </div>
    </div>
  );
}
