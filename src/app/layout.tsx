import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar/NavBar";
import Footer2 from "@/components/Footer/Footer2";

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
        <Footer2 />
      </body>
    </html>
  );
}
