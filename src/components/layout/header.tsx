"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
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
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                href="/"
                className="text-sm font-medium text-foreground hover:text-primary"
              >
                Anasayfa
              </Link>

              <div className="relative group"
                onMouseEnter={() => setMobileMenuOpen(true)}
                onMouseLeave={() => setTimeout(() => setMobileMenuOpen(false), 300)}>
                <button
                type="button"
                className="text-sm font-medium text-foreground hover:text-primary flex items-center"
              >
                  Hizmetler
                  <svg className={`ml-2 h-4 w-4 transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`absolute z-10 left-0 mt-3 w-56 origin-top-left rounded-md bg-popover shadow-lg ring-1 ring-border focus:outline-none ${mobileMenuOpen ? 'block' : 'hidden'} group-hover:block`}>
                  <div className="py-1">
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent"
                      >
                        <div className="font-medium text-foreground">{service.title}</div>
                        <div className="text-xs text-muted-foreground mt-1">{service.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/raporlar"
                className="text-sm font-medium text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
              >
                Raporlar
              </Link>

              <Link
                href="/hakkimizda"
                className="text-sm font-medium text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
              >
                Hakkımızda
              </Link>

              <Link
                href="/iletisim"
                className="text-sm font-medium text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
              >
                İletişim
              </Link>

              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 bg-white dark:bg-gray-800">
          <Link
            href="/"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            Anasayfa
          </Link>

          <div className="space-y-1">
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              Hizmetler
              <svg className={`h-5 w-5 transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`pl-4 space-y-2 transition-all duration-200 ease-in-out ${mobileMenuOpen ? 'block opacity-100' : 'hidden opacity-0'}`}>
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="block px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                >
                  <div className="font-medium">{service.title}</div>
                  <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">{service.description}</div>
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/raporlar"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            Raporlar
          </Link>

          <Link
            href="/hakkimizda"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            Hakkımızda
          </Link>

          <Link
            href="/iletisim"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            İletişim
          </Link>

          <div className="px-3 py-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

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

export default Header; 