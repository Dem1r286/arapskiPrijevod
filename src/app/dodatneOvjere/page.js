export const metadata = {
  title: "Dodatne ovjere – Uputstvo za legalizaciju dokumenata",
  description:
    "Detaljno uputstvo za dodatne ovjere i legalizaciju dokumenata prema državama i institucijama.",
  alternates: {
    canonical: "/dodatne-ovjere",
  },
};

import DodatneOvjereClient from "./DodatneOvjereClient";

export default function Page() {
  return <DodatneOvjereClient />;
}
