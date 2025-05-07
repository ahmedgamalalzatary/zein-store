import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "زين التنموية | المتجر الإلكتروني",
  description: "زين التنموية - الشريك الأمثل للتطوير والمستقبل"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        <ClientBody>
          {children}
        </ClientBody>
      </body>
    </html>
  );
}
