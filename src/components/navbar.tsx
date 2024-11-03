"use client";
import Link from "next/link";
import { MapPin, PhoneCall, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Input } from "./ui/input";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Navbar() {
  const pathname = usePathname();

  const NavLinks = () => (
    <nav className="flex md:items-center gap-6 flex-col md:flex-row ">
      <Link
        href="/"
        className={`text-sm font-medium relative ${
          pathname === "/" ? "text-primary font-bold" : "text-muted-foreground"
        } hover:text-primary`}
      >
        Asosiy
        {pathname === "/" && (
          <span className="absolute -bottom-2 left-0 w-[26px] h-0.5 bg-primary"></span>
        )}
      </Link>
      <Link
        href="/services"
        className={`text-sm font-medium relative ${
          pathname === "/services"
            ? "text-primary font-bold"
            : "text-muted-foreground"
        } hover:text-primary`}
      >
        Xizmatlar
        {pathname === "/services" && (
          <span className="absolute -bottom-2 left-0 w-[26px] h-0.5 bg-primary"></span>
        )}
      </Link>
      <Link
        href="/platforms"
        className={`text-sm font-medium relative ${
          pathname === "/platforms"
            ? "text-primary font-bold"
            : "text-muted-foreground"
        } hover:text-primary`}
      >
        Xonalar
        {pathname === "/platforms" && (
          <span className="absolute -bottom-2 left-0 w-[26px] h-0.5 bg-primary"></span>
        )}
      </Link>
      <Link
        href="/contact"
        className={`text-sm font-medium relative ${
          pathname === "/contact"
            ? "text-primary font-bold"
            : "text-muted-foreground"
        } hover:text-primary`}
      >
        Bog'lanish
        {pathname === "/contact" && (
          <span className="absolute -bottom-2 left-0 w-[26px] h-0.5 bg-primary"></span>
        )}
      </Link>
      <Link
        href="/about"
        className={`text-sm font-medium relative ${
          pathname === "/about"
            ? "text-primary font-bold"
            : "text-muted-foreground"
        } hover:text-primary`}
      >
        Biz haqimizda
        {pathname === "/about" && (
          <span className="absolute -bottom-2 left-0 w-[26px] h-0.5 bg-primary"></span>
        )}
      </Link>
    </nav>
  );

  return (
    <div className="flex flex-col w-full ">
      {/* Top Navigation */}
      <div>
        <nav className=" top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm  ">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              Logo
            </Link>
            <div className="hidden md:flex items-center space-x-4 flex-1 justify-center">
              <form className="relative w-full max-w-2xl">
                <Input
                  type="search"
                  placeholder="Qidiruv..."
                  className="pl-10 pr-4 h-10 rounded-md bg-gray-100 w-full text-lg"
                />
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </form>
            </div>
            <div className="hidden md:flex items-center">
              <MapPin size={18} className="mr-2" />
              <PhoneCall size={18} className="mr-2" />
              <span>+1 (123) 456-7890</span>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetTitle>Menu</SheetTitle>
                <div className="mt-8 flex flex-col gap-4">
                  <NavLinks />
                  <div className="flex items-center gap-2 mt-4">
                    <MapPin size={18} />
                    <PhoneCall size={18} />
                    <span>+1 (123) 456-7890</span>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>

      {/* Bottom Navigation */}
      <div className="hidden md:flex h-14 items-center justify-center border-t">
        <NavLinks />
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 mt-24 mb-4">
        <form className="relative w-full">
          <Input
            type="search"
            placeholder="Qidiruv..."
            className="pl-10 pr-4 py-3 rounded-md bg-gray-100 w-full text-lg"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </form>
      </div>
    </div>
  );
}
