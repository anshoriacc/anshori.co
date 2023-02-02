import Clock from './Clock';

const Footer = () => {
  const date = new Date();

  return (
    <footer className="p-4 flex flex-col gap-1 items-center cursor-default">
      <p className="flex gap-1 items-center">
        UTC+7 <Clock />
      </p>
      <p>
        © {date.getFullYear()} Achmad Anshori <span>🔷 </span>
        <a
          href="https://github.com/anshoriacc/anshori.io"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:animate-pulse"
        >
          src
        </a>
      </p>
    </footer>
  );
};

export default Footer;
