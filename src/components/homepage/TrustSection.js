"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function TrustSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 }); 


  const letterVariants = {
    hidden: { opacity: 0, y: 50 },  
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };


  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }, 
  };

  const animateWord = (word) => (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} 
      className="inline-block"
    >
      {word.split("").map((char, i) => (
        <motion.span key={i} variants={letterVariants} className="inline-block">
          {char}
        </motion.span>
      ))}
    </motion.span>
  );

  return (
    <div ref={sectionRef} className="relative flex items-center flex-col justify-center h-[60vh] mt-50 mb-150 w-screen z-100">
      {/* BACKGROUND TEXT */}
      <p className="absolute z-0 text-black text-[250px] font-medium -translate-y-[35%]" style={{ WebkitTextStroke: "5px black" }}>
        {animateWord("20 godina")}
      </p>

      {/* FOREGROUND WHITE TEXT */}
      <p className="absolute z-20 text-white text-[250px] font-medium -translate-y-[31%]" style={{ WebkitTextStroke: "5px black" }}>
        {animateWord("20 godina")}
      </p>

      {/* BLACK BOX */}
      <div className="flex justify-center items-center w-screen h-[20vh] bg-[#202020] z-10"></div>

      {/* BACKGROUND TEXT */}
      <p className="absolute z-0 text-black text-[250px] font-medium translate-y-[35%]" style={{ WebkitTextStroke: "5px black" }}>
        {animateWord("iskustva")}
      </p>

      {/* FOREGROUND WHITE TEXT */}
      <p className="absolute z-20 text-white text-[250px] font-medium translate-y-[31%]" style={{ WebkitTextStroke: "5px black" }}>
        {animateWord("iskustva")}
      </p>
    </div>
  );
}
