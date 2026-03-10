// components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";
import { SearchCommand } from "./SearchCommand";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Berita", href: "/berita" },
    { name: "Informasi", href: "/informasi" },
    { name: "Layanan", href: "/warga/layanan" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-sea-green-500/10 backdrop-blur-md shadow-sm border-b border-sea-green-500/20"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0 flex items-center gap-4">
            <Link href="/" className="text-2xl font-bold text-sea-green-950 dark:text-sea-green-500 flex items-center gap-2">
              <span className="bg-sea-green-500 text-white p-1 rounded-lg">SID</span>
              <span className="hidden sm:inline">Lantosan I</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
             <div className="flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-sea-green-600 font-bold dark:text-sea-green-400"
                      : "text-gray-700 hover:text-sea-green-600 dark:text-gray-300 dark:hover:text-sea-green-400"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <SearchCommand />
            <Link
              href="/login"
              className="bg-sea-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-sea-green-600 transition-colors shadow-lg shadow-sea-green-500/30"
            >
              Login
            </Link>
          </div>
          
          <div className="flex items-center gap-2 md:hidden">
            <SearchCommand />
            <div className="-mr-2 flex">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-sea-green-500/20 hover:text-sea-green-950 focus:outline-none dark:text-gray-200"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-sea-green-500/20 dark:bg-black/90" id="mobile-menu">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  pathname === link.href
                    ? "bg-sea-green-50 text-sea-green-600 dark:bg-sea-green-900/50 dark:text-sea-green-400"
                    : "text-gray-700 hover:bg-sea-green-50 hover:text-sea-green-600 dark:text-gray-300 dark:hover:bg-sea-green-900/30"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2">
              <Link
                href="/login"
                className="block w-full text-center bg-sea-green-500 text-white px-4 py-2 rounded-full text-base font-medium hover:bg-sea-green-600 transition-colors shadow-lg shadow-sea-green-500/30"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

