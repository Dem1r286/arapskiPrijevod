"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import "../../../i18n";

export default function ContactForm() {
  const { t, i18n, ready } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [status, setStatus] = useState("idle");
  const [moveDistance, setMoveDistance] = useState(70);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState({});
  const [rateLimitError, setRateLimitError] = useState(false); // <-- new state

  if (!ready) return null;

  const validateName = (name) =>
    /^[A-Za-zÀ-ž]{2,}\s+[A-Za-zÀ-ž]{2,}$/.test(name.trim());
  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const validatePhone = (phone) =>
    /^[+\d\s()-]{7,}$/.test(phone.trim());

  const isFormValid = () =>
    validateName(formData.name) &&
    validatePhone(formData.phone) &&
    validateEmail(formData.email) &&
    formData.message.trim().length > 0;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });
  const handleBlur = (e) =>
    setTouched({ ...touched, [e.target.id]: true });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      setStatus("error");
      setTouched({ name: true, phone: true, email: true, message: true });
      return;
    }

    setStatus("sending");
    setRateLimitError(false); // reset rate limit error

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", message: "" });
        setTouched({});
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        if (res.status === 429) {
          // handle rate limit error
          setRateLimitError(true);
        }
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  useEffect(() => {
    const updateDistance = () => setMoveDistance(window.innerWidth < 640 ? 0 : 0);
    updateDistance();
    window.addEventListener("resize", updateDistance);
    return () => window.removeEventListener("resize", updateDistance);
  }, []);

  const renderStatusIcon = () => {
    switch (status) {
      case "sending":
        return (
          <div className="w-5 h-5 border-4 border-t-[var(--secondary)] border-gray-300 rounded-full animate-spin"></div>
        );
      case "success":
        return <img src="/icons/check.webp" className="w-5" />;
      case "error":
        return <img src="/icons/x.webp" className="w-4" />;
      default:
        return null;
    }
  };

  const renderErrorText = () => {
    if (rateLimitError) return "Previše pokušaja. Pokušajte nakon 1 minute."; // <-- show rate limit message

    if (status !== "error") return null;
    if (!validateName(formData.name)) return t("Errors.name");
    if (!validatePhone(formData.phone)) return t("Errors.phone");
    if (!validateEmail(formData.email)) return t("Errors.email");
    if (!formData.message.trim()) return t("Errors.message");

    return t("Errors.check");
  };

  const getInputClass = (id) => {
    const base =
      "w-full bg-[#313131] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 text-white placeholder-gray-300";
    let isError = false;
    if (touched[id]) {
      if (id === "name") isError = !validateName(formData.name);
      if (id === "phone") isError = !validatePhone(formData.phone);
      if (id === "email") isError = !validateEmail(formData.email);
      if (id === "message") isError = !formData.message.trim();
    }
    const border = isError ? "border-2 border-[#ff582f]" : "focus:ring-white";
    return `${base} ${border} ${isArabic ? "placeholder:text-right" : "placeholder:text-left"}`;
  };

  return (
    <div
      id="contactForm"
      className={`relative flex flex-col justify-center items-center lg:min-w-[700px] mb-[20vh] 2xl:mb-[-30vh] px-5 lg:mr-[-30vw] z-50 ${
        isArabic ? "rtl" : "ltr"
      }`}
    >
      {/* === Binder Clips === */}
      <div className="w-full flex justify-between items-center px-15 z-20 mb-[-15px] lg:mb-[-30px]">
        <img src="/other/binder-clip.webp" alt="Binder Clip" className="w-12 lg:w-17 xl:w-23 h-auto" />
        <img src="/other/binder-clip.webp" alt="Binder Clip" className="w-12 lg:w-17 xl:w-23 h-auto" />
      </div>

      {/* === Form Section === */}
      <div className="relative flex flex-col justify-center items-center w-full gap-10 pt-15 2xl:pt-30 min-w-[300px] max-w-[700px] rounded-xl bg-gradient-to-b from-[#222222] to-[#181818]">
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl md:text-3xl 2xl:text-5xl font-semibold text-white text-center">
            {t("Contact.heading")}
          </p>
          <p className="text-center text-white w-[85%] md:w-[90%] text-xs md:text-sm 2xl:text-[15px]">
            {t("Contact.subtext")}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          id="contactForm"
          className={`w-full sm:w-[80%] md:w-[70%] flex flex-col justify-center gap-6 2xl:gap-8 text-white px-10 md:px-5 text-[14px] md:text-[15px] lg:text-[16px] ${isArabic ? "text-right" : "text-left"}`}
        >
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            placeholder={t("Contact.placeholderName")}
            className={getInputClass("name")}
            autoComplete="name"
          />
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            placeholder={t("Contact.placeholderPhone")}
            className={getInputClass("phone")}
            autoComplete="tel"
          />
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            placeholder={t("Contact.placeholderEmail")}
            className={getInputClass("email")}
            autoComplete="email"
          />
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            placeholder={t("Contact.placeholderMessage")}
            rows="4"
            className={getInputClass("message") + " h-[150px] resize-none"}
            autoComplete="off"
          />
        </form>

        {/* === Button + Icon + Error === */}
        <div className="flex flex-col items-end w-full sm:w-[80%] md:w-[70%] px-10 md:px-5 mt-2 gap-5 gap-1 relative">
          <div className="flex items-center relative gap-2">
            <motion.button
              type="submit"
              onClick={handleSubmit}
              initial={{ x: 0 }}
              animate={{ x: status !== "idle" ? -25 : 0 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="flex justify-center items-center bg-[var(--secondary)] px-6 sm:px-8 py-2 rounded-[12px] border-2 border-white font-semibold text-xs md:text-sm xl:text-[16px] cursor-pointer relative z-10"
            >
              {t("Contact.button")}
            </motion.button>

            {status !== "idle" && (
              <motion.div
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: moveDistance - 20, opacity: 1 }}
                transition={{ type: "tween", duration: 0.4 }}
                className="absolute right-[-25px] flex justify-center items-center"
              >
                {renderStatusIcon()}
              </motion.div>
            )}
          </div>

          <AnimatePresence>
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
                dir={isArabic ? "rtl" : "ltr"}
                className="text-[#ff582f] text-xs md:text-sm font-medium mt-2 w-full text-center"
              >
                {renderErrorText()}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* === Socials Section === */}
        <div className="flex justify-center items-center flex-col w-full rounded-b-xl py-10 gap-5 border-t-1 border-[#262626]">
          <div className="text-center font-light text-[13px] md:text-[15px] lg:text-[16px] opacity-90 text-white">
            <p>{t("Contact.contact-1")}</p>
            <p>{t("Contact.contact-2")}</p>
          </div>

          <div className="flex justify-center gap-10">
            <a href="viber://chat?number=+38761353525" target="_blank" rel="noopener noreferrer">
              <img src="/icons/viber.webp" alt="Viber" className="w-12 md:w-14 transition-transform duration-200 hover:scale-110" />
            </a>
            <a href="https://wa.me/+38761353525" target="_blank" rel="noopener noreferrer">
              <img src="/icons/whatsapp.webp" alt="WhatsApp" className="w-12 md:w-14 transition-transform duration-200 hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
