import dayjs from "dayjs";

const Footer = () => {
  return (
    <footer className="p-6 flex flex-col gap-1 items-center">
      <p>© {dayjs().year()} Achmad Anshori</p>
    </footer>
  );
};

export default Footer;
