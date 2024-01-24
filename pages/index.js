import Navbar from "components/navbar";
import Footer from "@/components/footer";
import Terminal from "@/components/terminal";
import Categories from "@/components/categories";
import { NextSeo } from "next-seo";
import Image from "next/image";

import logo from "public/bts.png";
import wave1 from "public/wave1.svg";
import wave2 from "public/wave2.svg";

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
        <Masthead></Masthead>
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
            inițiative. Va fi greu, dar va fi frumos! Citește regulamentul și
            apoi înscrie-te!
            <br></br>
            <br></br>
            <span className="opacity-75 italic">— Echipa de organizare</span>
          </p>
        </section>
        {
          <section
            className="mx-auto mb-10 w-full md:max-w-4xl px-4"
            data-aos="fade-down"
          >
            <h3 className="text-2xl font-medium text-sol-grey-accent">
              Ce proiecte sunt eligibile?
            </h3>
            <div className="mt-1 mb-4 h-1 w-16 bg-sol-yellow"></div>
            <Categories />
          </section>
        }
      </main>
      <Footer></Footer>
    </>
  );
}

const Masthead = () => {
  return (
    <div className="min-h-[95vh] w-full flex flex-col justify-between bg-[#002B36] mb-8">
      <div
        data-aos="zoom-in"
        className="flex flex-col items-center justify-center p-8 mb-8"
      >
        <div className="max-w-6xl flex flex-col lg:flex-row justify-center items-center gap-x-16 gap-y-10 w-full mt-4 sm:mt-16 mb-14 sm:mb-20 mx-auto">
          <div className="max-w-lg">
            <Image
              src={logo}
              alt="BTS logo"
              width="240"
              style={{ marginBottom: "32px" }}
            />
            <h1 className="mb-2 text-4xl font-normal tracking-tight text-sol-grey-accent">
              Brăila <span className="font-semibold">Tech</span>
              <span className="text-sol-yellow font-semibold"> Sprint</span>
            </h1>
            <p>
              Hackathon Ediția II, 16-17 martie 2024, Palatul Tineretului Brăila
            </p>
          </div>
          <Terminal></Terminal>
        </div>

        <button
          className="uppercase font-medium tracking-wider py-2 px-6 bg-sol-yellow text-lg text-black rounded-tl-lg rounded-br-lg hover:shadow-lg hover:bg-sol-yellow-accent hover:-translate-y-1 transition duration-200"
          onClick={() => window.open("#", "_blank")}
        >
          Înscrie-te
        </button>
      </div>
      <div className="w-full h-40 relative">
        <Image
          src={wave1}
          alt="wave svg"
          style={{ width: "100%", height: "auto" }}
          className="absolute z-20 bottom-0"
        />
        <Image
          src={wave2}
          alt="wave svg"
          style={{ width: "100%", height: "auto" }}
          className="absolute z-10 bottom-0 scale-x-100"
        />
      </div>
    </div>
  );
};
