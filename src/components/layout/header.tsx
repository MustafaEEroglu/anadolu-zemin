"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      title: "Zemin Etüdü",
      description: "Detaylı zemin araştırması ve analizi hizmetleri",
      href: "/hizmetler/zemin-etudu",
    },
    {
      title: "Sondaj",
      description: "Modern ekipmanlarla profesyonel sondaj hizmetleri",
      href: "/hizmetler/sondaj",
    },
    {
      title: "Laboratuvar Analizleri",
      description: "Kapsamlı zemin ve malzeme testleri",
      href: "/hizmetler/laboratuvar",
    },
    {
      title: "Jeofizik Ölçümler",
      description: "İleri teknoloji ile jeofizik araştırmalar",
      href: "/hizmetler/jeofizik",
    },
  ];
  
  return (
    <div className="fixed top-6 z-30 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="flex h-16 items-center justify-between rounded-full bg-white/90 backdrop-blur-md shadow-lg px-6 py-2 dark:bg-background">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.svg"
                alt="Anadolu Zemin"
                width={150}
                height={40}
                className="h-10 w-auto dark:[&>svg]:text-white dark:[&>svg]:fill-current"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center flex-1">
            <div className="flex items-center justify-center gap-10 mx-auto mr-[100px]">
              <Link
                href="/"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Anasayfa
              </Link>

              <div className="relative group"
                onMouseEnter={() => setMobileMenuOpen(true)}
                onMouseLeave={() => setTimeout(() => setMobileMenuOpen(false), 300)}>
                <button
                  type="button"
                  className="text-sm font-medium text-foreground hover:text-primary flex items-center transition-colors"
                >
                  Hizmetler
                  <svg className={`ml-2 h-4 w-4 transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`absolute z-10 left-0 mt-3 w-56 origin-top-left rounded-md bg-popover shadow-lg ring-1 ring-border focus:outline-none ${mobileMenuOpen ? 'block' : 'hidden'} group-hover:block dark:bg-gray-800/90`}>
                  <div className="py-1">
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                        <div className="font-medium text-foreground dark:text-white">{service.title}</div>
                        <div className="text-xs text-muted-foreground mt-1 dark:text-gray-400">{service.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/raporlar"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Raporlar
              </Link>

              <Link
                href="/hakkimizda"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Hakkımızda
              </Link>

              <Link
                href="/iletisim"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                İletişim
              </Link>
            </div>
            
            {/* Theme Toggle - Right Side */}
            <div className="ml-auto">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden fixed inset-0 z-40 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        <div className="fixed top-6 inset-x-4 rounded-2xl bg-white/90 backdrop-blur-md shadow-lg p-6 dark:bg-background max-w-screen-xl mx-auto">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="px-4 py-2 text-lg font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Anasayfa
            </Link>

            <div>
              <button
                className="w-full flex justify-between items-center px-4 py-2 text-lg font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                Hizmetler
                <svg className={`h-5 w-5 transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`pl-4 mt-2 space-y-2 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
                {services.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="block px-4 py-2 text-base text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/raporlar"
              className="px-4 py-2 text-lg font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Raporlar
            </Link>

            <Link
              href="/hakkimizda"
              className="px-4 py-2 text-lg font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hakkımızda
            </Link>

            <Link
              href="/iletisim"
              className="px-4 py-2 text-lg font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              İletişim
            </Link>
          </nav>

          <div className="mt-8 px-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;