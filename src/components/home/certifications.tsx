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
              <div className="relative mb-4 h-24 w-40">
                <Image
                  src={cert.logo}
                  alt={cert.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-center text-sm font-medium text-foreground">
                {cert.name}
              </h3>
              <p className="text-center text-xs text-muted-foreground">{cert.description}</p>
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
    logo: "https://placehold.co/200x100/FFFFFF/1a1a1a?text=TSE",
  },
  {
    name: "TÜRKAK",
    description: "AB-0001-T Akreditasyon",
    logo: "https://placehold.co/200x100/FFFFFF/1a1a1a?text=TURKAK",
  },
  {
    name: "ISO 9001",
    description: "Kalite Yönetim Sistemi",
    logo: "https://placehold.co/200x100/FFFFFF/1a1a1a?text=ISO+9001",
  },
  {
    name: "CE",
    description: "Avrupa Standartlarına Uygunluk",
    logo: "https://placehold.co/200x100/FFFFFF/1a1a1a?text=CE",
  },
];

export default Certifications; 