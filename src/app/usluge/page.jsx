export const metadata = {
  title: "Usluge – Stalni sudski tumač za arapski jezik",
  description: "Prijevod i tumačenje svih vrsta dokumenata, tekstova i materijala sa i na arapski jezik u BiH.",
  alternates: {
    canonical: "https://www.arapskiprijevod.ba/usluge",
  },
  openGraph: {
    title: "Usluge – Stalni sudski tumač za arapski jezik",
    description: "Prijevod i tumačenje svih vrsta dokumenata, tekstova i materijala sa i na arapski jezik u BiH.",
    url: "https://www.arapskiprijevod.ba/usluge",
    siteName: "Stalni sudski tumač za arapski jezik u BiH",
    type: "website",
  },
};

import UslugePageClient from "./UslugePageClient";

export default function Page() {
  return <UslugePageClient />;
}
