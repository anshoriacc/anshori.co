"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [{ href: "/projects", label: "projects" }];

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="p-6 flex justify-between items-center">
      <Link
        href="/"
        className={`text-3xl font-black transition-all ${
          pathname !== "/" ? "text-gray-500 hover:text-white" : ""
        }`}
        id="header"
      >
        anshori.
      </Link>
      <nav className="flex gap-4 text-gray-500 font-bold">
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
