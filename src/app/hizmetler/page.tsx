import { Drill, TestTube2, Waves, LayoutGrid, ArrowRight } from "lucide-react";
import Link from "next/link";

const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`rounded-lg border bg-card shadow-sm p-6 ${className}`}>
    {children}
  </div>
);

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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {services.map((service) => (
          <Card 
            key={service.href}
            className="hover:shadow-lg transition-all hover:border-blue-500/30 h-full flex flex-col"
          >
            <div className="flex flex-col items-center text-center flex-grow">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mb-4 text-blue-600 dark:text-blue-400">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
            </div>
            <Link 
              href={service.href}
              className="mt-auto flex items-center justify-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              Detaylı Bilgi
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}