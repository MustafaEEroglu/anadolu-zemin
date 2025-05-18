import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-provider";
import { ErrorBoundary } from "@/components/error-boundary";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsAppFloat from "@/components/ui/whatsapp-float";
import BackToTop from "@/components/ui/back-to-top";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.anadoluzemin.com"),
  title: {
    template: "%s | Anadolu Zemin",
    default: "Anadolu Zemin | Profesyonel Zemin Etüdü ve Sondaj Hizmetleri",
  },
  description: "Anadolu Zemin olarak, profesyonel zemin etüdü, sondaj ve laboratuvar hizmetleri sunuyoruz. Modern ekipmanlar ve uzman kadromuzla hizmetinizdeyiz.",
  openGraph: {
    title: "Anadolu Zemin",
    description: "Profesyonel Zemin Etüdü ve Sondaj Hizmetleri",
    url: "https://www.anadoluzemin.com",
    siteName: "Anadolu Zemin",
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Anadolu Zemin",
    description: "Profesyonel Zemin Etüdü ve Sondaj Hizmetleri",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ErrorBoundary>
            <div className="relative min-h-screen flex flex-col">
              <Header />
              <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16">
                <div className="mx-auto w-full max-w-7xl">
                  {children}
                </div>
              </main>
              <Footer />
            </div>

            <WhatsAppFloat />
            <BackToTop />
          </ErrorBoundary>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
