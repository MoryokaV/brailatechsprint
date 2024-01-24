import { useEffect } from "react";
import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      delay: 300,
      once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Brăila Tech Sprint</title>
        <meta name="description" content="Brăila IT hackathon landing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
