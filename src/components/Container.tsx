import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { Reducers } from 'src/redux/types';

import Footer from './Footer';
import Navbar from './Navbar';

const Container = (props: any) => {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const theme = useSelector((state: Reducers) => state.theme);

  const meta = {
    title: 'Achmad Anshori – Software Engineer.',
    description: 'a Software Engineer, Frontend.',
    ...customMeta,
  };

  return (
    <main className="min-h-[100vh] max-w-[800px] mx-auto">
      <Head>
        <title>{meta.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`https://anshori.io${router.asPath}`} />
        <meta name="description" content={meta.description} />
        <meta
          property="og:url"
          content={`https://anshori.io${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Achmad Anshori" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content="" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@20arik_" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
      </Head>
      <Navbar />
      {/* <hr className="border-gray-100 dark:border-gray-800 transition-all" /> */}
      <section className="min-h-[calc(100vh-123px)] p-4">{children}</section>
      <Footer />
    </main>
  );
};

export default Container;
