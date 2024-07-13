import Link from "next/link";

import {
  FaFileDownload,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const links = [
  {
    href: "https://cv-anshori.vercel.app",
    label: "resume",
    icon: <FaFileDownload />,
  },
  {
    href: "mailto:anshoriacc@gmail.com",
    label: "email",
    icon: <FaEnvelope />,
  },
  {
    href: "https://github.com/anshoriacc",
    label: "github",
    icon: <FaGithub />,
  },
  {
    href: "https://www.linkedin.com/in/achmad-anshori/",
    label: "linkedin",
    icon: <FaLinkedin />,
  },
];

const Social: React.FC = () => {
  return (
    <section className="flex gap-2 flex-wrap">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank"
          className="p-1 bg-gray-800 rounded-md border border-gray-700 hover:border-gray-500"
        >
          <span className="flex gap-1 items-center px-1">
            {link.icon} {link.label}
          </span>
        </Link>
      ))}
    </section>
  );
};

export default Social;
