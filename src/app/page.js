"use client";
import { useEffect } from "react";
import Hero from "@/components/homepage/Hero";
import ImageGallery from "@/components/homepage/ImageGallery";
import PriceSection from "@/components/homepage/PriceSection";
import Services from "@/components/homepage/Services";
import TrustSection from "@/components/homepage/TrustSection";

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
    <div className="flex flex-col items-center justify-between w-full relative mt-50">
      <Hero />
      <Services />
      <ImageGallery />
      <PriceSection />
      <TrustSection />

      {/* Background behind the transition */}
      <div className="absolute left-[-20vh] bottom-[-50vh] w-[50vw] h-[130vh] bg-[url('/footerbackground.png')] bg-no-repeat bg-contain z-0"></div>
    </div>
  );
}
