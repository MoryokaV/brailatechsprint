import Navbar from "components/navbar";
import Footer from "@/components/footer";
import Terminal from "@/components/terminal";
import Categories from "@/components/categories";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import IndexPartnersFlex from "@/components/partners";
import { FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";
import FAQ from "@/components/faq";

import logo from "public/bts.png";
import wave1 from "public/wave1.svg";
import wave2 from "public/wave2.svg";
import Reviews from "@/components/reviews";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Braila Tech Sprint - Pagina principala"
        description="Pagina principala a hackathonului organizat in Braila, Romania"
        keywords={[
          "hackathon",
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
          "concurs braila",
          "concurs programare braila",
          "concurs programare",
          "programare braila",
        ]}
      />
      <Navbar></Navbar>
      <main>
        <Masthead />
        <IndexPartnersFlex />
        <section
          className="mx-auto mb-16 w-full md:max-w-4xl px-4"
          data-aos="fade-down"
        >
          <h3 className="text-2xl font-medium text-sol-grey-accent">
            Ce este Brăila Tech Sprint?
          </h3>
          <div className="mt-1 mb-4 h-1 w-16 bg-sol-yellow"></div>
          <p className="tracking-wide">
            Braila Tech Sprint este o ușă deschisă către viitor, o modalitate de
            a-ți testa limitele, cunoștințele, de a înțelege mai bine ce vrei să
            devii. Alege să ieși din zona de confort, pentru a evolua! Mintea va
            lucra în condiții de competiție, vei dori să faci parte dintr-o
            echipă puternică sau, poate, vei concura singur, dar, la final,
            trebuie să convingi juriul că soluția ta informatică este cea mai
            smart dintre toate. Întâlnirea cu performanța brăileană în
            informatică și tehnologiile viitorul este la Biblioteca Județeană
            ”Panait Istrati”! Lasă consola să se odihnească acasă și vino să ne
            arăți că ai cea mai tare idee de proiect, numai bună de a deveni,
            mai târziu, propriul tău startup. Cu echipă sau fără, în 24 de ore,
            trebuie să ne convingi că poți, iar noi vom premia cele mai bune
            inițiative: premiul 1: <strong>3000 RON</strong>, premiul 2:{" "}
            <strong>1800 RON</strong>, premiul 3: <strong>900 RON</strong>, la
            acestea se vor adăuga mențiuni și tot felul de surprize. Va fi greu,
            dar va fi frumos! Citește regulamentul și apoi înscrie-te!
            <br></br>
            <br></br>
            <span className="text-sol-grey-dark italic">
              — Echipa de organizare
            </span>
          </p>
        </section>
        <Categories />
        <FAQ />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

const Masthead = () => {
  return (
    <div className="masthead w-full flex flex-col justify-between bg-[#002B36] mb-8">
      <div
        data-aos="zoom-in"
        className="flex flex-col items-center justify-center p-8 z-30"
      >
        <div className="max-w-6xl flex flex-col lg:flex-row justify-center items-center gap-x-16 gap-y-10 w-full sm:mt-16 mb-14 sm:mb-20 mx-auto">
          <div className="max-w-lg text-center lg:text-left">
            <Image
              src={logo}
              alt="BTS logo"
              width="240"
              style={{ marginBottom: "32px" }}
              className="mx-auto lg:mx-0 -translate-x-2"
            />
            <h1 className="mb-2 text-4xl font-normal tracking-tight text-sol-grey-accent">
              Brăila <span className="font-semibold">Tech</span>
              <span className="text-sol-yellow font-semibold"> Sprint</span>
            </h1>
            <p>
              Hackathon Ediția II, 24-25 februarie 2024, Casa Tineretului Brăila
            </p>
          </div>
          <Terminal></Terminal>
        </div>

        <button
          className="uppercase font-medium tracking-wider py-3 px-8 bg-sol-yellow text-lg text-black rounded-tl-lg rounded-br-lg hover:shadow-xl hover:bg-sol-yellow-accent hover:-translate-y-1 transition duration-200"
          onClick={() =>
            window.open("https://forms.gle/brMiErFFD7ZSYEBq6", "_blank")
          }
        >
          Înscrie-te
        </button>
      </div>
      <div className="w-full relative">
        <Image
          src={wave1}
          alt="wave svg"
          style={{
            width: "100%",
            height: "auto",
          }}
          className="absolute z-20 bottom-0 pointer-events-none"
        />
        <Image
          src={wave2}
          alt="wave svg"
          style={{
            width: "100%",
            height: "auto",
          }}
          className="absolute z-10 bottom-0 scale-x-100 pointer-events-none"
        />
      </div>
    </div>
  );
};

const CTA = () => {
  return (
    <section
      data-aos="fade-down"
      className="mx-auto mb-10 w-full md:max-w-4xl px-4"
    >
      <h3 className="text-center mb-4 font-medium text-2xl">
        Ești gata de o <span className="text-sol-yellow">nouă aventură</span> ?
      </h3>
      <p className="text-center mb-3">
        Urmărește-ne pe rețelele sociale pentru a afla ultimele noutăți legate
        de eveniment. Prezentări, idei, știri, tips&tricks, toate acestea te
        așteaptă pe paginile noastre oficiale. Pentru orice nelămurire ne poți
        contacta pe adresa de email.
      </p>
      <div className="border border-sol-grey-dark/0 flex py-4 rounded-lg font-medium text-xl">
        <Link
          href="https://www.instagram.com/brailatechsprint2024/"
          target="_blank"
          className="transition-all hover:brightness-125 flex flex-col gap-2 items-center justify-center border-r border-r-sol-grey/40 w-1/3"
        >
          <FaInstagram className="text-sol-magenta h-9 w-9" /> Instagram
        </Link>
        <Link
          href="https://www.facebook.com/HackBTS"
          target="_blank"
          className="transition-all hover:brightness-125 flex flex-col gap-2 items-center justify-center border-r border-r-sol-grey/40 w-1/3"
        >
          <FaFacebook className="text-sol-bright-blue h-9 w-9" /> Facebook
        </Link>
        <Link
          href="mailto:hackathon@bjbraila.ro"
          className="transition-all hover:brightness-125 flex flex-col gap-2 items-center justify-center w-1/3"
        >
          <FaEnvelope className="text-sol-green h-9 w-9" /> E-Mail
        </Link>
      </div>
    </section>
  );
};
