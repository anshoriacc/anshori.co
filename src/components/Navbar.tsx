import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import clsx from 'clsx';

import { FaSun } from 'react-icons/fa';
import { BsMoonStarsFill } from 'react-icons/bs';

function NavItem({ href, text }: { href: string; text: string }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a
        className={clsx(
          isActive ? 'font-bold' : 'text-gray-500 hover:text-inherit',
          'transition-all'
        )}
      >
        <span>{text}</span>
      </a>
    </Link>
  );
}

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleThemeHandler = () => {
    if (theme === 'light') {
      return setTheme('dark');
    }
    return setTheme('light');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="p-4 flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <NavItem href="/" text="Home" />
        <NavItem href="/about" text="About" />
        <NavItem href="/projects" text="Projects" />
      </div>
      <button
        onClick={toggleThemeHandler}
        title="toggle theme"
        className="p-1 rounded-full font-black text-2xl cursor-pointer text-yellow-400"
      >
        {!mounted ? null : theme === 'light' ? <BsMoonStarsFill /> : <FaSun />}
      </button>
    </nav>
  );
};

export default Navbar;
