import Link from "next/link";
import { services } from "@/config/services";

export default function Services() {  return (
    <section className="py-16 border-t border-border/50">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            Profesyonel Hizmetlerimiz
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Modern ekipmanlarımız ve uzman kadromuzla kapsamlı zemin etüdü ve
            analiz hizmetleri sunuyoruz.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative rounded-lg border border-border bg-card p-4 sm:p-6 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4">
                <service.icon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="mb-2 text-lg sm:text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
              <div className="mt-4 flex items-center text-primary">
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
} 