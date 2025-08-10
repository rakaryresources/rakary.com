import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/our-services", label: "Our Services" },
  { href: "/customers", label: "Customers" },
  { href: "/resources", label: "Resources" },
  { href: "/faq", label: "Faq" },
  { href: "/contact-us", label: "Contact Us" },
];

const socialLinks = [
  {
    href: "https://twitter.com",
    label: "Twitter",
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.7 1.64.9c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.94 3.65A4.48 4.48 0 01.96 6v.06c0 2.13 1.52 3.9 3.54 4.3-.37.1-.76.16-1.16.16-.28 0-.56-.03-.83-.08.56 1.75 2.2 3.02 4.13 3.06A9.06 9.06 0 010 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.87 12.85-12.85 0-.2 0-.39-.01-.58A9.22 9.22 0 0023 3z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 8a6 6 0 0 1 6 6v6M2 8v6a6 6 0 0 0 6 6h6" />
        <line x1="8" y1="11" x2="8" y2="16" />
        <line x1="8" y1="8" x2="8" y2="8" />
      </svg>
    ),
  },
  {
    href: "https://github.com",
    label: "GitHub",
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.51.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
      </svg>
    ),
  },
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-black text-white px-4 py-12 border-t border-neutral-800">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center mb-4">
          <Image src="/images/rakary.png" alt="Logo" width={48} height={48} />
        </Link>
        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-6 mb-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-neutral-300 text-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {/* Divider */}
        <div className="w-full border-t border-dotted border-neutral-700 mb-6" />
        {/* Bottom row */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs">
          <div className="mb-4 md:mb-0">Copyright © 2025 rakary.com</div>
          <div className="flex gap-5">
            {socialLinks.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="hover:text-neutral-300 transition-colors"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom background text */}
      <div
        style={{ transform: "scaleY(1.2)" }}
        className="mt-16 text-[14vw] lg:text-[16vw] xl:text-[16vw] leading-none font-extrabold text-transparent bg-gradient-to-b dark:from-black dark:via-neutral-900 dark:to-neutral-500 from-white via-neutral-200 to-neutral-500 text-center select-none tracking-tight bg-clip-text"
      >
        Rakary.com
      </div>
    </footer>
  );
}
