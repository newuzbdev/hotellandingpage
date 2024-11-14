"use client";
import Link from "next/link";
import {
  MapPin,
  PhoneCall,
  Search,
  Menu,
  ChevronDown,
  ChevronUp,
  Globe,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Input } from "./ui/input";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const NavLinks = ({ isMobile = false }) => (
    <nav className="flex md:items-center gap-6 flex-col md:flex-row">
      <Link
        href="/"
        className={`text-base font-medium relative ${
          pathname === "/" ? "text-primary font-bold" : ""
        } hover:text-primary`}
      >
        Asosiy
        {pathname === "/" && (
          <span className="absolute -bottom-2 left-0 w-[26px] h-0.5 bg-primary"></span>
        )}
      </Link>
      <Link
        href="/services"
        className={`text-base font-medium relative ${
          pathname === "/services" ? "text-primary font-bold" : ""
        } hover:text-primary`}
      >
        Xizmatlar
        {pathname === "/services" && (
          <span className="absolute -bottom-2 left-0 w-[26px] h-0.5 bg-primary"></span>
        )}
      </Link>
      {isMobile ? (
        <div className="flex flex-col gap-2">
          <div 
            className="flex items-center text-base font-medium relative hover:text-primary"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            Xonalar{" "}
            {isMobileOpen ? (
              <ChevronUp className="ml-1 h-4 w-4" />
            ) : (
              <ChevronDown className="ml-1 h-4 w-4" />
            )}
          </div>
          {isMobileOpen && (
            <div className="flex flex-col gap-2 pl-4">
              <Link href="/roomsDetails">Standark bir kishilik</Link>
              <Link href="/roomsDetails/standard">Standard Room</Link>
              <Link href="/roomsDetails/deluxe">Deluxe Room</Link>
            </div>
          )}
        </div>
      ) : (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger className="flex items-center text-base font-medium relative hover:text-primary">
            Xonalar{" "}
            {isOpen ? (
              <ChevronUp className="ml-1 h-4 w-4" />
            ) : (
              <ChevronDown className="ml-1 h-4 w-4" />
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href="/roomsDetails">Standark bir kishilik</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/roomsDetails/standard">Standard Room</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/roomsDetails/deluxe">Deluxe Room</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
      <Link
        href="/contact"
        className={`text-base font-medium relative ${
          pathname === "/contact" ? "text-primary font-bold" : ""
        } hover:text-primary`}
      >
        Boglanish
        {pathname === "/contact" && (
          <span className="absolute -bottom-2 left-0 w-[26px] h-0.5 bg-primary"></span>
        )}
      </Link>
      <Link
        href="#aboutus"
        className={`text-base font-medium relative ${
          pathname === "/about" ? "text-primary font-bold" : ""
        } hover:text-primary`}
      >
        Biz haqimizda
        {pathname === "#aboutus" && (
          <span className="absolute -bottom-2 left-0 w-[26px] h-0.5 bg-primary"></span>
        )}
      </Link>
    </nav>
  );

  return (
    <div className="flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm">
        <nav className="mx-24">
          <div className="p-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              Logo
            </Link>

            <div className="hidden lg:flex flex-1 justify-center max-w-3xl">
              <form className="relative w-full">
                <Input
                  type="search"
                  placeholder="Qidiruv..."
                  className="pl-10 pr-4 h-[42px] rounded-md bg-gray-100 w-full text-lg"
                />
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </form>
            </div>
            <div className="hidden lg:flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Globe size={20} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <MapPin size={20} />
              <PhoneCall size={20} />
              <span>+1 (123) 456-7890</span>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Menu size={28}  className="lg:hidden"/>
              </SheetTrigger>
              <SheetContent>
                <SheetTitle>Menu</SheetTitle>
                <div className="mt-8 flex flex-col gap-4">
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
                  <NavLinks isMobile={true} />
                  <div className="flex items-center gap-2 mt-4">
                    <MapPin size={20} />
                    <PhoneCall size={20} />
                    <span>+1 (123) 456-7890</span>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="hidden lg:flex h-14 items-center justify-center border-t w-full">
            <NavLinks isMobile={false} />
          </div>
        </nav>
      </div>
    </div>
  );
}
