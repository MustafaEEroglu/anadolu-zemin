"use client";

import Link from "next/link";
import { Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {/* Kurumsal */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Kurumsal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="footer-link">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="footer-link">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/calisma-galerimiz" className="footer-link">
                  Çalışma Galerimiz
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="footer-link">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Hizmetler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hizmetler/zemin-etudu" className="footer-link">
                  Zemin Etüdü
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/sondaj" className="footer-link">
                  Sondaj
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/laboratuvar" className="footer-link">
                  Laboratuvar Analizleri
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/jeofizik" className="footer-link">
                  Jeofizik Ölçümler
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">İletişim</h3>
            <ul className="space-y-2 sm:space-y-4">
              <li className="flex items-start gap-2 sm:space-x-3 footer-contact-item">
                <MapPin className="h-5 w-5 shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground">Şeyh Bayram, Cevher Sokağı No: 12-A, 44090 Yeşilyurt/Malatya</span>
              </li>
              <li className="flex items-center space-x-3 footer-contact-item">
                <Phone className="h-5 w-5 shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground">+90 531 215 16 17</span>
              </li>
              <li className="flex items-center space-x-3 footer-contact-item">
                <Mail className="h-5 w-5 shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground">info@anadoluzemin.com</span>
              </li>
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Sosyal Medya</h3>
            <div className="flex gap-3 sm:space-x-4">
              <a
                href="https://www.instagram.com/anadoluzeminlab/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Instagram className="h-6 w-6 footer-social-icon" />
              </a>
              <a
                href="https://tr.linkedin.com/in/burak-c%C3%BCcemen-0a471a11a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-6 w-6 footer-social-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 border-t border-border pt-6 sm:pt-8 text-center footer-copyright">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Anadolu Zemin. Tüm hakları saklıdır. Mustafa Eroğlu tarafından yapıldı.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;