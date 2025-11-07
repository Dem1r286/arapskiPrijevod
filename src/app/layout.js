import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


const poppins = localFont({
  src: [
    {
      path: "../../fonts/Poppins-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../fonts/Poppins-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
  display: "swap",
});


export const metadata = {
  title: "Stalni sudski tumač za arapski jezik u BiH",
  description:
    "Pružamo usluge prijevoda sa i na arapski jezik, uključujući dokumente, knjige, članke i usmene/simultane prijevode. Saznajte više o našim uslugama.",
  icons: {
    icon: "/icons/favicon.webp",
  }
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans-serif antialiased overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

