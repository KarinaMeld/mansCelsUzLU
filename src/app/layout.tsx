import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

import "bootstrap/dist/css/bootstrap.css";
import "./scss/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mans cels uz LU",
  description: "Karinas gala darbs kursam DatZ1000-LV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
