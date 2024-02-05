import "./globals.css";
import { Urbanist } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import clsx from "clsx";
import { Metadata } from "next";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "エンジニアコミュニティ あまてく",
  description:
    "エンジニアコミュニティ あまてくは、学生を中心とした技術力向上を目指すコミュニティです。",
  icons: {
    icon: "/favicons/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" style={{ height: "100%" }}>
      <body className={clsx("flex min-h-screen flex-col", urbanist.variable)}>
        <Header />
        <main className="flex flex-1 flex-col items-center justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
