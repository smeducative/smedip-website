import Link from "next/link";
import NavDropdown from "./NavDropdown";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import * as React from "react";

export default function AppNavbar() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle({
                className: "bg-transparent",
              })}
            >
              Beranda
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Profil
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="bg-white min-w-[200px]">
              <li>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle({
                    className: "bg-transparent",
                  })}
                  asChild
                >
                  <Link
                    className={cn(
                      "w-full block select-none space-y-1 rounded-md p-5 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    )}
                    href="/visi-dan-misi"
                  >
                    Visi dan Misi
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="#kompetensi-keahlian" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle({
                className: "bg-transparent",
              })}
            >
              Kompetensi Keahlian
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Informasi
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-white">
              <ListItem href="/berita" title="Berita">
                Informasi terbaru yang ada di sekolah.
              </ListItem>
              <ListItem href="/publikasi" title="Publikasi">
                Publikasi dari guru dan siswa.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link
            href="https://ppdb.smkdiponegoropekalongan.sch.id"
            passHref
            legacyBehavior
            target="_blank"
          >
            <NavigationMenuLink
              className={navigationMenuTriggerStyle({
                className:
                  "bg-yellow-500 text-white hover:bg-white hover:text-yellow-400",
              })}
            >
              PPDB Online
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
