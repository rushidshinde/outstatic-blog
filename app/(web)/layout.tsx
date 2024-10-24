import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import {absoluteUrl} from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Outstatic blogs",
  description: "Open source CRM",
  metadataBase: new URL(absoluteUrl('/')),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
