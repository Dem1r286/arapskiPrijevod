"use client";

import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import "../../../i18n";

export default function Footer() {
    const router = useRouter();
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const { t, ready } = useTranslation();

    if (!ready) return null;

    const scrollToSection = (id, defaultOffset = 400, mobileOffset = 200) => {
        const el = document.getElementById(id);
        if (!el) return;

        const offset = window.innerWidth < 1024 ? mobileOffset : defaultOffset;
        const elementPosition = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    };

    const handleHomeClick = () => {
        if (pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            sessionStorage.setItem("scrollToTop", "true");
            router.push("/");
        }
    };

    const handleServicesClick = () => {
        if (pathname === "/usluge") return;
        router.push("/usluge");
    };

    const handlePriceClick = () => {
        scrollToSection("priceSection", 400, 20);
        if (pathname !== "/") {
            sessionStorage.setItem("scrollToPrice", "true");
            router.push("/");
        }
    };

    return (
        <div id="footer" className="w-screen flex flex-col items-center relative">

            {/* Contact Form — only show on homepage */}
            {isHomePage && (
                <div className="w-[90%] absolute top-0 left-1/2 -translate-x-1/2 xl:-translate-x-1/10 -translate-y-1/2 z-20 gap-15 pb-10 pt-15 2xl:pt-25 px-10 min-w-[300px] max-w-[800px] bg-[#222222] rounded-xl flex flex-col justify-center items-center">

                    <img
                        src="/binder-clip.png"
                        alt="Binder Clip"
                        className="absolute top-[-300px] xl:top-[-580px] right-1/20 -translate-x-1/2 z-[-10] w-12 2xl:w-23 h-auto"
                    />
                    <img
                        src="/binder-clip.png"
                        alt="Binder Clip"
                        className="absolute top-[-300px] xl:top-[-580px] left-1/6 -translate-x-1/2 z-[-10] w-12 2xl:w-23 h-auto"
                    />

                    <div className="w-[100%] flex justify-center items-center flex-col gap-2">
                        <h2 className="text-2xl 2xl:text-5xl font-semibold text-center text-white whitespace-nowrap">{t("Contact.heading")}</h2>
                        <p className="text-center text-white xl:w-[90%] text-xs 2xl:text-[15px]">
                            {t("Contact.subtext")}
                        </p>
                    </div>

                    <form id="contactForm" className="w-full xl:w-[60%] flex flex-col justify-center gap-6 2xl:gap-8 text-white text-[12px]">
                        <input
                            id="InputIme"
                            type="text"
                            placeholder={t("Contact.placeholderName")}
                            className="w-full bg-[#313131] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff582f]"
                        />
                        <input
                            id="InputPhoneNumber"
                            type="text"
                            placeholder={t("Contact.placeholderPhone")}
                            className="w-full bg-[#313131] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff582f]"
                        />
                        <input
                            id="InputEmail"
                            type="email"
                            placeholder={t("Contact.placeholderEmail")}
                            className="w-full bg-[#313131] rounded-lg px-4 py-3 mb-2 xs:mb-5 focus:outline-none focus:ring-2 focus:ring-[#ff582f]"
                        />
                        <textarea
                            id="InputMessage"
                            placeholder={t("Contact.placeholderMessage")}
                            rows="4"
                            className="w-full h-[120px] 2xl:h-[250px] bg-[#313131] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff582f] resize-none"
                        ></textarea>
                    </form>

                    <div className="flex justify-between items-center flex-row w-full xl:w-[70%]">
                        <div className="flex justify-center items-center flex-row gap-3 xs:gap-5 xl:gap-6">
                            <a href="viber://chat?number=+38761353525" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="/viber.png"
                                    alt="Viber"
                                    className="w-11 md:w-13 h-auto transition-transform duration-200 hover:scale-105 cursor-pointer"
                                />
                            </a>

                            <a href="https://wa.me/+38761353525" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="/whatsapp.png"
                                    alt="WhatsApp"
                                    className="w-11 md:w-13 h-auto transition-transform duration-200 hover:scale-105 cursor-pointer"
                                />
                            </a>
                        </div>

                        <div className="flex justify-center items-center flex-row gap-6">
                            <button className="flex justify-center items-center bg-[var(--secondary)] px-6 sm:px-8 py-2 rounded-[12px] border-3 border-white font-semibold text-xs xl:text-md transition-transform duration-200 hover:scale-105 cursor-pointer">
                                <p>{t("Contact.button")}</p>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Map — height adjusts by page */}
            <div
                className={`relative w-screen overflow-hidden z-10 transition-all duration-300 min-w-[300px]
                ${isHomePage ? "mt-[600px] md:mt-[100px] md:h-[40vh]" : "mt-[100px] md:h-[20vh]"} 
                h-[200px]`}
            >
                <iframe
                    src="https://snazzymaps.com/embed/747857"
                    className="absolute inset-0 w-full h-full"
                    style={{ border: "none" }}
                    allowFullScreen
                    title="Snazzy Map"
                ></iframe>

                <button
                    className="absolute top-10 left-6 md:top-20 md:left-[150px] bg-[#202020] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg flex items-center gap-2 md:gap-4 hover:scale-105 transition-transform duration-200 shadow-lg text-sm md:text-base"
                    onClick={() =>
                        window.open(
                            "https://www.google.com/maps/place/Obala+Kulina+bana+22,+Sarajevo,+Bosnia+and+Herzegovina",
                            "_blank"
                        )
                    }
                >
                    <p className="text-xs sm:text-sm md:text-md">{t("Footer.locationButton")}</p>
                    <span className="h-[2px] w-[20px] md:w-[30px] bg-white"></span>
                </button>
            </div>

            {/* Main footer content + navigation + copyright */}
            <div className="relative w-screen bg-[#1C1C1C] flex flex-col justify-between items-center overflow-hidden pt-10 pb-10 md:pt-10 md:pb-20">

                {/* Background circle */}
                <div className="absolute bottom-[-250px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-[#121212]/10 rounded-full blur-3xl z-0"></div>

                {/* Footer navigation bar — on top of main content with logic */}
                <div className="relative z-20 mb-8 border-1 border-white md:hidden rounded-xl px-8 md:px-10 py-3 flex justify-center gap-10 xs:gap-12 sm:gap-14 md:gap-20 text-white text-[13px] xs:text-[14px] md:text-[17px]">
                    <button
                        onClick={handleHomeClick}
                        className="hover:text-[var(--secondary)] transition-colors duration-200"
                    >
                        {t("Header.home")}
                    </button>
                    <button
                        onClick={handleServicesClick}
                        className="hover:text-[var(--secondary)] transition-colors duration-200"
                    >
                        {t("Header.services")}
                    </button>
                    <button
                        onClick={handlePriceClick}
                        className="hover:text-[var(--secondary)] transition-colors duration-200"
                    >
                        {t("Header.prices")}
                    </button>
                </div>

                {/* Main content */}
                <div className="relative z-10 flex justify-between flex-col md:flex-row items-center w-full max-w-[1500px] px-10 py-5 md:py-0 md:px-20">
                    <div className="flex justify-between items-start flex-col md:flex-row gap-15 md:gap-10 lg:gap-40 xl:gap-60">
                        <div className="flex flex-col items-start gap-2 md:gap-3">
                            <p className="text-[#5B5B5B] mb-1 2xl:mb-2 text-sm 2xl:text-[17px]">{t("Footer.headingContact")}</p>
                            <div className="flex items-center gap-4">
                                <img src="/email.png" alt="Logo" className="w-4 md:w-5 h-auto" />
                                <p className="text-xs md:text-sm text-white tracking-wider">emirdemirarapski@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src="/phone.png" alt="Logo" className="w-4 md:w-5 h-auto" />
                                <p className="text-xs md:text-sm text-white tracking-wider">
                                    +387 61 353 525 <span className="text-[13px]">(Viber i WhatsApp)</span>
                                </p>
                            </div>
                            <div
                                className="flex items-center gap-4 transition-transform duration-200 hover:scale-105 cursor-pointer"
                                onClick={() => window.open("https://www.facebook.com/emir.demir.716", "_blank")}
                            >
                                <img src="/facebook.png" alt="Logo" className="w-4 md:w-5 h-auto" />
                                <p className="text-xs md:text-sm text-white tracking-wider">dr.sci. Emir Demir</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-start">
                            <p className="text-[#5B5B5B] mb-2 2xl:mb-5 text-sm 2xl:text-[17px]">{t("Footer.headingLocation")}</p>
                            <div className="text-xs md:text-sm gap-1 md:gap-0 flex flex-col items-start text-white tracking-wider">
                                <p>Obala Kulina bana 22</p>
                                <p>71000 Sarajevo</p>
                                <p>Općina Centar</p>
                                <p>BiH</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-1 md:gap-2 flex-col mt-10 md:mt-0 transition-transform duration-200 hover:scale-105 cursor-pointer">
                        <p className="text-center text-white text-[10px] md:text-xs">ignited by</p>
                        <img src="./plamenlogo.png" alt="Logo" className="w-20 xl:w-30 h-auto" />
                    </div>
                </div>

                {/* Copyright — 5px from bottom */}
                <div className="absolute bottom-[5px] left-0 w-full text-center text-white text-[10px] md:text-xs z-10">
                    © {new Date().getFullYear()} dr.sci. Emir Demir
                </div>
            </div>
        </div>
    );
}
