export const metadata = {
  title: "Usluge – Stalni sudski tumač za arapski jezik",
  description: "Prijevod svih vrsta dokumenata i tekstova sa i na arapski jezik.",
  alternates: {
    canonical: "https://www.arapskiprijevod.ba/usluge",
  },
  openGraph: {
    title: "Usluge – Stalni sudski tumač za arapski jezik",
    description: "Prijevod svih vrsta dokumenata i tekstova sa i na arapski jezik",
    url: "https://www.arapskiprijevod.ba/usluge",
    siteName: "Stalni sudski tumač za arapski jezik u BiH",
    type: "website",
  },
};

import UslugePageClient from "./UslugePageClient";

export default function Page() {
  return <UslugePageClient />;
}
