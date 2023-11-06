import "./globals.css";
import { Urbanist } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import clsx from "clsx";
import Head from "next/head";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata = {
  title: "エンジニアコミュニティ あまてく",
  description:
    "エンジニアコミュニティ あまてくは、学生を中心とした技術力向上を目指すコミュニティです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" style={{ height: "100%" }}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:site_name" content={metadata.title} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:site" content="@amatech1006" />
        <meta name="twitter:creator" content="@amatech1006" />
        <meta name="twitter:image" content="/ogp.png" />
        <link rel="shortcut icon" href="/ogp.png" />
        <link rel="apple-touch-icon" href="/ogp.png" />
      </Head>
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
