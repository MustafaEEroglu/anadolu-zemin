import Link from "next/link";
import Image from "next/image";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/theme-toggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            alt="Anadolu Zemin Logo"
            width={150}
            height={40}
            priority
            className="dark:invert"
          />
        </Link>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="nav-link">
                    Anasayfa
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="nav-link">
                  Hizmetler
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <li key={service.title}>
                        <Link href={service.href} legacyBehavior passHref>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{service.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/raporlar" legacyBehavior passHref>
                  <NavigationMenuLink className="nav-link">
                    Raporlar
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/hakkimizda" legacyBehavior passHref>
                  <NavigationMenuLink className="nav-link">
                    Hakkımızda
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/iletisim" legacyBehavior passHref>
                  <NavigationMenuLink className="nav-link">
                    İletişim
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

const services = [
  {
    title: "Zemin Etüdü",
    description: "Detaylı zemin araştırması ve analizi hizmetleri",
    href: "/hizmetler/zemin-etüdü",
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