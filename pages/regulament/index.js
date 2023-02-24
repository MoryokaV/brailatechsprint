import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import {
  faBook,
  faChevronRight,
  faFileWord,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";

export default function Regulament() {
  return (
    <>
      <Head>
        <title>Brăila Tech Sprint</title>
        <meta name="description" content="Brăila IT hackathon landing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <main>
        <div
          className="mt-10 mb-2 flex flex-col jusify-center items-center gap-4"
          data-aos="fade-down"
        >
          <FontAwesomeIcon
            icon={faBook}
            className="bg-sol-grey/50 p-4 w-20 h-20 sm:w-28 sm:h-28 rounded-md shadow-sm"
          ></FontAwesomeIcon>
          <h2 className="font-semibold text-2xl sm:text-4xl">Regulament</h2>
        </div>
        <div
          className="mx-auto mb-4 md:mb-8 w-16 h-1 bg-sol-green"
          data-aos="fade-down"
        ></div>
        <section
          className="mx-auto max-w-6xl mb-6 flex flex-col items-start gap-4 p-6"
          data-aos="fade-down"
        >
          <h3 className="text-3xl md:text-4xl mb-3 text-sol-grey-accent">
            Termenii si conditiile
          </h3>

          <div className="flex items-center gap-4 mb-6">
            <FontAwesomeIcon
              icon={faChevronRight}
              className="w-3 text-sol-bright-blue flex-shrink-0"
            ></FontAwesomeIcon>
            <p className="tracking-wide">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <FontAwesomeIcon
              icon={faChevronRight}
              className="w-3 text-sol-bright-blue flex-shrink-0"
            ></FontAwesomeIcon>
            <p className="tracking-wide">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
            </p>
          </div>
          <div
            onClick={() => window.open("https://google.com")}
            className="bg-sol-blue-accent flex items-center gap-3 px-3 py-2 rounded-sm opacity-75 hover:opacity-100 hover:shadow cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faFileWord}
              className="h-6 opacity-75 text-sol-bright-blue"
            ></FontAwesomeIcon>
            <p>Regulament BTS.docx</p>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
