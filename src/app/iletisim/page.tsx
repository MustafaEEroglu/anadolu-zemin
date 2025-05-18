import { Mail, Phone, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import ContactForm from "@/components/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Anadolu Zemin ile iletişime geçin. Zemin etüdü, sondaj ve laboratuvar hizmetleri için bize ulaşın.",
  openGraph: {
    title: "İletişim | Anadolu Zemin",
    description: "Anadolu Zemin ile iletişime geçin",
  }
};

export default function IletisimPage() {
  const contactMethods = [
    {
      title: "Email",
      description: "info@anadoluzemin.com",
      icon: <Mail className="w-6 h-6" />
    },
    {
      title: "Telefon",
      description: "+90 555 123 45 67",
      icon: <Phone className="w-6 h-6" />
    },
    {
      title: "Adres",
      description: "Ankara, Çankaya",
      icon: <MapPin className="w-6 h-6" />
    }
  ];

  return (
    <div className="container py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">İletişim</h1>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
          Bize ulaşın, uzman ekibimiz size yardımcı olmaktan mutluluk duyacaktır
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.561023071332!2d32.85431531571655!3d39.91975507942896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f8a5c4f1f4f%3A0x4d5b3e5e5e5e5e5e!2sAnkara%2C%20Turkey!5e0!3m2!1sen!2str!4v1620000000000!5m2!1sen!2str"
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
  );
}