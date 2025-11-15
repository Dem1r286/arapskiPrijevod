export const metadata = {
  title: "Usluge – Stalni sudski tumač za arapski jezik",
  description: "Pregled svih usluga prevođenja i tumačenja na arapski jezik.",
  alternates: {
    canonical: "https://www.arapskiprijevod.ba/usluge",
  },
  openGraph: {
    title: "Usluge – Stalni sudski tumač za arapski jezik",
    description: "Pregled svih usluga prevođenja i tumačenja na arapski jezik.",
    url: "https://www.arapskiprijevod.ba/usluge",
    siteName: "Stalni sudski tumač za arapski jezik",
    type: "website",
  },
};

import UslugePageClient from "./UslugePageClient";

export default function Page() {
  return <UslugePageClient />;
}
