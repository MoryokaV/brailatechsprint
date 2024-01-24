import Navbar from "components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import {
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextSeo } from "next-seo";

export default function Team() {
  const teamMembers = [
    {
      name: "Corina Ciuraru",
      role: "Șef serviciu Biblioteca Județeană Brăila",
      image: "/corina ciuraru.jpg",
      social: {
        github: "https://www.facebook.com/corina.ciuraru",
      },
    },
    {
      name: "Mario Vlaviano",
      role: "Mobile & Web dev",
      image: "/mario vlaviano 2.webp",
      social: {
        instagram: "https://www.instagram.com/mario.vlv/",
        github: "https://github.com/moryokav",
      },
    },
    {
      name: "Andrei Iașar",
      role: "Backend dev",
      image: "/andrei iasar.jpeg",
      social: {
        instagram: "https://www.instagram.com/andrei.isr/",
        github: "https://github.com/andreiusq",
      },
    },
    {
      name: "Ștefan Ghețu",
      role: "Marketing",
      image: "/stefan ghetu.jpeg",
      social: {
        instagram: "https://www.instagram.com/1grizz5/",
        github: "https://github.com/ursus161",
      },
    },
  ];

  const judges = [
    {
      name: "Prof. Aurelia Ion",
      role: "Inspector şcolar informatică",
      image: "/aura ion.jpg",
    },
    {
      name: "conf. dr. Răzvan Șolea",
      role: "prodecan UGAL AC @ Galați",
      image: "/razvan solea.jpg",
    },
    {
      name: "Daniel Marinescu",
      role: "fondator IME România",
      image: "/daniel marinescu.jpeg",
    },
    {
      name: "Teodor Claudiu Ciuraru",
      role: "Senior React Native Developer",
      image: "/teodor ciuraru.jpg",
    },
    {
      name: "Mario Vlaviano",
      role: "Middle Flutter Developer - Elev",
      image: "/mario vlaviano 1.jpeg",
    },
  ];

  return (
    <>
      <NextSeo
        title="Braila Tech Sprint - Organizare"
        description="Organizatorii hackathonului organizat in Braila, Romania"
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
          entuziasm primul hackathon local, Brăila Tech Sprint 2023. Sperăm să
          scoatem la iveală tot ceea ce este mai bun în materie de programare în
          Brăila și să inspirăm tinerii să urmeze acest drum în viață. Energia
          noastră nu ar fi fost suficientă, dacă nu am fi avut alături de noi
          Biblioteca Județeană ”Panait Istrati” Brăila, Consiliul Județean
          Brăila, Inspectoratul Școlar Județean, dar și diverși sponsori.
          Oricine dorește să susțină performanța tinerilor programatori
          brăileni, este invitat să ni se alăture contactându-ne la adresa de
          email. Fiecare mână întinsă este de ajutor, evenimentul Braila Tech
          Sprint va deveni mai bun și vom aprecia acest lucru.
        </p>
        <br></br>
        <p className="flex justify-center font-semibold italic mb-4 text-sol-grey-accent">
          Mulțumim sponsorilor noștri
        </p>
        <div className="flex mx-auto justify-center flex-wrap max-w-4xl gap-x-6 gap-y-3">
          <Image
            className="h-auto"
            src="http://www.ime.ro/templates/rt_camber/images/logo/dark/logo.png"
            width="120"
            height="0"
            alt="IME Romania logo"
          />
          <Image
            className="h-auto"
            src="https://i.imgur.com/xKeCwb3.png"
            width="260"
            height="0"
            alt="Pacronex Braila"
            unoptimized
          />
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
          Braila Tech Sprint este despre programare, excelență în educație,
          antreprenoriat si comunitate. De aceea i-am ales pe cei mai buni să
          aprecieze munca și ideile pe care tu și echipa ta le veți aduce în
          competiție. Profesori, programatori, antreprenori sunt aici să înveți
          de la ei și să te inspire. Succes tuturor!
        </p>
        <ul className="flex list-none mx-auto justify-center flex-wrap max-w-4xl gap-10">
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
        className="mx-auto mb-10 w-full md:max-w-4xl px-4"
        data-aos="fade-down"
      >
        <h1 className="mb-3 text-4xl font-normal tracking-tight text-sol-grey-accent text-center">
          Echipa organizatoare
        </h1>
        <div className="mx-auto mb-8 lg:mb-8 w-16 h-1 bg-sol-yellow"></div>
        <ul className="flex list-none mx-auto justify-center flex-wrap gap-10">
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
                {index != 0 && (
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-5 h-5 mx-2 text-gray-500 hover:text-gray-300"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                )}
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-5 h-5 mx-2 text-gray-500 hover:text-gray-300"
                >
                  <FontAwesomeIcon icon={index == 0 ? faFacebook : faGithub} />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <Footer></Footer>
    </>
  );
}
