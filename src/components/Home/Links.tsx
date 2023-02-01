import { NextPage } from 'next';
import Link from 'next/link';
import cn from 'classnames';

import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';

import SocialMedia from './SocialMedia';

const Links: NextPage = () => {
  return (
    <section className="mt-2 flex gap-2">
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
    </section>
  );
};

export default Links;
