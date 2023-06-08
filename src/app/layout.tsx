import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

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
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-col flex-1 justify-center items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
