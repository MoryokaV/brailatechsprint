import { useEffect } from "react";
import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      delay: 300,
      once: true,
    });
  }, []);

  return <Component {...pageProps} />;
}
