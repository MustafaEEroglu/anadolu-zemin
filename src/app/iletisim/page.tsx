import { Mail, Phone, MapPin, Clock, Instagram, Linkedin } from "lucide-react";
import { Card } from "@/components/ui/card";
import ContactForm from "@/components/contact-form";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Anadolu Zemin ile iletişime geçin. Zemin etüdü, sondaj ve laboratuvar hizmetleri için bize ulaşın.",
  openGraph: {
    title: "İletişim | Anadolu Zemin",
    description: "Anadolu Zemin ile iletişime geçin",
  }
};

export default function IletisimPage() {
  const businessStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Anadolu Zemin",
    "image": "https://www.anadoluzemin.com/logo.png",
    "description": "Profesyonel zemin etüdü, sondaj ve laboratuvar hizmetleri",
    "@id": "https://www.anadoluzemin.com",
    "url": "https://www.anadoluzemin.com",
    "telephone": "+902165555555",
    "email": "info@anadoluzemin.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "İstanbul Teknik Üniversitesi Ayazağa Yerleşkesi",
      "addressLocality": "Sarıyer",
      "addressRegion": "İstanbul",
      "postalCode": "34469",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.1055,
      "longitude": 29.0230
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/anadoluzemin",
      "https://www.instagram.com/anadoluzemin",
      "https://www.linkedin.com/company/anadoluzemin"
    ]
  };

  const contactMethods = [
    {
      title: "Email",
      description: "info@anadoluzemin.com",
      icon: <Mail className="w-6 h-6" />
    },
    {
      title: "Telefon",
      description: (
        <div className="flex flex-col">
          <span>+90 531 215 16 17</span>
          <span className="text-sm text-muted-foreground">7/24 Ulaşabilirsiniz</span>
        </div>
      ),
      icon: <Phone className="w-6 h-6" />
    },
    {
      title: "Adres",
      description: "Şeyh Bayram, Cevher Sokağı No: 12-A, 44090 Yeşilyurt/Malatya",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      title: "Çalışma Saatleri",
      description: "7/24 Hizmetinizdeyiz",
      icon: <Clock className="w-6 h-6" />
    },
  ];

  const socialMedia = [
    {
      title: "Instagram",
      url: "https://www.instagram.com/anadoluzeminlab/",
      icon: <Instagram className="w-6 h-6" />
    },
    {
      title: "LinkedIn",
      url: "https://tr.linkedin.com/in/burak-c%C3%BCcemen-0a471a11a",
      icon: <Linkedin className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Script
        id="business-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessStructuredData) }}
      />
      <div className="container py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">İletişim</h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Bize ulaşın, uzman ekibimiz size yardımcı olmaktan mutluluk duyacaktır
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {socialMedia.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:no-underline"
            >
              <Card className="p-6 hover:bg-accent transition-colors">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-4 text-primary">
                    {social.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{social.title}</h3>
                </div>
              </Card>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, i) => (
            <Card key={i} className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4 text-primary">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-muted-foreground">{method.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <Card className="p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Bize Yazın</h2>
            <ContactForm />
          </Card>

          <div className="h-full">
            <Card className="h-full p-0 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.592442830548!2d38.288332499999996!3d38.335267699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40763129f6158299%3A0x5fc9152992d9bb60!2sAnadolu%20Zemin%20Laboratuvar%C4%B1!5e0!3m2!1str!2str!4v1748179162161!5m2!1str!2str"
                width="100%"
                height="100%"
                className="min-h-[300px] sm:min-h-[400px]"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}