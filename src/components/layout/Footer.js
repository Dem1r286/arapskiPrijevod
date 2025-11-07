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
        scrollToSection("priceSection", 400, 250);
        if (pathname !== "/") {
            sessionStorage.setItem("scrollToPrice", "true");
            router.push("/");
        }
    };

    return (
        <div id="footer" className="w-screen flex flex-col items-center relative">


            {/* Map — height adjusts by page */}
            <div
                className={`relative w-screen overflow-hidden z-10 transition-all duration-300 min-w-[300px]
                ${isHomePage ? "xl:h-[40vh]" : "md:h-[20vh]"} 
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
                    className="absolute top-10 left-6 xl:top-20 md:left-[50px] xl:left-[150px] bg-[#202020] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg flex items-center gap-2 md:gap-4 hover:scale-105 transition-transform duration-200 shadow-lg text-sm md:text-base"
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

               
               
               
               
                {/* Footer navigation bar */}
                <div className="relative z-20 mb-8 border-1 border-white lg:hidden rounded-xl px-8 md:px-10 py-3 flex justify-center gap-10 xs:gap-12 sm:gap-14 md:gap-20 text-white text-[13px] xs:text-[14px] md:text-[17px]">
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

                <div className="relative z-10 flex justify-between flex-col lg:flex-row items-center w-full max-w-[1500px] px-10 py-5 md:pt-10 lg:pt-0 md:py-0 lg:px-20">
                   
                   
                    <div className="flex justify-between items-start flex-col lg:flex-row gap-15 lg:gap-10 lg:gap-40 xl:gap-60">
                        <div className="flex flex-col items-start gap-2 md:gap-3">
                            <p className="text-[#5B5B5B] mb-1 2xl:mb-2 text-sm 2xl:text-[17px]">{t("Footer.headingContact")}</p>
                            <div className="flex items-center gap-4">
                                <img src="/icons/email.webp" alt="Logo" className="w-4 md:w-5 h-auto" />
                                <p className="text-xs md:text-sm text-white tracking-wider">emirdemirarapski@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src="/icons/phone.webp" alt="Logo" className="w-4 md:w-5 h-auto" />
                                <p className="text-xs md:text-sm text-white tracking-wider">
                                    +387 61 353 525 <span className="text-[13px]">(Viber i WhatsApp)</span>
                                </p>
                            </div>
                            <div
                                className="flex items-center gap-4 transition-transform duration-200 hover:scale-105 cursor-pointer"
                                onClick={() => window.open("https://www.facebook.com/emir.demir.716", "_blank")}
                            >
                                <img src="/icons/facebook.webp" alt="Logo" className="w-4 md:w-5 h-auto" />
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


                    <div className="flex justify-center items-center gap-1 lg:gap-2 flex-col mt-10 md:mt-20 lg:mt-0 transition-transform duration-200 hover:scale-105 cursor-pointer">
                        <p className="text-center text-white text-[10px] md:text-xs">ignited by</p>
                        <img src="/icons/plamenlogo.webp" alt="Logo" className="w-20 xl:w-30 h-auto" />
                    </div>


                </div>


                <div className="absolute bottom-[15px] md:bottom[5px] left-0 w-full text-center text-white text-[10px] md:text-xs z-10">
                    © {new Date().getFullYear()} dr.sci. Emir Demir
                </div>

            </div>
        </div>
    );
}
