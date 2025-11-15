export const metadata = {
  title: "Usluge – Stalni sudski tumač za arapski jezik",
  description: "Pregled svih usluga prevođenja i tumačenja na arapski jezik.",
  alternates: {
    canonical: "/usluge",
  },
};

import UslugePageClient from "./UslugePageClient";

export default function Page() {
  return <UslugePageClient />;
}
