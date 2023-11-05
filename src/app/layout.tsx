import "./globals.css";
import { Urbanist } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import clsx from "clsx";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata = {
  title: "エンジニアコミュニティ あまてく",
  description: "エンジニアコミュニティ あまてく",
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
