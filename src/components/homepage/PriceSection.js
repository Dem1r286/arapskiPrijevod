"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "../../../i18n";

export default function PriceSection() {
  const { t, i18n, ready } = useTranslation();
  if (!ready) return null;

  const isRTL = i18n.language === "ar";

  // Responsive puzzle piece size
  const [pieceSize, setPieceSize] = useState(60); // default for very small screens

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1536) {
        // 2xl screens — big monitors
        setPieceSize(110);
      } else if (width >= 1280) {
        // xl screens — desktops
        setPieceSize(100);
      } else if (width >= 1024) {
        // lg screens — laptops
        setPieceSize(90);
      } else if (width >= 768) {
        // md screens — tablets
        setPieceSize(80);
      } else if (width >= 640) {
        // sm screens — large phones / small tablets
        setPieceSize(70);
      } else if (width >= 360) {
        // xs screens — regular phones
        setPieceSize(60);
      } else {
        // super small screens
        setPieceSize(50);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const lines = [
    {
      text: t("Price.price-1"),
      className: `text-2xl sm:text-3xl 2xl:text-5xl font-bold border-6 border-black px-5 py-3 sm:py-4 whitespace-nowrap bg-white ${isRTL ? "rotate-[5deg]" : "rotate-[-5deg]"
        } text-center`,
    },
    {
      text: t("Price.price-2"),
      className: `text-xl sm:text-2xl 2xl:text-4xl font-black bg-[var(--secondary)] border-6 border-black px-5 py-2 sm:py-3 whitespace-nowrap ${isRTL ? "rotate-[-4deg] translate-x-[-50px]" : "rotate-[4deg] translate-x-[40px]"
        } text-center`,
    },
    {
      text: t("Price.price-3"),
      className: `text-md sm:text-lg 2xl:text-2xl font-black bg-black text-white border-6 border-black px-5 py-1 sm:py-2 whitespace-nowrap translate-y-[-5px] ${isRTL ? "rotate-[-7deg] translate-x-[5px]" : "rotate-[7deg] translate-x-[-5px]"
        } text-center`,
    },
    {
      text: t("Price.price-4"),
      className: `text-2xl sm:text-3xl 2xl:text-5xl font-bold border-6 border-black px-5 py-3 sm:py-4 whitespace-nowrap bg-white translate-y-[-5px] ${isRTL ? "rotate-[-2deg] translate-x-[5px]" : "rotate-[2deg] translate-x-[-5px]"
        } text-center`,
    },
  ];

  const paragraph = t("Price.subtext");

  const totalCols = 8;
  const totalRows = 6;
  const overlapX = 0.685;
  const overlapY = 0.685;

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

  // Scroll to section if sessionStorage is set
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

  // Generate puzzle pieces
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
  }, [pieceSize]);

  // Animate lines and puzzles when in view
  useEffect(() => {
    if (isInView) {
      lineControls.start("visible");
      setAnimatePuzzles(true);

      const totalLinesDuration = lines.length * 0.5;
      setTimeout(() => {
        moveUpControls.start({
          y: 30,
          transition: { type: "spring", stiffness: 100, damping: 12 },
        });
      }, totalLinesDuration * 1000);

      setTimeout(() => {
        letterControls.start("visible");
      }, (totalLinesDuration + 0.5) * 1000);
    }
  }, [isInView]);

  const lineVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5,
        duration: 0.7,
        type: "spring",
        stiffness: 90,
        damping: 12,
      },
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

  // Responsive direction and alignment
  const sectionDirectionClass = `
    ${isRTL ? "lg:flex-row-reverse" : "lg:flex-row"} 
    flex-col items-center justify-center
  `;

  const textAlignmentClass = `
    ${isRTL ? "text-right lg:items-end lg:text-left" : "text-left lg:items-start lg:text-left"}
    flex flex-col items-center justify-center
  `;

  return (
    <div
      ref={sectionRef}
      id="priceSection"
      className={`w-screen flex justify-center px-10 py-4 gap-20 md:gap-30 2xl:gap-50 max-w-[1700px] ${sectionDirectionClass}`}
    >
      <motion.div
        initial={{ y: 0 }}
        animate={moveUpControls}
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

        <motion.p
          className={`min-w-[320px] px-5 sm:px-0 max-w-[500px] text-xs 2xl:text-[16px] mt-8 overflow-hidden ${isRTL ? "direction-rtl" : ""}`}
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

      <div
        ref={puzzleRef}
        className="relative mt-10 lg:mt-0 mr-5 md-mr-0"
        style={{
          width: totalCols * pieceSize * overlapX,
          height: totalRows * pieceSize * overlapY,
        }}
      >
        {pieces.map((piece, i) => (
          <motion.div
            key={piece.id}
            className="absolute"
            initial={{
              x: piece.startX,
              y: piece.startY,
              opacity: 0,
              rotate: piece.rotateStart,
            }}
            animate={
              animatePuzzles
                ? { x: piece.targetX, y: piece.targetY, opacity: 1, rotate: 0 }
                : {
                  x: piece.startX,
                  y: piece.startY,
                  opacity: 0,
                  rotate: piece.rotateStart,
                }
            }
            transition={{
              delay: 0.15 * i,
              type: "spring",
              stiffness: 200,
              damping: 18,
              mass: 0.7,
            }}
          >
            <Image
              src={piece.src}
              width={pieceSize}
              height={pieceSize}
              alt={`Puzzle ${piece.id}`}
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
