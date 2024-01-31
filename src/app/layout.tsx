import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Image from "next/image";
import { heroGradentBgSrc } from "@/lib/constance";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Agency Website Template By Robin",
  description: "Agency Website Template By Robin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="bg-black-primary min-h-screen flex flex-col">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
