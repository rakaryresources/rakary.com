"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navItems = [
    { name: "About Us", href: "/about" },
    {
      name: "Our Services",
      dropdown: [
        {
          name: "Social Media Strategy Development",
          href: "/services/social-media-strategy",
        },
        {
          name: "Social Media Content Creation",
          href: "/services/content-creation",
        },
        { name: "Social Media Management", href: "/services/management" },
        {
          name: "Social Media Ads Management",
          href: "/services/ads-management",
        },
        {
          name: "Influencer Marketing",
          href: "/services/influencer-marketing",
        },
        {
          name: "Branding and Design Services",
          href: "/services/branding-design",
        },
        { name: "Lead Generation", href: "/services/lead-generation" },
      ],
    },
    { name: "Customers", href: "/customers" },
    { name: "Resources", href: "/resources" },
    { name: "Contact Us", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <nav className="fixed  top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="flex justify-between px-4 py-2 rounded-full bg-white/80 dark:bg-black/80 shadow-xl backdrop-blur-md items-center border border-gray-200 dark:border-white/10 ring-1 ring-gray-300 dark:ring-0">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 text-sm px-2 py-1 text-black dark:text-white"
        >
          <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm" />
          <span className="font-medium">DeepFundz</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-3">
          {navItems.map((item, idx) =>
            item.dropdown ? (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm px-4 py-2 rounded-md text-black dark:text-white hover:bg-[#F5F5F5] dark:hover:bg-neutral-800 transition">
                  {item.name}
                  <ChevronDown size={14} />
                </button>
                {isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-neutral-900 shadow-lg rounded-lg p-2 z-50">
                    {item.dropdown.map((sub, subIdx) => (
                      <Link
                        key={subIdx}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 rounded"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={idx}
                href={item.href}
                className="text-sm px-4 py-2 rounded-md text-black dark:text-white hover:bg-[#F5F5F5] dark:hover:bg-neutral-800 transition"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center space-x-2">
          <ThemeToggle />
          <Link
            href="/contact"
            className="text-sm px-4 py-2 rounded-full bg-neutral-900 hover:bg-black/90 text-white transition shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset]"
          >
            Book Service
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden absolute top-[calc(100%+8px)] left-0 right-0 mx-4 rounded-xl transition-all shadow-lg bg-white dark:bg-black p-4 space-y-2 ${
          isMobileMenuOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {navItems.map((item, idx) =>
          item.dropdown ? (
            <div key={idx}>
              <button
                className="w-full text-left py-1 text-black dark:text-white flex justify-between items-center"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                {item.name}
                <ChevronDown size={14} />
              </button>
              {isServicesOpen &&
                item.dropdown.map((sub, subIdx) => (
                  <Link
                    key={subIdx}
                    href={sub.href}
                    className="block pl-4 py-1 text-sm text-black dark:text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {sub.name}
                  </Link>
                ))}
            </div>
          ) : (
            <Link
              key={idx}
              href={item.href}
              className="block py-1 text-black dark:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          )
        )}

        {/* Auth + Theme in Mobile */}
        <div className="pt-2 border-t border-black/10 dark:border-white/20 space-y-2">
          <Link
            href="/contact"
            className="block py-1 text-black dark:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Service
          </Link>
        </div>
        <div className="pt-2 border-t border-black/10 dark:border-white/20">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
