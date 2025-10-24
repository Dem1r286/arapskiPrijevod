"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "../../../i18n";

export default function PriceSection() {
  const { t, i18n, ready } = useTranslation(); // Destructure i18n
  
  if (!ready) return null; 

  const isRTL = i18n.language === 'ar'; // Check if the current language is Arabic
  
  // Conditionally adjust rotations and translations for RTL
  const lines = [
    { 
      text: t("Price.price-1"), 
      className: `text-5xl font-bold border-6 border-black px-5 py-4 whitespace-nowrap bg-white ${isRTL ? 'rotate-[5deg]' : 'rotate-[-5deg]'}`,
      // For RTL, we want the rotation to be the mirror of LTR
    },
    { 
      text: t("Price.price-2"), 
      className: `text-4xl font-black bg-[var(--secondary)] border-6 border-black px-5 py-3 whitespace-nowrap ${isRTL ? 'rotate-[-4deg] translate-x-[-50px]' : 'rotate-[4deg] translate-x-[50px]'}`,
      // For RTL, translate-x should be negative to move left
    },
    { 
      text: t("Price.price-3"), 
      className: `text-2xl font-black bg-black text-white border-6 border-black px-5 py-2 whitespace-nowrap translate-y-[-5px] ${isRTL ? 'rotate-[-7deg] translate-x-[5px]' : 'rotate-[7deg] translate-x-[-5px]'}`,
      // For RTL, translate-x should be positive to move right
    },
    { 
      text: t("Price.price-4"), 
      className: `text-5xl font-bold border-6 border-black px-5 py-4 whitespace-nowrap bg-white translate-y-[-5px] ${isRTL ? 'rotate-[-2deg] translate-x-[5px]' : 'rotate-[2deg] translate-x-[-5px]'}`,
      // For RTL, translate-x should be positive to move right
    },
  ];

  const paragraph = t("Price.subtext");

  const totalCols = 8;
  const totalRows = 6;
  const pieceSize = 110;
  const overlapX = 0.685;
  const overlapY = 0.685;

  useEffect(() => {
    const shouldScroll = sessionStorage.getItem("scrollToPrice");
    if (shouldScroll === "true") {
      sessionStorage.removeItem("scrollToPrice");
      setTimeout(() => {
        const el = document.getElementById("priceSection");
        if (el) {
          const headerOffset = 280;
          const elementPosition = el.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 500);
    }
  }, []);

  const mask = [
    [0, 0, 0, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 1, 1, 1],
    [0, 1, 0, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 1, 0, 1, 1, 1],
  ];

  const [pieces, setPieces] = useState([]);
  const [animatePuzzles, setAnimatePuzzles] = useState(false);
  const sectionRef = useRef(null);
  const puzzleRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const lineControls = useAnimation();
  const moveUpControls = useAnimation();
  const letterControls = useAnimation();

  // Initialize puzzle pieces
  useEffect(() => {
    let puzzleIndex = 1;
    const temp = [];
    for (let row = 0; row < totalRows; row++) {
      for (let col = 0; col < totalCols; col++) {
        if (mask[row][col] === 1) {
          temp.push({
            id: puzzleIndex - 1,
            src: `/puzzles/puzzle${puzzleIndex}.png`,
            targetX: col * pieceSize * overlapX,
            targetY: row * pieceSize * overlapY,
            startX: (Math.random() - 0.5) * 800,
            startY: (Math.random() - 0.5) * 600,
            rotateStart: Math.random() * 60 - 30,
          });
          puzzleIndex++;
        }
      }
    }
    setPieces(temp.sort(() => Math.random() - 0.5));
  }, []);

  // Trigger animations
  useEffect(() => {
    if (isInView) {
      lineControls.start("visible");
      setAnimatePuzzles(true);

      // Smooth move up after all lines appear
      const totalLinesDuration = lines.length * 0.5;
      setTimeout(() => {
        moveUpControls.start({ y: 30, transition: { type: "spring", stiffness: 100, damping: 12 } });
      }, totalLinesDuration * 1000);

      // Start letter-by-letter paragraph animation
      setTimeout(() => {
        letterControls.start("visible");
      }, (totalLinesDuration + 0.5) * 1000);
    }
  }, [isInView, lineControls, moveUpControls, letterControls, lines.length]);

  // Variants
  const lineVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.5, duration: 0.7, type: "spring", stiffness: 90, damping: 12 },
    }),
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.015 } },
  };

  const paragraphContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.010 } },
  };

  // Conditionally set flex-direction and text-alignment
  const sectionDirectionClass = isRTL ? 'flex-row-reverse' : 'flex-row';
  const textAlignmentClass = isRTL ? 'items-end text-right' : 'items-start text-left';

  return (
    <div 
      ref={sectionRef} 
      id="priceSection" 
      // Apply the conditional direction class to reverse the left and right sides
      className={`w-screen flex justify-center px-10 gap-50 max-w-[1700px] my-20 ${sectionDirectionClass}`}
    >
      {/* LEFT SIDE (Content) - Now will be on the right in RTL */}
      <motion.div 
        initial={{ y: 0 }} 
        animate={moveUpControls} 
        // Apply text alignment class to align text correctly
        className={`flex flex-col justify-center text-black ${textAlignmentClass}`}
      >
        {lines.map((line, i) => (
          <motion.p
            key={i}
            className={line.className}
            custom={i}
            initial="hidden"
            animate={lineControls}
            variants={lineVariants}
          >
            {line.text}
          </motion.p>
        ))}

        {/* Paragraph letter by letter */}
        <motion.p
          className={`max-w-[500px] text-[16px] mt-8 overflow-hidden ${isRTL ? 'direction-rtl' : ''}`}
          initial="hidden"
          animate={letterControls}
          variants={paragraphContainer}
        >
          {paragraph.split("").map((char, idx) => (
            <motion.span key={idx} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.p>
      </motion.div>

      {/* RIGHT SIDE (Puzzle) - Now will be on the left in RTL */}
      <div
        ref={puzzleRef}
        className="relative"
        style={{
          width: totalCols * pieceSize * overlapX,
          height: totalRows * pieceSize * overlapY,
        }}
      >
        {pieces.map((piece, i) => (
          <motion.div
            key={piece.id}
            className="absolute"
            initial={{ x: piece.startX, y: piece.startY, opacity: 0, rotate: piece.rotateStart }}
            animate={
              animatePuzzles
                ? { x: piece.targetX, y: piece.targetY, opacity: 1, rotate: 0 }
                : { x: piece.startX, y: piece.startY, opacity: 0, rotate: piece.rotateStart }
            }
            transition={{ delay: 0.15 * i, type: "spring", stiffness: 200, damping: 18, mass: 0.7 }}
          >
            <Image src={piece.src} width={pieceSize} height={pieceSize} alt={`Puzzle ${piece.id}`} className="object-cover" priority />
          </motion.div>
        ))}
      </div>
    </div>
  );
}