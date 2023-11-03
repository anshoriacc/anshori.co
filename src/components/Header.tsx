"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "home", title: "anshori" },
  { href: "/projects", label: "projects", title: "projects" },
  { href: "/journey", label: "journey", title: "journey" },
  { href: "/blog", label: "blog", title: "blog" },
];

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="p-6 flex justify-between items-center">
      <Link href="/" className="text-3xl font-black text-white">
        {navLinks.find((link) => link.href === pathname)?.title}.
      </Link>
      <nav className="hidden sm:flex gap-3 text-gray-500 font-bold">
        {navLinks.map((link) => {
          const isActive = link.href === pathname;
          return (
            <Link
              href={link.href}
              key={link.href}
              className={
                isActive ? "text-white" : "hover:text-white transition-all"
              }
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
