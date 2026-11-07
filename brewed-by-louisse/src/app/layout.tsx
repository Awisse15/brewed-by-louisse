import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import Providers from "@/components/providers";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" });

export const metadata: Metadata = {
  title: "Brewed by Louisse – Concept café landing page",
  description: "A portfolio concept project: a café landing page.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={bricolage.variable}>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}