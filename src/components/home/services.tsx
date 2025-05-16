import Link from "next/link";
import { Drill, TestTube2, Mountain, Ruler } from "lucide-react";

const Services = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Profesyonel Hizmetlerimiz
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Modern ekipmanlarımız ve uzman kadromuzla kapsamlı zemin etüdü ve
            analiz hizmetleri sunuyoruz.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative rounded-lg bg-white p-6 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4">
                <service.icon className="h-12 w-12 text-yellow-500" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
              <div className="mt-4 flex items-center text-yellow-500">
                <span className="text-sm font-medium">Detaylı Bilgi</span>
                <svg
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    title: "Zemin Etüdü",
    description:
      "Yapı güvenliği için detaylı zemin araştırması ve analizi hizmetleri",
    icon: Mountain,
    href: "/hizmetler/zemin-etüdü",
  },
  {
    title: "Sondaj",
    description:
      "Modern ekipmanlarla her türlü zeminde profesyonel sondaj hizmetleri",
    icon: Drill,
    href: "/hizmetler/sondaj",
  },
  {
    title: "Laboratuvar Analizleri",
    description:
      "Akredite laboratuvarımızda kapsamlı zemin ve malzeme testleri",
    icon: TestTube2,
    href: "/hizmetler/laboratuvar",
  },
  {
    title: "Jeofizik Ölçümler",
    description:
      "İleri teknoloji ile hassas jeofizik araştırma ve ölçüm hizmetleri",
    icon: Ruler,
    href: "/hizmetler/jeofizik",
  },
];

export default Services; 