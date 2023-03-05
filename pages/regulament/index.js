import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { faBook, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import htmlParser from "html-react-parser";
import { RegulamentDoc } from "data/regulament";
import { useState } from "react";
import { NextSeo } from "next-seo";

export default function Regulament() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <Head>
        <title>Brăila Tech Sprint</title>
        <meta name="description" content="Brăila IT hackathon landing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <NextSeo
          title="Braila Tech Sprint - Regulament"
          description="Regulamentul hackathonului organizat in Braila, Romania"
          keywords={[
            "hackathon",
            "bts",
            "brailatechsprint",
            "braila",
            "romania",
            "it",
            "tech",
            "startup",
            "hack",
            "braila tech sprint",
            "braila tech sprint 2021",
            "braila tech sprint hackathon",
            "braila",
            "braila tech sprint hackathon 2021",
            "hackathon braila",
            "hackathon braila 2021",
            "hackathon braila tech sprint",
            "hackathon braila tech sprint 2021",
            "hackathon braila tech sprint hackathon",
            "hackathon",
            "regulament bts",
            "regulament hackathon",
            "braila tech sprint regulament",
            "tech sprint braiila regulament",
            "reguli hackathon braila",
            "reguli hackathon braila tech sprint",
            "reguli hackathon braila tech sprint 2021",
            "reguli hackathon braila tech sprint hackathon",
            "reguli hackathon braila tech sprint hackathon 2021",
            "reguli hackathon braila tech sprint hackathon 2021",
            "hackathon braila regulament",
            "hackathon braila regulament 2021",
            "hackathon braila regulament",
            "concurs braila",
            "concurs programare braila",
            "concurs programare",
            "programare braila",
          ]}
        />
      </Head>
      <Navbar></Navbar>
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
        className="mx-auto mb-4 lg:mb-8 w-16 h-1 bg-sol-green"
        data-aos="fade-down"
      ></div>
      <main
        data-aos="fade-down"
        className="mx-auto max-w-7xl mb-6 grid grid-cols-1 lg:grid-cols-[325px_1fr] justify-center gap-4 lg:gap-12 p-6"
      >
        <aside className="flex flex-row flex-wrap justify-center lg:flex-col lg:justify-start">
          {RegulamentDoc.map((section, index) => {
            return (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`lg:text-xl hover:text-sol-bright-blue transition-all duration-300 hover:lg:shadow-[-2px_0] hover:shadow-[0_2px] px-4 lg:px-6 py-1 mx-2 mb-6 text-start opacity-75 hover:opacity-100 ${
                  index === currentIndex &&
                  "lg:shadow-[-2px_0] shadow-[0_2px] text-sol-bright-blue opacity-100"
                }`}
              >
                {index + 1}. {section.title}
              </button>
            );
          })}
        </aside>

        <article className="flex flex-col items-start gap-4">
          <h3 className="text-3xl lg:text-4xl text-sol-grey-accent">
            {RegulamentDoc[currentIndex].title}
          </h3>
          <p className="py-1 px-4 bg-sol-dark-blue/50 text-sol-grey/75 font-bold uppercase w-min whitespace-nowrap rounded-sm mb-3 tracking-wider">
            Ediția I
          </p>

          {RegulamentDoc[currentIndex].paragraphs.map((content, index) => {
            return (
              <div key={index} className="flex items-center gap-4 mb-4">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="w-[10px] text-sol-bright-blue flex-shrink-0"
                ></FontAwesomeIcon>
                <section className="tracking-wide">
                  {htmlParser(content)}
                </section>
              </div>
            );
          })}
        </article>
      </main>
      <p className="italic opacity-75 mb-8 text-center px-4">
        Orice întrebare sau solicitare de informații suplimentare despre
        hackathon poate fi trimisă pe adresa de email.
      </p>
      <Footer></Footer>
    </>
  );
}
