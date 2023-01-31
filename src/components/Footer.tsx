const Footer = () => {
  const date = new Date();

  return (
    <footer className="p-4 flex gap-1 justify-center items-center">
      <p>© {date.getFullYear()} Achmad Anshori</p>
      <span>🔷</span>
      <a
        href="https://github.com/anshoriacc/anshori.io"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold hover:animate-pulse"
      >
        src
      </a>
    </footer>
  );
};

export default Footer;
