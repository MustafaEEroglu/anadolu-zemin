"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import { services } from "@/config/services";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mobileMenu = useMemo(() => {
    return (
      <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm">
          <div className="fixed right-4 top-4">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg p-2 text-foreground hover:bg-accent"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex min-h-screen flex-col items-center justify-center space-y-4">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="text-lg font-medium hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {service.title}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    );
  }, [mobileMenuOpen]);

  return (
    <div className="fixed top-2 sm:top-8 z-30 w-full mt-2 sm:mt-4">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="flex h-14 sm:h-16 items-center justify-between rounded-full bg-white/90 backdrop-blur-md shadow-lg px-3 sm:px-6 py-1 sm:py-2 dark:bg-background">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Anadolu Zemin"
                width={150}
                height={40}
                className="h-8 sm:h-10 w-auto dark:[&>svg]:text-white dark:[&>svg]:fill-current"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center flex-1">
            <div className="flex items-center justify-center gap-10 mx-auto">
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

                <div className={`absolute z-10 left-0 mt-3 w-56 origin-top-left rounded-md bg-popover shadow-lg ring-1 ring-border focus:outline-none ${mobileMenuOpen ? 'block' : 'hidden'} group-hover:block /90`}>
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
                href="/hakkimizda"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Hakkımızda
              </Link>

              <Link
                href="/calisma-galerimiz"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Çalışma Galerimiz
              </Link>

              <Link
                href="/iletisim"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                İletişim
              </Link>
            </div>
            
            {/* Theme Toggle - Right Side */}
            <div>
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
      {mobileMenu}
    </div>
  );
};

export default Header;