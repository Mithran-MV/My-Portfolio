import "./globals.css";
import type { Metadata } from "next";
import { Chakra_Petch, Manrope } from "next/font/google";
import { NavBar } from "@/components/nav-bar";
import { ThemeProvider } from "@/components/theme-provider";
import { GlowCursor } from "@/components/glow-cursor";
import { Footer } from "@/components/footer";

const heading = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
  display: "swap"
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Mithran MV | Full Stack & Cloud Systems Architect",
  description:
    "Senior Full Stack Developer and Cloud Systems Architect in Chennai building AI, Web3, blockchain integrations, IoT, and enterprise systems."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} dark`}>
      <body className="bg-night-900 text-slate-100 light:bg-white light:text-slate-900">
        <ThemeProvider>
          <div className="noise" aria-hidden />
          <div className="grid-overlay" aria-hidden />
          <GlowCursor />
          <NavBar />
          <main className="max-w-6xl mx-auto px-4 md:px-6 lg:px-10 py-10">
            {children}
          </main>
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-10">
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
