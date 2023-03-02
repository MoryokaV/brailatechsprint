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
      image: "https://i.imgur.com/GHYpNFG.jpeg",
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
      image:
        "https://media.licdn.com/dms/image/C4E03AQGjdVSQ5wx8pw/profile-displayphoto-shrink_800_800/0/1544066474498?e=2147483647&v=beta&t=AAMyfB1_ajTRbBJT-esACw6FAIh7xudq-buBuZiXAVo",
    },
    {
      name: "dr. Răzvan Șolea",
      role: "prodecan UGAL AC @ Galați",
      image:
        "https://i1.rgstatic.net/ii/profile.image/272667056013313-1442020300098_Q512/R-Solea.jpg",
    },
    {
      name: "Daniel Marinescu",
      role: "fondator IME România",
      image:
        "https://media.licdn.com/dms/image/C5603AQHGndFRN2Ahdg/profile-displayphoto-shrink_100_100/0/1517482037901?e=1683158400&v=beta&t=vUSg45ia9II3_tbWlkP1xjdN9sh596OJHW8DEpnl6yA",
    },
    {
      name: "Teodor Claudiu Ciuraru",
      role: "Senior React Native Developer",
      image:
        "https://scontent.fclj1-2.fna.fbcdn.net/v/t1.6435-9/60069044_2730334753648400_7028177963690491904_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGbrJxMkx9nT1nZDqBdhvBsdqQI26nQ9212pAjbqdD3bSxskR9dX7tIiMKQ-SlSJnIR3Efs6XYr45omwASJau0L&_nc_ohc=J49rZ7ur5ekAX8FTtBF&_nc_ht=scontent.fclj1-2.fna&oh=00_AfBNeMNqdrKcMgdkqxValgrdGHdWiTYMW_1ehvXL7f2QfQ&oe=64285B3D",
    },
    {
      name: "Mario Vlaviano",
      role: "Middle Flutter Developer - Elev",
      image:
        "https://scontent.fclj1-2.fna.fbcdn.net/v/t39.30808-6/316830997_1321260891994877_8570911359093303250_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHgL179u2ZLe_jfMk-CCLAsG4vm2IFNoIUbi-bYgU2ghWU5vT-I7D5YctEENM0q4SqPPF7l-PFb1HRijGISdgF0&_nc_ohc=9wGu9o9BurMAX9-5Fi4&_nc_ht=scontent.fclj1-2.fna&oh=00_AfD6rBW2GcCbXdfzBCRxT4H8Jk3BtxJOjSyoSrNwSpDiVw&oe=6405D263",
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
        className="mx-auto mb-20 w-full md:max-w-4xl px-4"
        data-aos="fade-down"
      >
        <h1 className="mb-4 text-4xl font-normal tracking-tight text-sol-grey-accent text-center">
          Juriul
        </h1>
        <p className="tracking-wide text-center mb-10">
          BTS este despre programare, excelență în educație, antreprenoriat si
          comunitate. De aceea i-am ales pe cei mai buni să aprecieze munca și
          ideile pe care tu și echipa ta le veți aduce în competiție. Profesori,
          programatori, antreprenori sunt aici să înveți de la ei și să te
          inspire. Succes tuturor!
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
        <h1 className="mb-8 text-4xl font-normal tracking-tight text-sol-grey-accent text-center">
          Sponsori
        </h1>
        <div className="flex mx-auto justify-center flex-wrap max-w-4xl gap-10">
          <Image
            src="http://www.ime.ro/templates/rt_camber/images/logo/dark/logo.png"
            width="150"
            height="150"
            alt="IME Romania logo"
          />
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}
