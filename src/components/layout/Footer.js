"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    return (
        <div id="footer" className="w-screen flex flex-col items-center relative">

            {/* Contact Form — only show on homepage */}
            {isHomePage && (
                <div className="absolute top-0 left-1/2 -translate-x-1/20 -translate-y-1/2 z-20 gap-15 pb-10 pt-25 w-[45%] max-w-[800px] bg-[#222222] rounded-xl flex flex-col items-center">

                    <img
                        src="/binder-clip.png"
                        alt="Binder Clip"
                        className="absolute top-[-580px] right-1/20 -translate-x-1/2 z-[-10] w-23 h-auto"
                    />
                    <img
                        src="/binder-clip.png"
                        alt="Binder Clip"
                        className="absolute top-[-580px] left-1/6 -translate-x-1/2 z-[-10] w-23 h-auto"
                    />

                    <div className="flex justify-center items-center flex-col gap-2">
                        <h2 className="text-5xl font-semibold text-center text-white">Kontaktirajte nas</h2>
                        <p className="text-center text-white w-[90%] text-[15px]">
                            Popunite formu i pokrenite prvi korak ka uspješnoj saradnji. Odgovaramo u najkraćem roku.
                        </p>
                    </div>

                    <form className="w-[60%] flex flex-col justify-center gap-8 text-white ">
                        <input
                            type="text"
                            placeholder="Ime i prezime"
                            className="w-full bg-[#313131] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff582f]"
                        />
                        <input
                            type="text"
                            placeholder="Broj telefona"
                            className="w-full bg-[#313131] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff582f]"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full bg-[#313131] rounded-lg px-4 py-3 mb-5 focus:outline-none focus:ring-2 focus:ring-[#ff582f]"
                        />
                        <textarea
                            placeholder="Poruka"
                            rows="4"
                            className="w-full min-h-[250px] bg-[#313131] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff582f] resize-none"
                        ></textarea>
                    </form>

                    <div className="flex justify-between items-center flex-row w-[70%]">
                        <div className="flex justify-center items-center flex-row gap-6">
                            <a href="viber://chat?number=+38761353525" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="/viber.png"
                                    alt="Viber"
                                    className="w-13 h-auto transition-transform duration-200 hover:scale-105 cursor-pointer"
                                />
                            </a>

                            <a href="https://wa.me/+38761353525" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="/whatsapp.png"
                                    alt="WhatsApp"
                                    className="w-13 h-auto transition-transform duration-200 hover:scale-105 cursor-pointer"
                                />
                            </a>
                        </div>

                        <div className="flex justify-center items-center flex-row gap-6">
                            <button className="flex justify-center items-center bg-[var(--secondary)] px-8 py-2 rounded-[12px] border-3 border-white font-semibold text-md transition-transform duration-200 hover:scale-105 cursor-pointer">
                                <p>Pošaljite</p>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Map — height adjusts by page */}
            <div
                className={`relative w-screen overflow-hidden z-10 mt-[150px] transition-all duration-300 ${isHomePage ? "h-[40vh]" : "h-[20vh]"
                    }`}
            >
                <img
                    src="/map.png"
                    alt="Map"
                    className="w-screen h-full object-cover brightness-75 transition-transform duration-200 hover:scale-105 cursor-pointer"
                    onClick={() =>
                        window.open(
                            "https://www.google.com/maps/place/Obala+Kulina+bana+22,+Sarajevo,+Bosnia+and+Herzegovina",
                            "_blank"
                        )
                    }
                />


                <button
                    className="absolute top-20 left-[150px] bg-[#202020] text-white px-6 py-3 rounded-lg flex items-center gap-4 hover:scale-105 transition-transform duration-200 shadow-lg"
                    onClick={() =>
                        window.open(
                            "https://www.google.com/maps/place/Obala+Kulina+bana+22,+Sarajevo,+Bosnia+and+Herzegovina",
                            "_blank"
                        )
                    }
                >
                    <p>Otvorite lokaciju na Google Maps</p>
                    <span className="h-[2px] w-[30px] bg-white"></span>
                </button>
            </div>

            {/* Main footer content */}
            <div className="w-screen bg-[#1C1C1C] h-[20vh] flex justify-center">
                <div className="flex justify-between items-center w-full max-w-[1500px] px-10 md:px-20">
                    <div className="flex justify-between items-start flex-row gap-20 md:gap-60 text-[15px]">
                        <div className="flex flex-col items-start gap-3">
                            <p className="text-[#5B5B5B] mb-2 text-[17px]">KONTAKT</p>
                            <div className="flex items-center gap-4">
                                <img src="/email.png" alt="Logo" className="w-5 h-auto" />
                                <p className="text-white tracking-wider">emirdemirarapski@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src="/phone.png" alt="Logo" className="w-5 h-auto" />
                                <p className="text-white tracking-wider">
                                    +387 61 353 525 <span className="text-[13px]">(Viber i WhatsApp)</span>
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src="/facebook.png" alt="Logo" className="w-5 h-auto" />
                                <p className="text-white tracking-wider">dr.sci. Emir Demir</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-start">
                            <p className="text-[#5B5B5B] mb-5 text-[17px]">LOKACIJA</p>
                            <div className="flex flex-col items-start text-white text-[15px] tracking-wider">
                                <p>Obala Kulina bana 22</p>
                                <p>71000 Sarajevo</p>
                                <p>Općina Centar</p>
                                <p>BiH</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-2 flex-col transition-transform duration-200 hover:scale-105 cursor-pointer">
                        <p className="text-center text-white text-xs">ignited by</p>
                        <img src="/plamenlogo.png" alt="Logo" className="w-30 h-auto" />
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="w-screen bg-[#1C1C1C] text-center text-white text-xs pb-2">
                © {new Date().getFullYear()} dr.sci. Emir Demir
            </div>
        </div>
    );
}
