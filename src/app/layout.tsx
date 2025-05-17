import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/context/theme-provider";
import { FaWhatsapp } from "react-icons/fa";

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
            <main id="main-content" className="min-h-[calc(100vh-9rem)] py-4 sm:py-6 md:py-8">
              <div className="container">
                {children}
              </div>
            </main>
            <Footer />
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/905312151617"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 left-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 dark:bg-[#128C7E] dark:focus:ring-[#128C7E]"
            aria-label="WhatsApp ile bize ulaşın"
          >
            <FaWhatsapp className="h-8 w-8" />
          </a>
        </ThemeProvider>
      </body>
    </html>
  );
}
