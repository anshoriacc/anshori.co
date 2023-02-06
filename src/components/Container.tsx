import Head from 'next/head';
import { useRouter } from 'next/router';

import Footer from './Footer';
import Navbar from './Navbar';

const Container = (props: any) => {
  const { children, ...customMeta } = props;
  const router = useRouter();

  const meta = {
    title: 'Achmad Anshori',
    description: 'a Software Engineer, Frontend.',
    ...customMeta,
  };

  return (
    <main className="min-h-[100vh] max-w-[768px] mx-auto">
      <Head>
        <title>
          {props.title ? `${props.title} | Achmad Anshori` : meta.title}
        </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`https://anshori.co${router.asPath}`} />
        <meta name="description" content={meta.description} />
        <meta
          property="og:url"
          content={`https://anshori.co${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Achmad Anshori" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content="" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@20arik_" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Navbar />
      <section className="min-h-[calc(100vh-148px)] p-4">{children}</section>
      <Footer />
    </main>
  );
};

export default Container;
