import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { FaExternalLinkAlt, FaMoon, FaSun } from 'react-icons/fa';
import { toggleTheme } from 'src/redux/actions';
import { useAppDispatch } from 'src/redux/store';
import { Reducers } from 'src/redux/types';
import { useRouter } from 'next/router';

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
  const [myTheme, setMyTheme] = useState<string>('');

  const toggleThemeHandler = useCallback(
    () => dispatch(toggleTheme()),
    [dispatch]
  );

  useEffect(() => {
    setMyTheme(theme);
  }, [theme]);

  return (
    <nav className="p-4 flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <NavItem href="/" text="Home" />
        <NavItem href="/projects" text="Projects" />
        <a
          href="https://github.com/anshoriacc"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-inherit transition-all"
        >
          <span className="flex items-center gap-1">
            GitHub{' '}
            <span className="text-sm">
              <FaExternalLinkAlt />
            </span>
          </span>
        </a>
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
