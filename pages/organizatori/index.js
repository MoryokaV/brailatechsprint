import Head from "next/head";
import Navbar from "components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import {
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Team() {
  const teamMembers = [
    {
      name: "Corina Ciuraru",
      role: "Șef serviciu Biblioteca Județeană Brăila",
      image:
        "https://scontent.fotp3-3.fna.fbcdn.net/v/t1.6435-9/45400885_2361450630549454_5961475363455369216_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGJwtcs_FSZ31XebU5Vi-pWCYWwB2CIuq4JhbAHYIi6rh_OUg2YCj_DlHKePA9kys77D9s8M-XmPU6JLGNpMelz&_nc_ohc=KzgRpDqeRIUAX9C6cWl&_nc_ht=scontent.fotp3-3.fna&oh=00_AfAb4Yx04lWGDVnLXSEheODOX5aqnJNTKd7-8FBtAMTPdw&oe=64253184",
      social: {
        github: "https://www.facebook.com/corina.ciuraru",
      },
    },
    {
      name: "Mario Vlaviano",
      role: "Mobile & Web dev",
      image: "https://i.imgur.com/iS27rva.jpg",
      social: {
        instagram: "https://www.instagram.com/mario.vlv/",
        github: "https://github.com/moryokav",
      },
    },
    {
      name: "Andrei Iașar",
      role: "Backend dev",
      image: "https://i.imgur.com/GfcnEd8.jpg",
      social: {
        instagram: "https://www.instagram.com/andrei.isr/",
        github: "https://github.com/andreiusq",
      },
    },
    {
      name: "Ștefan Ghețu",
      role: "Junior dev",
      image:
        "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/333593649_1076011136449124_9108875062245308493_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=IU3gaEuw-xIAX-pScsP&_nc_ht=scontent.fotp3-3.fna&oh=00_AfDTSA0DaXCJLsW4pfvSjpn1cuo-LmK2I210fCDZKOAVSA&oe=63FFBD3C",
      social: {
        instagram: "https://www.instagram.com/1grizz5/",
        github: "https://github.com/ursus161",
      },
    },
  ];

  const judges = [
    {
      name: "Aura Ion",
      role: "Inspector judetean informatica",
      image:
        "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/298170106_6045492655478150_268128261320514689_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=RgrFSqcX3KAAX9OtDi7&_nc_ht=scontent.fotp3-3.fna&oh=00_AfCTIXObaWHWdriWM7SdRTnAF8BmTz85en7LVIlH5y8CLg&oe=63FCDFB8",
    },
    {
      name: "Adrian Popescu",
      role: "Rector @ Politehnică Timișoara",
    },
    {
      name: "Marius Popescu",
      role: "Rector @ Politehnică Timișoara",
    },
    {
      name: "Andreea Vasilescu",
      role: "Rector @ Politehnică Timișoara",
    },
    {
      name: "Mario Vlaviano",
      role: "Elev",
      image:
        "https://cngmm.ro/velocity/static/media/vlaviano.75729c3d103b167d9497.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>Organizatori</title>
      </Head>
      <Navbar></Navbar>
      <section
        className="mx-auto mt-14 mb-10 w-full md:max-w-4xl px-4"
        data-aos="fade-down"
      >
        <h1 className="mb-6 text-4xl font-normal tracking-tight text-sol-grey-accent text-center">
          Cine suntem noi?
        </h1>
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
          email. Fiecare mână întinsă este de ajutor, evenimentul BTS va deveni
          mai bun și vom aprecia acest lucru.
        </p>
      </section>
      <section
        className="mx-auto mb-20 w-full md:max-w-4xl px-4"
        data-aos="fade-down"
      >
        <h1 className="mb-8 text-4xl font-normal tracking-tight text-sol-grey-accent text-center">
          Echipa organizatoare
        </h1>
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
      <section
        className="mx-auto mb-10 w-full md:max-w-4xl px-4"
        data-aos="fade-down"
      >
        <h1 className="mb-4 text-4xl font-normal tracking-tight text-sol-grey-accent text-center">
          Juriul
        </h1>
        <p className="tracking-wide text-center mb-10">
          Donec ultricies mi at metus sollicitudin pellentesque. Sed in dui
          neque.
        </p>
        <ul className="flex list-none mx-auto justify-center flex-wrap max-w-4xl gap-8">
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

      <Footer></Footer>
    </>
  );
}
