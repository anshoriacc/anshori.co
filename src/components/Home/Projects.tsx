import Link from 'next/link';
import cn from 'classnames';

import { BiLinkExternal } from 'react-icons/bi';

const Projects = () => {
  return (
    <Link href="/projects">
      <a
        title="Projects"
        className={cn(
          'group relative h-[8rem] p-4 flex justify-start gap-4 items-center text-xl font-bold transition-all rounded-2xl bg-gray-0 border-2 border-white',
          'dark:bg-gray-850 dark:border-gray-900',
          'hover:text-lg hover:border-gray-200 dark:hover:border-gray-700',
        )}
      >
        Link to projects
        <span
          className={cn(
            'invisible absolute bottom-2 right-2 p-1 rounded-lg flex gap-1 items-center text-xs transition-all bg-white',
            'dark:bg-gray-900',
            'group-hover:visible'
          )}
        >
          <BiLinkExternal />
        </span>
      </a>
    </Link>
  );
};

export default Projects;
