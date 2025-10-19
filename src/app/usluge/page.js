"use client";

export default function UslugePage() {
  const dokumenti = [
    "Izvodi iz matičnih knjiga (rođenih, vjenčanih, umrlih)",
    "Uvjerenja o državljanstvu",
    "Uvjerenja o nekažnjavanju",
    "Uvjerenja o nevođenju krivičnog postupka",
    "Sudska rješenja i presude",
    "Ovlaštenja i punomoći",
    "Ugovori",
    "Izjave i saglasnosti",
    "Potvrde i certifikati",
    "Svjedočanstva završenih razreda srednje škole",
    "Diplome i dodaci diplomi",
    "Uvjerenja o položenim ispitima",
    "Nastavni planovi i programi fakulteta",
    "Potvrde o redovnom školovanju (osnovne i srednje škole, fakulteti)",
    "Potvrde o stanju računa u banci",
    "Potvrde o stalnom zaposlenju",
    "Vozačke dozvole",
    "Saobraćajne dozvole",
    "Ljekarski nalazi",
    "Registracije privrednih društava",
    "Izvodi iz sudskih registara",
    "Bilansi - završni račun, bilans uspjeha",
    "Katalozi i brošure",
    "I drugi dokumenti koja se podnose nadležnim organima u inostranstvu ili BiH",
  ];

  const oblasti = [
    "Vanjska trgovina",
    "Ekonomija",
    "Pravo",
    "Bankarstvo i finansije",
    "Marketing",
    "Društvene nauke",
    "Medicina",
    "Tehnička dokumentacija",
  ];

  return (
    <div className="flex justify-center items-start mt-40 px-50 flex-col gap-20">
      
      {/* Centered heading section */}
      <div className="w-full flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold mb-4">Usluge prijevoda</h1>
        <p className="text-black text-lg">
          Prijevod svih vrsta dokumenata i tekstova sa i na arapski jezik
        </p>
      </div>

      {/* List content */}
      <div className="text-[16px] text-gray-800 leading-relaxed mt-10">
        <ul className="list-disc">
          {dokumenti.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <p className="mb-6 text-xl font-medium mt-10">
          Također, vrše se prijevodi iz raznih životnih oblasti, kao što su:
        </p>

        <ul className="list-disc">
          {oblasti.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Bottom notice */}
      <div className="flex justify-center items-center text-lg self-center font-semibold bg-[var(--secondary)] px-5 py-2 rounded-2xl border-3 border-black">
        Pri preuzimanju ovjerenih prijevoda, dostaviti na uvid original ili ovjerenu kopiju dokumenta.
      </div>
    </div>
  );
}
