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
        'group relative w-[96px] h-[96px] p-4 flex justify-center gap-4 items-center transition-all rounded-2xl bg-gray-0 border-2 border-white',
        'dark:bg-gray-850 dark:border-gray-900',
        'hover:border-gray-200 dark:hover:border-gray-700'
      )}
    >
      <span className={cn('text-6xl transition-all', 'group-hover:text-5xl')}>
        {icon}
      </span>
      <span
        className={cn(
          'invisible absolute bottom-2 right-2 p-1 rounded-lg flex gap-1 items-center text-xs transition-all bg-white',
          'dark:bg-gray-900',
          'group-hover:visible'
        )}
      >
        {name} <BiLinkExternal />
      </span>
    </a>
  );
};

export default SocialMedia;
