import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bimtrazer Challenge",
  description: "Bimtrazer Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="bottom-center" />
        {children}
      </body>
    </html>
  );
}
