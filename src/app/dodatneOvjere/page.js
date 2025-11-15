export const metadata = {
  title: "Dodatne ovjere – Uputstvo za legalizaciju dokumenata",
  description:
    "Detaljno uputstvo za dodatne ovjere i legalizaciju dokumenata prema državama i institucijama.",
  alternates: {
    canonical: "https://www.arapskiprijevod.ba/dodatneOvjere",
  },
  openGraph: {
    title: "Dodatne ovjere – Uputstvo za legalizaciju dokumenata",
    description:
      "Detaljno uputstvo za dodatne ovjere i legalizaciju dokumenata prema državama i institucijama.",
    url: "https://www.arapskiprijevod.ba/dodatneOvjere",
    siteName: "Stalni sudski tumač za arapski jezik",
    type: "website",
  },
};


import DodatneOvjereClient from "./DodatneOvjereClient";

export default function Page() {
  return <DodatneOvjereClient />;
}
