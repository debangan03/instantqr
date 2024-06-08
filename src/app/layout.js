import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "InstantQR - Making QR Code Generation Effortless",
    template: "%s - InstantQR",
  },
  description:
    "Fast and Easy QR Code Generation: Simply enter your URL, and InstantQR will generate a QR code for you instantly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
