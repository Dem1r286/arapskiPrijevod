"use client";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import "../../../i18n";

export default function DodatneOvjereButton() {
    const { t, ready, i18n } = useTranslation();
    const isArabic = i18n.language === "ar";

    if (!ready) return null;

    const router = useRouter();

    const handleClick = () => {
        router.push("/dodatneOvjere");
    };

    // Conditional classes and styles for RTL layout
    const rtlFlexClass = isArabic ? "flex-row-reverse" : "flex-row";
    const rtlTextClass = isArabic ? "text-right" : "text-left";
    
    // Adjust absolute positioning of the orange block
    const orangeBlockPositionClass = isArabic 
        ? "absolute -bottom-[30px] left-[-70px] w-[250px] h-[100px]" 
        : "absolute -bottom-[30px] right-[-70px] w-[250px] h-[100px]";

    // Conditional style for mirroring the arrow image
    const arrowMirrorStyle = { transform: isArabic ? 'scaleX(-1)' : 'scaleX(1)' };

    return (
        <div className="flex items-center justify-center flex-col w-full my-70">
            <div
                onClick={handleClick}
                className="relative inline-block group cursor-pointer"
            >
                {/* Orange block behind */}
                <div 
                    className={`${orangeBlockPositionClass} bg-[var(--secondary)] bg-transform transition-transform duration-300 ease-out group-hover:rotate-[-365deg]`}
                ></div>

                {/* Outer container for hover effect */}
                <div className="relative border-[#202020] bg-transform transition-transform duration-200 hover:scale-105">
                    <div className="absolute -inset-[10px] bg-white rounded-[31px] border-[5px]"></div>

                    {/* Main black card */}
                    <div className={`relative flex justify-between items-center bg-[#202020] text-white px-10 py-6 gap-20 rounded-[21px] border-[2px] border-white ${rtlFlexClass}`}>
                        
                        <p 
                            className={`text-3xl font-medium bg-transform transition-transform duration-200 hover:scale-105 ${rtlTextClass}`}
                        >
                            {t("dodatneOvjereButton.text-1")} <br /> {t("dodatneOvjereButton.text-2")} 
                        </p>
                        
                        <img
                            src="/right-up-arrow.png"
                            alt="Arrow"
                            className="w-28 h-auto object-contain bg-transform transition-transform duration-200 hover:scale-110"
                            style={arrowMirrorStyle} // Apply mirroring style here
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}