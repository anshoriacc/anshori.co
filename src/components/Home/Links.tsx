import { NextPage } from 'next';
import Link from 'next/link';
import cn from 'classnames';

import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';

import SocialMedia from './SocialMedia';

const Links: NextPage = () => {
  return (
    <section className={cn('grid gap-4', 'sm:grid-cols-[1fr_auto]')}>
      <Link href="/projects">
        <a
          title="Projects"
          className={cn(
            'group relative h-[96px] p-4 flex justify-start gap-4 items-center text-xl font-bold transition-all rounded-2xl bg-gray-0 border-2 border-white',
            'dark:bg-gray-850 dark:border-gray-900',
            'hover:text-lg hover:border-gray-200 dark:hover:border-gray-700'
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
      <div className="flex gap-4 justify-between sm:justify-start">
        <SocialMedia
          name="GitHub"
          url="https://github.com/anshoriacc"
          icon={<FaGithub />}
        />
        <SocialMedia
          name="LinkedIn"
          url="https://www.linkedin.com/in/achmad-anshori/"
          icon={<FaLinkedin />}
        />
        <SocialMedia
          name="Twitter"
          url="https://twitter.com/20arik_"
          icon={<FaTwitter />}
        />
        <SocialMedia
          name="Instagram"
          url="https://instagram.com/20arik"
          icon={<FaInstagram />}
        />
      </div>
    </section>
  );
};

export default Links;
