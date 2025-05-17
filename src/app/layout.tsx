import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/context/theme-provider";

const manrope = Manrope({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-manrope'
});

export const metadata: Metadata = {
  title: "Anadolu Zemin | Profesyonel Zemin Etüdü ve Sondaj Hizmetleri",
  description: "Anadolu Zemin olarak, profesyonel zemin etüdü, sondaj ve laboratuvar hizmetleri sunuyoruz. Deneyimli ekibimiz ve modern ekipmanlarımızla yanınızdayız.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${manrope.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
