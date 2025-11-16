"use client";

import Loader from "@/components/common/Loader";

export default function DodatneOvjereClient() {
  return (
    <div className="flex flex-col items-start justify-center w-screen relative mt-40 mb-30 md:mt-50 md:mb-40 px-8 sm:px-20 md:px-50">

      <Loader />

      <div className="flex justify-center items-center flex-col mb-20 self-center text-center">
        <h1 className="text-3xl 2xl:text-5xl font-bold mb-4">
          Uputstvo za dodatne ovjere/legalizaciju dokumenata
        </h1>
        <h2 className="text-black text-sm md:text-lg max-w-[1000px]">
          Ovisno o državi u koju se dokumenti isporučuju, potrebno ih je dodatno
          ovjeriti ili legalizirati (tzv. nadovjera) prema propisanom
          redoslijedu.
        </h2>
      </div>

      <div className="text-sm md:text-[17px] text-black leading-relaxed space-y-6 max-w-[1200px] mx-auto">
        <p>
          <strong>Općinski/osnovni sud</strong> na području općine/opštine u
          kojoj je dokument izdat. Ako su, na primjer, diploma, rodni list,
          uvjerenje o državljanstvu i slični dokumenti izdati u Sarajevu,
          ovjeravaju se isključivo na Općinskom sudu u Sarajevu, iz Banjaluke u
          Banjaluci itd. Takse za ovjeru se razlikuju od suda do suda.
        </p>

        <p>
          S prijevodom dokumenta može biti uvezana kopija bez ovjere, s ovjerom
          ili pak original dokumenta, ali je u svakom slučaju potrebno dati na
          uvid i original službeniku suda. Također, ukoliko dokument nije izdat
          od državne institucije, ili je pak izdat ali sud nema deponovan
          pečat, moguće je da će službenik suda zahtijevati dodatnu ovjeru
          dokumenta kod notara.
        </p>

        <p>
          <strong>a)</strong> Za države koje su potpisnice Konvencije o
          Apostille-u, dokument se ovjerava ovom vrstom ovjere, te je nakon
          toga spreman za isporuku u dotičnu državu.
        </p>
        <p className="text-black font-semibold">
          (Važna napomena: Ovjerava se isključivo prijevod sudskog tumača, a ne
          originalni dokument ili kopija.)
        </p>

        <p>
          <strong>b)</strong> Za države koje nisu potpisnice Konvencije o
          Apostille-u, nadležni sud može ovjeriti prijevod sudskog tumača, ili
          ipak staviti pečat Apostille-a, koji su jednako važeći na daljnju
          ovjeru (spomenutu u nastavku).
        </p>

        <h3 className="text-xl md:text-2xl font-semibold mt-10 mb-4">
          Ministarstvo pravde BiH u Sarajevu
        </h3>
        <p>
          <strong>Uputstvo za uplatu:</strong>
        </p>
        <p>MINISTARSTVO FINANSIJA I TREZORA BiH</p>
        <p>Izabrati jedan od računa:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Depozitni račun, broj računa{" "}
            <strong>3380002210018390</strong> – Unicredit banka d.d. Mostar
          </li>
          <li>
            Depozitni račun, broj računa{" "}
            <strong>5517902220404858</strong> – Unicredit banka a.d. Banja Luka
          </li>
          <li>
            Depozitni račun, broj računa{" "}
            <strong>5556000060067744</strong> – Nova banka a.d. Banja Luka
          </li>
          <li>
            Depozitni račun, broj računa{" "}
            <strong>1341021020000276</strong> – Asa banka Naša i snažna d.d.
            Sarajevo
          </li>
        </ul>
        <p>
          <strong>SVRHA DOZNAKE:</strong> Nadovjera dokumenata
          <br />
          <strong>VRSTA PRIHODA:</strong> 722105
          <br />
          <strong>BUDŽETSKA ORGANIZACIJA:</strong> 2601999
          <br />
          <strong>POZIV NA BROJ:</strong> 0
          <br />
          <strong>BROJ OPĆINE:</strong> 077
        </p>
        <p>
          Ovjera prvog dokumenta iznosi <strong>10,00 KM</strong>, a svakog
          sljedećeg <strong>2 KM</strong>.
        </p>

        <h4 className="text-xl md:text-2xl font-semibold mt-10 mb-4">
          Ministarstvo vanjskih poslova BiH u Sarajevu
        </h4>
        <p>
          <strong>Uputstvo za uplatu:</strong>
        </p>
        <p>MINISTARSTVO FINANSIJA I TREZORA BiH</p>
        <p>Izabrati jedan od računa:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Depozitni račun, broj računa{" "}
            <strong>3380002210018390</strong> – Unicredit banka d.d. Mostar
          </li>
          <li>
            Depozitni račun, broj računa{" "}
            <strong>5517902220404858</strong> – Unicredit banka a.d. Banja Luka
          </li>
          <li>
            Depozitni račun, broj računa{" "}
            <strong>5556000060067744</strong> – Nova banka a.d. Banja Luka
          </li>
          <li>
            Depozitni račun, broj računa{" "}
            <strong>1341021020000276</strong> – Asa banka Naša i snažna d.d.
            Sarajevo
          </li>
        </ul>
        <p>
          <strong>SVRHA DOZNAKE:</strong> Ovjera potpisa i pečata
          <br />
          <strong>VRSTA PRIHODA:</strong> 722105
          <br />
          <strong>BUDŽETSKA ORGANIZACIJA:</strong> 2101999
          <br />
          <strong>POZIV NA BROJ:</strong> 5
          <br />
          <strong>BROJ OPĆINE:</strong> (prema prebivalištu tražioca ovjere)
        </p>
        <p>
          Ovjera svakog dokumenta iznosi <strong>10,00 KM</strong>.
        </p>

        <h5 className="text-xl md:text-2xl font-semibold mt-10 mb-4 text-black">
          Ambasada države u koju se isporučuje dokument
        </h5>
        <p>
          Ukoliko dotična država nema ambasadu u BiH, potrebno je raspitati se o
          nadležnoj ambasadi u susjednim državama (Beograd, Zagreb, Podgorica,
          Tirana).
        </p>

        <p>
          Moguć je i sljedeći način nadovjere: nakon ovjere u Ministarstvu
          vanjskih poslova BiH dokument se isporuči u državu u kojoj će biti
          upotrijebljen, zatim se ovjeri u nadležnoj ambasadi BiH u toj državi,
          a potom u ministarstvu vanjskih poslova iste države, nakon čega je
          spreman za upotrebu.
        </p>
      </div>
    </div>
  );
}
