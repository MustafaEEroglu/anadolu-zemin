import Link from "next/link";
import { Mountain, Ruler, TestTube, Radio } from "lucide-react";

const services = [
  {
    title: "Zemin Etüdü",
    description: "Yapı güvenliği için detaylı zemin araştırması ve analizi hizmetleri",
    icon: Mountain,
    href: "/hizmetler/zemin-etüdü",
  },
  {
    title: "Sondaj",
    description: "Modern ekipmanlarla her türlü zeminde profesyonel sondaj hizmetleri",
    icon: Ruler,
    href: "/hizmetler/sondaj",
  },
  {
    title: "Laboratuvar Analizleri",
    description: "Akredite laboratuvarımızda kapsamlı zemin ve malzeme testleri",
    icon: TestTube,
    href: "/hizmetler/laboratuvar",
  },
  {
    title: "Jeofizik Ölçümler",
    description: "İleri teknoloji ile hassas jeofizik araştırma ve ölçüm hizmetleri",
    icon: Radio,
    href: "/hizmetler/jeofizik",
  },
];

export default function Services() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="section-title text-center">Profesyonel Hizmetlerimiz</h2>
        <p className="section-description">
          Modern ekipmanlarımız ve uzman kadromuzla kapsamlı zemin etüdü ve analiz hizmetleri sunuyoruz.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="service-card group">
              <div className="relative z-10">
                <service.icon className="service-card-icon" strokeWidth={1.5} />
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">{service.description}</p>
                <span className="mt-6 inline-flex items-center text-sm font-medium text-primary opacity-80 transition-opacity group-hover:opacity-100">
                  Detaylı Bilgi
                  <svg
                    className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 