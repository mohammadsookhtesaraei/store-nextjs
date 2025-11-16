import type { Metadata } from "next";
import { yekan } from '@/utils/font';
import "./globals.css";
import Layout from "@/components/layout/Layout";
import ProductsProvider from "@/context/ProductsProvider";



export const metadata: Metadata = {
  title: "store",
  description: "a simple store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${yekan.variable}`}
      >
        <ProductsProvider>
        <Layout>
        {children}
        </Layout>
        </ProductsProvider>
      </body>
    </html>
  );
}
