import "../styles/index.scss";
import { Inter, Syne } from "next/font/google";
import localFont from "next/font/local";

export const metadata = {
  title: "Detty December",
  description: "Discover and book unforgettable festive events",
};

const durkWide = localFont({
  src: "../public/assets/DrukWideBold.ttf",
  weight: "200 800", // For variable fonts, specify the weight range
  subsets: ["latin"],
  display: "swap",
  variable: "--font-durkwide",
});

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
        
       ${syne.variable} ${inter.variable} ${durkWide.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
