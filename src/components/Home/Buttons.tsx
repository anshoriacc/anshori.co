import { NextPage } from 'next';
import cn from 'classnames';

import {
  FaFileDownload,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

import Button from './Button';

const Buttons: NextPage = () => {
  return (
    <section className="mt-2 flex gap-2">
      <a
        href="/resume.pdf"
        download="resume-achmad-anshori"
        title="download resume"
        className={cn(
          'p-2 w-[100px] h-10 text-lg rounded-lg flex gap-1 justify-center items-center transition-all border-2 bg-white border-white',
          'dark:bg-gray-900 dark:border-gray-900',
          'hover:border-gray-200 dark:hover:border-gray-700 hover:text-base'
        )}
      >
        <FaFileDownload />
        <span>Resume</span>
      </a>
      <Button
        name="GitHub"
        url="https://github.com/anshoriacc"
        content={<FaGithub />}
      />
      <Button
        name="LinkedIn"
        url="https://www.linkedin.com/in/achmad-anshori/"
        content={<FaLinkedin />}
      />
      <Button
        name="Twitter"
        url="https://twitter.com/20arik_"
        content={<FaTwitter />}
      />
      <Button
        name="Instagram"
        url="https://instagram.com/20arik"
        content={<FaInstagram />}
      />
    </section>
  );
};

export default Buttons;