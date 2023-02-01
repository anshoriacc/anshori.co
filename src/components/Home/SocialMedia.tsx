import { ReactNode } from 'react';
import { NextPage } from 'next';
import cn from 'classnames';
import { BiLinkExternal } from 'react-icons/bi';

interface SocialMediaProps {
  name: string;
  url: string;
  icon: ReactNode;
}

const SocialMedia: NextPage<SocialMediaProps> = ({
  name,
  url,
  icon,
}: SocialMediaProps) => {
  return (
    <a
      href={url}
      title={name}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group w-10 h-10 relative p-2 flex justify-center gap-4 items-center transition-all rounded-lg bg-white border-2 border-white',
        'dark:bg-gray-900 dark:border-gray-900',
        'hover:border-gray-200 dark:hover:border-gray-700'
      )}
    >
      <span className={cn('text-xl transition-all', 'group-hover:text-lg')}>
        {icon}
      </span>
    </a>
  );
};

export default SocialMedia;
