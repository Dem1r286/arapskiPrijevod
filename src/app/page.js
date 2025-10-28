"use client";
import { useEffect } from "react";
import Hero from "@/components/homepage/Hero";
import PriceSection from "@/components/homepage/PriceSection";
import Services from "@/components/homepage/Services";
import TrustSection from "@/components/homepage/TrustSection";
import DodatneOvjereButton from "@/components/homepage/dodatneOvjereButton";


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
    <div className="flex flex-col items-center justify-between w-screen relative mt-45 md:mt-50">
      <img
        src="/herobackground.png"
        alt="Hero Background"
        className="absolute top-[-6%] left-0 object-contain scale-250 md:scale-100 md:object-cover w-screen h-screen"
        fetchPriority="high"
      />

      <Hero />

      <Services />
      <DodatneOvjereButton />
      <PriceSection />
      <TrustSection />

      {/* Footer background */}
      <div className="absolute left-[-15vw] md:left-[-20vh] bottom-[-85vh] md:bottom-[-50vh] rotate-[70deg] md:rotate-0 w-[100vw] md:w-[50vw] h-[70vh] md:h-[130vh] bg-[url('/footerbackground.png')] bg-no-repeat bg-contain z-0"></div>
    </div>
  );
}
