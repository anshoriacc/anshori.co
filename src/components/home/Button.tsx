import { ReactNode } from 'react';
import { NextPage } from 'next';
import clsx from 'clsx';

interface ButtonProps {
  name: string;
  url: string;
  content: ReactNode;
}

const Button: NextPage<ButtonProps> = ({ name, url, content }: ButtonProps) => {
  return (
    <a
      href={url}
      title={name}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        `w-10 h-10 relative p-2 text-xl flex justify-center items-center transition-all rounded-lg bg-white border-2 border-white`,
        'dark:bg-gray-900 dark:border-gray-900',
        'hover:border-gray-200 dark:hover:border-gray-700 hover:text-lg'
      )}
    >
      {content}
    </a>
  );
};

export default Button;
