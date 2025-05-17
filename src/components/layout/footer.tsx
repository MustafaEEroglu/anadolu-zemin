"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Kurumsal */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Kurumsal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hakkimizda" className="footer-link">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="footer-link">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/raporlar" className="footer-link">
                  Raporlar
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
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 footer-contact-item">
                <MapPin className="h-5 w-5 shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground">Örnek Mahallesi, Örnek Sokak No:123 Ankara/Türkiye</span>
              </li>
              <li className="flex items-center space-x-3 footer-contact-item">
                <Phone className="h-5 w-5 shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground">+90 (312) 123 45 67</span>
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
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Facebook className="h-6 w-6 footer-social-icon" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Instagram className="h-6 w-6 footer-social-icon" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-6 w-6 footer-social-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center footer-copyright">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Anadolu Zemin. Tüm hakları saklıdır.
          </p>
          
          {/* Back to top button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="back-to-top no-print"
            aria-label="Sayfanın başına dön"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 