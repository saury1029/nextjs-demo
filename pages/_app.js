import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';

import '../styles/index.css';

NProgress.configure({
  showSpinner: false,
});

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js + Tailwind CSS + JSONPlaceholder Demo</title>
        <meta
          name="description"
          content="Next.js + Tailwind CSS + JSONPlaceholder Demo"
        />
        <meta name="keywords" content="Next.js Tailwindcss JSONPlaceholder" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />
        <link
          href="https://fonts.font.im/css?family=Roboto:300,400,700,900"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
