import type { Metadata } from "next";
import { Orbitron, Exo_2 } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-orbitron",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-exo",
});

export const metadata: Metadata = {
  title: "Masum Mujawar — Data Network Universe",
  description: "Portfolio of Masum Mujawar, full stack developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
      <body className="font-exo overflow-x-hidden">{children}</body>
    </html>
  );
}
