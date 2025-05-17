"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Certifications = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getLogoFilter = () => {
    if (!mounted) return '';
    return resolvedTheme === 'dark' 
      ? 'brightness(0) invert(1)'
      : '';
  };

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

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col items-center justify-center"
            >
              <div className="relative mb-4 h-24 w-full">
                <div className="relative h-full w-full flex items-center justify-center p-2">
                  <Image
                    src={cert.logo}
                    alt={cert.name}
                    width={160}
                    height={80}
                    className="object-contain hover:scale-105 transition-transform"
                    style={{ 
                      maxHeight: "80px",
                      filter: getLogoFilter()
                    }}
                  />
                </div>
              </div>
              <div className="px-4">
                <h3 className="text-center text-base font-medium text-foreground mb-2">
                  {cert.name}
                </h3>
                <p className="text-center text-sm text-muted-foreground leading-snug">
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
    logo: "/tse.svg"
  },
  {
    name: "ISO 9001",
    description: "Kalite Yönetim Sistemi",
    logo: "/iso9001.svg"
  },
  {
    name: "CE",
    description: "Avrupa Standartlarına Uygunluk",
    logo: "/ce.svg"
  }
];

export default Certifications;
