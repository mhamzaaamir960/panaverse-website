import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar/NavBar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Panaverse DAO Website",
  description: "Panaverse is an Initiative of Dr.Zia Khan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
