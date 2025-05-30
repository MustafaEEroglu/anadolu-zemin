import { Drill, HardHat, Layers } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Sondaj Hizmetleri",
  description: "Modern ekipmanlarla her türlü zeminde profesyonel sondaj hizmetleri. Derin sondaj, karot numune alma ve zemin araştırmaları.",
  openGraph: {
    title: "Sondaj Hizmetleri | Anadolu Zemin",
    description: "Modern ekipmanlarla profesyonel sondaj hizmetleri",
  }
};

export default function SondajPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Sondaj Hizmetleri",
    "provider": {
      "@type": "Organization",
      "name": "Anadolu Zemin",
      "url": "https://www.anadoluzemin.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Türkiye"
    },
    "description": "Modern ekipmanlarla her türlü zeminde profesyonel sondaj hizmetleri. Derin sondaj, karot numune alma ve zemin araştırmaları.",
    "serviceType": ["Rotary Sondaj", "Kule Sondaj", "Karot Sondajı"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Sondaj Hizmetleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Rotary Sondaj",
            "description": "Derin zemin katmanlarının incelenmesi için"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kule Sondaj",
            "description": "Yüksek kapasiteli zemin araştırmaları"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Karot Alma",
            "description": "Zemin numunelerinin bozulmadan alınması"
          }
        }
      ]
    }
  };

  const techniques = [
    {
      title: "Rotary Sondaj",
      description: "Derin zemin katmanlarının incelenmesi için",
      icon: <Drill className="w-6 h-6" />
    },
    {
      title: "Kule Sondaj",
      description: "Yüksek kapasiteli zemin araştırmaları",
      icon: <HardHat className="w-6 h-6" />
    },
    {
      title: "Karot Alma",
      description: "Zemin numunelerinin bozulmadan alınması",
      icon: <Layers className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Script
        id="sondaj-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Sondaj Hizmetleri</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Modern ekipmanlarla derin zemin araştırmaları ve analizleri
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {techniques.map((tech, i) => (
            <Card key={i} className="p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4 text-primary group-hover:bg-primary/20 transition-colors">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                <p className="text-muted-foreground px-4">{tech.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  title: "Saha Hazırlığı",
                  description: "Saha hazırlığı ve planlama çalışmaları",
                  icon: "📝"
                },
                {
                  title: "Ekipman Kurulumu",
                  description: "Ekipman kurulumu ve sondaj işlemleri",
                  icon: "🛠️"
                },
                {
                  title: "Numune Alma",
                  description: "Numune alma ve koruma işlemleri",
                  icon: "🧪"
                },
                {
                  title: "Raporlama",
                  description: "Raporlama ve analiz süreçleri",
                  icon: "📊"
                }
              ].map((step, i) => (
                <Card
                  key={i}
                  className="w-full p-4 sm:p-6 rounded-xl dark:from-gray-900 dark:to-gray-800 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] border border-border/50 hover:border-primary/30 group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{step.title}</h3>
                    <div className="w-full">
                      <button className="text-sm text-primary font-medium mb-2 hover:text-primary/80 transition-colors flex items-center justify-center gap-1 mx-auto">
                        Detayları Göster
                        <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className="max-h-0 overflow-hidden group-focus-within:max-h-[100px] transition-all duration-500 ease-in-out">
                        <p className="text-muted-foreground text-sm px-2">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}