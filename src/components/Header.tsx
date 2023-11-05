"use client";

import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MdClose, MdMenu } from "react-icons/md";
import clsx from "clsx";
import useClickOutside from "@/hooks/useClickOutside";

const navLinks = [
  { href: "/", label: "home", title: "anshori" },
  { href: "/projects", label: "projects", title: "projects" },
  { href: "/journey", label: "journey", title: "journey" },
  { href: "/blog", label: "blog", title: "blog" },
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

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  useClickOutside(buttonRef, () => {
    if (isMenuOpen) setIsMenuOpen((prev) => !prev);
  });

  return (
    <header className="p-6 flex justify-between items-center">
      <Link href="/" className="text-3xl font-black text-white">
        {navLinks.find((link) => link.href === pathname)?.title}.
      </Link>

      <div ref={buttonRef} className="sm:hidden">
        <button className="p-2" onClick={() => setIsMenuOpen((prev) => !prev)}>
          {isMenuOpen ? <MdClose size={20} /> : <MdMenu size={20} />}
        </button>
        {isMenuOpen && (
          <nav className="absolute w-full right-6 p-2 flex flex-wrap gap-3 justify-end bg-gray-900 text-gray-500 font-bold transition-transform">
            <Navigations />
          </nav>
        )}
      </div>
      <nav className="hidden sm:flex gap-3 text-gray-500 font-bold">
        <Navigations />
      </nav>
    </header>
  );
};

export default Header;
