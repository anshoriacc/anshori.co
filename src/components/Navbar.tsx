import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import { FaExternalLinkAlt, FaMoon, FaSun } from 'react-icons/fa';

import { toggleTheme } from 'src/redux/actions';
import { useAppDispatch } from 'src/redux/store';
import { Reducers } from 'src/redux/types';

function NavItem({ href, text }: { href: string; text: string }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a
        className={`${
          isActive ? 'font-bold' : 'text-gray-500 hover:text-inherit'
        } transition-all`}
      >
        <span>{text}</span>
      </a>
    </Link>
  );
}

const Navbar = () => {
  const dispatch = useAppDispatch();
  const theme = useSelector((state: Reducers) => state.theme);
  const [mounted, setMounted] = useState(false);
  const [myTheme, setMyTheme] = useState(() => {
    if (mounted) return theme;
  });

  const toggleThemeHandler = useCallback(
    () => dispatch(toggleTheme()),
    [dispatch]
  );

  useEffect(() => {
    setMounted(() => true);
    if (mounted) setMyTheme(theme);
  }, [mounted, theme]);

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
        {myTheme === 'dark' ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
};

export default Navbar;
