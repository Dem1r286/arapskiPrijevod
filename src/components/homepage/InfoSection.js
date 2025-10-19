"use client";

import { useRouter } from "next/navigation";

export default function InfoSection() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dodatneOvjere");
  };

  return (
    <div className="flex items-center justify-center flex-col w-full mt-70">
      <div className="w-screen flex justify-between items-center max-w-[2000px] overflow-hidden">
        <div className="flex justify-start items-center w-1/2 gap-30">
          <img
            src="/circle.png"
            alt="Left Divider"
            className="w-[40%] max-w-[500px] h-auto object-contain"
          />

          <div className="p-10 flex justify-between items-center bg-white border-3 border-[#202020] rounded-[50px] ml-10">
            <p className="text-2xl font-semibold">
              Svaki prijevod se <br /> ovjerava pečatom <br /> sudskog tumača, a <br /> rok zavisi od obima i <br /> složenosti teksta.
            </p>
          </div>
        </div>

        <div className="flex justify-center flex-col items-center w-1/2">
          <img
            src="/page-divider-right.png"
            alt="Right Divider"
            className="w-full h-auto object-contain mb-40"
          />
          <div className="p-10 flex justify-between items-center bg-white border-3 border-[#202020] rounded-[50px]">
            <p className="text-2xl font-semibold">
              Dokumente možete <br /> dostaviti lično ili <br /> poslati skenirane. <br /> Prilikom preuzimanja <br /> ovjerenog prijevoda, <br /> potrebno je predočiti <br /> original ili ovjerenu <br /> kopiju dokumenta.
            </p>
          </div>
        </div>
      </div>

      <div className="w-screen flex justify-between items-end max-w-[2000px]">
        {/* Left content section */}
        <div className="flex flex-col justify-between items-start w-2/3 gap-30">
          <div className="flex flex-col justify-center items-center gap-30">
            <div className="p-10 flex justify-between items-center bg-white border-3 border-[#202020] rounded-[50px]">
              <p className="text-2xl font-semibold">
                Cijena prijevoda <br /> prema dogovoru <br /> u zavisnosti od <br /> složenosti teksta i <br /> roka isporuke.
              </p>
            </div>

            {/* Button card */}
            <div
              onClick={handleClick}
              className="relative inline-block group ml-100 cursor-pointer"
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

          {/* Divider image */}
          <img
            src="/page-divider-left.png"
            alt="Right Divider"
            className="w-5/6 h-auto object-contain mb-40"
          />
        </div>

        {/* Right side image */}
        <img
          src="/circle.png"
          alt="Left Divider"
          className="w-[20%] max-w-[300px] h-auto object-contain rotate-180"
        />
      </div>
    </div>
  );
}
