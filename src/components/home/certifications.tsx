import Image from "next/image";

const Certifications = () => {
  return (
    <section className="py-16 border-t border-border/50">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            Sertifikalı ve Akredite Hizmet
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Tüm hizmetlerimiz, ulusal ve uluslararası standartlara uygun olarak,
            akredite laboratuvarlarımızda gerçekleştirilmektedir.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col items-center justify-center"
            >
              <div className="relative mb-2 h-20 w-32 md:h-24 md:w-40">
                <div className="relative h-full w-full flex items-center">
                  <Image
                    src={cert.logo}
                    alt={cert.name}
                    width={160}
                    height={80}
                    className="object-contain hover:scale-105 transition-transform dark:invert dark:brightness-0 dark:filter mx-auto"
                  />
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-center text-sm font-medium text-foreground mb-1">
                  {cert.name}
                </h3>
                <p className="text-center text-xs text-muted-foreground leading-tight">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const certifications = [
  {
    name: "TSE",
    description: "TS EN ISO/IEC 17025 Akreditasyonu",
    logo: "/tse.png",
  },
  {
    name: "TÜRKAK",
    description: "AB-0001-T Akreditasyon",
    logo: "/turkak.png",
  },
  {
    name: "ISO 9001",
    description: "Kalite Yönetim Sistemi",
    logo: "/iso9001.png",
  },
  {
    name: "CE",
    description: "Avrupa Standartlarına Uygunluk",
    logo: "/ce.png",
  },
];

export default Certifications;
