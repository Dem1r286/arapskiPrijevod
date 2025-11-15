"use client";
import { useEffect } from "react";
import Hero from "@/components/homepage/Hero";
import PriceSection from "@/components/homepage/PriceSection";
import Services from "@/components/homepage/Services";
import TrustSection from "@/components/homepage/TrustSection";
import DodatneOvjereButton from "@/components/homepage/dodatneOvjereButton";
import ContactForm from "@/components/homepage/ContactForm";

export default function Home() {
  useEffect(() => {
    const scrollTo = (id, offset = 200) => {
      const el = document.getElementById(id);
      if (el) {
        const elementPosition = el.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    };

    if (sessionStorage.getItem("scrollToPrice") === "true") {
      sessionStorage.removeItem("scrollToPrice");
      scrollTo("priceSection", 280);
    } else if (sessionStorage.getItem("scrollToTop") === "true") {
      sessionStorage.removeItem("scrollToTop");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (sessionStorage.getItem("scrollToFooter") === "true") {
      sessionStorage.removeItem("scrollToFooter");
      scrollTo("footer", 180);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-between w-screen relative">
      <img
        src="/other/herobackground.webp"
        alt="Hero Background"
        className="absolute left-0 top-[-5vh] object-contain scale-250 md:scale-100 md:object-cover w-screen h-screen min-h-[900px] md:min-h-[1100px]"
        fetchPriority="high"
      />

      <Hero />
      <Services />
      <DodatneOvjereButton />
      <PriceSection />
      <TrustSection />

      {/* === Contact Section === */}
      <div className="relative w-full flex justify-center items-center">
        {/* Responsive Background behind form */}
        <div
          className="
            absolute bottom-[-20vh] left-0 
            w-[100vw] h-auto
            lg:bottom-[-10vh]
            xl:bottom-0
            xl:h-full w-auto
            xl:rotate-[100deg]
            xl:left-[-20vw] 3xl:left-[10vw]
            z-0 overflow-hidden
            transition-all duration-500 ease-in-out z-0
          "
        >
          <img
            src="/other/footerbackground.webp"
            alt="Background behind contact form"
            className="w-full h-full object-cover object-center pointer-events-none select-none"
            loading="lazy"
          />
        </div>

        <ContactForm />
      </div>
    </div>
  );
}