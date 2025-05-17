import { Card } from "@/components/ui/card";
import { Drill, TestTube2, Waves, LayoutGrid } from "lucide-react";
import Link from "next/link";

export default function HizmetlerPage() {
  const services = [
    {
      title: "Zemin Etüdü",
      description: "Profesyonel zemin araştırma ve analiz hizmetleri",
      icon: <LayoutGrid className="w-8 h-8" />,
      href: "/hizmetler/zemin-etudu"
    },
    {
      title: "Sondaj",
      description: "Modern ekipmanlarla derin zemin araştırmaları", 
      icon: <Drill className="w-8 h-8" />,
      href: "/hizmetler/sondaj"
    },
    {
      title: "Laboratuvar Analizleri",
      description: "Akredite laboratuvarlarımızda detaylı testler",
      icon: <TestTube2 className="w-8 h-8" />,
      href: "/hizmetler/laboratuvar"
    },
    {
      title: "Jeofizik Ölçümler",
      description: "İleri teknoloji jeofizik araştırma yöntemleri",
      icon: <Waves className="w-8 h-8" />,
      href: "/hizmetler/jeofizik"
    }
  ];

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Hizmetlerimiz</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Jeoloji mühendisliği alanında sunduğumuz uzmanlık hizmetleri
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <Link key={service.href} href={service.href}>
            <Card className="p-6 hover:bg-accent transition-colors h-full">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}