"use client";
import { useRouter } from "next/navigation";

export default function ImageGallery() {
      const router = useRouter();
    
      const handleClick = () => {
        router.push("/dodatneOvjere");
      };
    return (
        <div className="flex items-center justify-center items-center flex-col w-full my-70">
            <div
                onClick={handleClick}
                className="relative inline-block group cursor-pointer"
            >
                {/* Orange block behind */}
                <div className="absolute -bottom-[30px] right-[-70px] w-[250px] h-[100px] bg-[var(--secondary)] bg-transform transition-transform duration-300 ease-out group-hover:rotate-[-365deg]"></div>

                {/* Outer container for hover effect */}
                <div className="relative border-[#202020] bg-transform transition-transform duration-200 hover:scale-105">
                    <div className="absolute -inset-[10px] bg-white rounded-[31px] border-[5px]"></div>

                    {/* Main black card */}
                    <div className="relative flex justify-between items-center bg-[#202020] text-white px-10 py-6 gap-20 rounded-[21px] border-[2px] border-white">
                        <p className="text-3xl font-medium bg-transform transition-transform duration-200 hover:scale-105">
                            Uputstvo za dodatne ovjere <br /> možete pronaći ovdje.
                        </p>
                        <img
                            src="/right-up-arrow.png"
                            alt="Arrow"
                            className="w-28 h-auto object-contain bg-transform transition-transform duration-200 hover:scale-110"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}