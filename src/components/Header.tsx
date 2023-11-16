"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "home", title: "anshori" },
  { href: "/projects", label: "projects", title: "projects" },
];

const Navigations: React.FC = () => {
  const pathname = usePathname();

  return (
    <>
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
    </>
  );
};

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="p-6 flex justify-between items-center">
      <Link href="/" className="text-3xl font-black text-white">
        {pathname.split("/")[1] || "anshori"}.
      </Link>

      <nav className="flex gap-3 text-gray-500 font-bold">
        <Navigations />
      </nav>
    </header>
  );
};

export default Header;
