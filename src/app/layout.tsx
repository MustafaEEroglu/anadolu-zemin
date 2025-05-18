import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/context/theme-provider";
import WhatsAppFloat from "@/components/ui/whatsapp-float";
import BackToTop from "@/components/ui/back-to-top";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="tr" suppressHydrationWarning className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Skip to content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-background focus:px-4 focus:py-2 focus:text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            İçeriğe atla
          </a>

          <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
            <Header />
            <main id="main-content" className="min-h-[calc(100vh-9rem)] py-4 md:py-6 lg:py-8">
              <div className="container px-4 sm:px-6 lg:px-8 max-w-screen-xl">
                {children}
              </div>
            </main>
            <Footer />
          </div>

          {/* Floating Buttons */}
          <WhatsAppFloat />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
