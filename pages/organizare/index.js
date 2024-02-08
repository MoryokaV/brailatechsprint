import Navbar from "components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { NextSeo } from "next-seo";
import { partners } from "@/data/partners";

export default function Team() {
  const teamMembers = [
    {
      name: "Corina Ciuraru",
      role: "Șef serviciu Biblioteca Județeană Brăila",
      image: "/team/corina ciuraru.jpg",
      social: {
        facebook: "https://www.facebook.com/corina.ciuraru",
      },
    },
    {
      name: "Mario Vlaviano",
      role: "Project Manager",
      image: "/team/mario vlaviano 3.png",
      social: {
        instagram: "https://www.instagram.com/mario.vlv/",
        facebook: "https://www.facebook.com/mario.vlaviano.75",
        github: "https://github.com/moryokav",
      },
    },
    {
      name: "Andrei Iașar",
      role: "Președinte CJE Brăila",
      image: "/team/andrei iasar.jpeg",
      social: {
        instagram: "https://www.instagram.com/andrei.isr/",
        facebook: "https://www.facebook.com/andrei.isr",
        github: "https://github.com/andreiusq",
      },
    },
    {
      name: "Ștefan Ghețu",
      role: "Lider voluntari",
      image: "/team/stefan ghetu.jpg",
      social: {
        instagram: "https://www.instagram.com/1grizz5/",
      },
    },
    {
      name: "Briana Tîrîlă",
      role: "Designer",
      image: "/team/briana.jpg",
      social: {
        instagram: "https://www.instagram.com/briana.tirila/",
        facebook: "https://www.facebook.com/briana.maria.tirila18",
      },
    },
    {
      name: "Ștefan Oprea",
      role: "Social Media",
      image: "/team/oprea.jpg",
      social: {
        instagram: "https://www.instagram.com/stefanopreaa/",
      },
    },
  ];

  const judges = [
    {
      name: "Dana Cireașă",
      role: "Președinte CONAF Brăila",
      image: "/team/dana.jpeg",
    },
    {
      name: "Florin Dediu",
      role: "CEO ePro Design",
      image: "/team/dediu.jpg",
    },
    {
      name: "Teodor Ciuraru",
      role: "Senior Software Developer",
      image: "/team/teodor ciuraru.jpg",
    },
    {
      name: "Mario Vlaviano",
      role: "Mid Full-Stack Developer",
      image: "/team/mario vlaviano 2.jpg",
    },
  ];

  return (
    <>
      <NextSeo
        title="Braila Tech Sprint - Organizare"
        description="Noi suntem echipa convinsă că Brăila trebuie să aibă propriul
          hackathon, că, pe lângă atâtea inițiative locale de robotică,
          informatică etc, avem nevoie de cât mai multe competiții care să
          demonstreze că tinerii noștri sunt bine pregătiți pentru Era digitală."
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
          "organizatori hackathon",
          "braila organizatori",
          "hackathon braila organizatori",
          "hackathon braila tech sprint organizatori",
          "hackathon braila tech sprint hackathon organizatori",
          "hackathon braila tech sprint hackathon 2021 organizatori",
          "hackathon braila tech sprint 2021 organizatori",
          "hackathon braila 2021 organizatori",
          "hackathon braila tech sprint hackathon 2021 organizatori",
          "razvan solea",
          "solea",
          "daniel marinescu",
          "marinescu",
          "marinescu daniel",
          "ciuraru",
          "bjpi hackathon",
          "biblioteca judeteana hackathon",
          "mario vlaviano",
          "vlaviano mario",
          "andrei iasar",
          "iasar andrei",
          "concurs braila",
          "concurs programare braila",
          "concurs programare",
          "programare braila",
        ]}
      />
      <Navbar></Navbar>
      <section
        className="mx-auto mt-14 mb-20 w-full md:max-w-4xl px-4"
        data-aos="fade-down"
      >
        <h1 className="mb-2 text-4xl font-normal tracking-tight text-sol-grey-accent text-center">
          Cine suntem noi?
        </h1>
        <div className="mx-auto mb-6 lg:mb-8 w-16 h-1 bg-sol-yellow"></div>
        <p className="tracking-wide text-center">
          Noi suntem echipa convinsă că Brăila trebuie să aibă propriul
          hackathon, că, pe lângă atâtea inițiative locale de robotică,
          informatică etc, avem nevoie de cât mai multe competiții care să
          demonstreze că tinerii noștri sunt bine pregătiți pentru Era digitală.
          Ne-am sfătuit, am visat, am planificat, am muncit și, acum, anunțăm cu
          entuziasm primul hackathon local, Brăila Tech Sprint 2024. Sperăm să
          scoatem la iveală tot ceea ce este mai bun în materie de programare în
          Brăila și să inspirăm tinerii să urmeze acest drum în viață. Energia
          noastră nu ar fi fost suficientă, dacă nu am fi avut alături de noi
          Biblioteca Județeană ”Panait Istrati” Brăila, Consiliul Județean
          Brăila, Inspectoratul Școlar Județean, CONAF România, dar și diverși
          sponsori. Oricine dorește să susțină performanța tinerilor
          programatori brăileni, este invitat să ni se alăture contactându-ne la
          adresa de email. Fiecare mână întinsă este de ajutor, evenimentul
          Braila Tech Sprint va deveni mai bun și vom aprecia acest lucru.
        </p>
        <br></br>
        <p className="flex justify-center font-semibold italic mb-4 text-sol-grey-accent">
          Mulțumim sponsorilor și partenerilor noștri
        </p>
        <div className="flex flex-row flex-wrap items-center justify-center gap-x-6 gap-y-4">
          {partners.map((partner, index) => {
            return (
              <Image
                src={partner.img}
                alt={partner.name}
                key={index}
                className={`saturate-50 ${
                  partner.invert && "invert"
                } opacity-60 w-auto max-h-20`}
              />
            );
          })}
        </div>
      </section>

      <section
        className="mx-auto mb-20 w-full md:max-w-4xl px-4"
        data-aos="fade-down"
      >
        <h1 className="mb-2 text-4xl font-normal tracking-tight text-sol-grey-accent text-center">
          Juriul
        </h1>
        <div className="mx-auto mb-6 lg:mb-8 w-16 h-1 bg-sol-yellow"></div>
        <p className="tracking-wide text-center mb-10">
          Brăila Tech Sprint este despre programare, excelență în educație,
          antreprenoriat si comunitate. De aceea i-am ales pe cei mai buni să
          aprecieze munca și ideile pe care tu și echipa ta le veți aduce în
          competiție. Profesori, programatori, antreprenori sunt aici să înveți
          de la ei și să te inspire. Succes tuturor!
        </p>
        <ul className="grid grid-cols-2 list-none mx-auto justify-center md:grid-cols-4 gap-y-10 gap-x-4">
          {judges.map((member, index) => (
            <li key={index} className="flex flex-col items-center">
              <Image
                className="mb-4 rounded-full border-sol-bright-blue border-2"
                src={member.image}
                alt={member.name}
                style={{ objectFit: "cover" }}
                width="200"
                height="200"
              />
              <div>
                <h2 className="font-semibold text-2xl text-center">
                  {member.name}
                </h2>
                <p className="text-center">{member.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="mx-auto mb-10 w-full md:max-w-5xl px-4"
        data-aos="fade-down"
      >
        <h1 className="mb-3 text-4xl font-normal tracking-tight text-sol-grey-accent text-center">
          Echipa organizatoare
        </h1>
        <div className="mx-auto mb-8 lg:mb-8 w-16 h-1 bg-sol-yellow"></div>
        <ul className="grid grid-cols-2 list-none mx-auto justify-center md:grid-cols-3 flex-wrap gap-x-0 gap-y-10 max-md:gap-x-4">
          {teamMembers.map((member, index) => (
            <li key={index} className="flex flex-col items-center">
              <Image
                className="mb-4 rounded-full border-sol-yellow border-2"
                src={member.image}
                alt={member.name}
                width="200"
                height="200"
                style={{ objectFit: "cover" }}
              />
              <h2 className="font-semibold text-2xl text-center">
                {member.name}
              </h2>
              <p className="text-center mb-4">{member.role}</p>
              <div className="flex items-center">
                {member.social.instagram !== undefined && (
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2 text-gray-500 hover:text-gray-300"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                )}

                {member.social.facebook !== undefined && (
                  <a
                    href={member.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2 text-gray-500 hover:text-gray-300"
                  >
                    <FaFacebook className="w-5 h-5" />
                  </a>
                )}

                {member.social.github !== undefined && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2 text-gray-500 hover:text-gray-300"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <Footer></Footer>
    </>
  );
}
