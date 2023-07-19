import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nickolas Rodrigues",
  description: "My web resume",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="pt-BR">
      <body className={`${inter.className} transition-colors duration-500 bg-zinc-100 dark:bg-zinc-900`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
