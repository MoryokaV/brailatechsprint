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
      role: "Manager IT BJPI ??",
      image:
        "https://scontent.fotp3-3.fna.fbcdn.net/v/t1.6435-9/54432253_2572620466099135_8562838330524303360_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=ahDGg7VQ184AX8wBgSA&_nc_ht=scontent.fotp3-3.fna&oh=00_AfBazXPZNggWQWt0dAvAB04n-ubw33xTsIleSuTi1faqeQ&oe=64205008",
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
      image: "https://archive.andreiusq.dev/jsclub/img/ghetu.png",
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
        className="mx-auto mt-14 mb-10 max-w-4xl px-4"
        data-aos="zoom-out-up"
      >
        <h1 className="mb-6 text-4xl font-normal tracking-tight text-sol-grey-accent text-center">
          Cine suntem noi?
        </h1>
        <p className="tracking-wide text-center">
          Donec ultricies mi at metus sollicitudin pellentesque. Sed in dui
          neque. Vestibulum ut commodo sapien. Suspendisse ut mi orci.
          Pellentesque et nisi quis neque faucibus viverra. Pellentesque
          suscipit bibendum condimentum. Integer blandit justo a elit viverra,
          eget feugiat tortor congue. Vestibulum ipsum leo, cursus eget
          venenatis eu, venenatis eu nulla. Cras dictum tincidunt lectus
          volutpat ultricies. Duis lobortis mauris fringilla hendrerit commodo.
          Duis ut sodales justo, ut auctor orci. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Aliquam ac dictum metus. Vivamus leo
          lacus, laoreet sed laoreet vitae, condimentum iaculis libero.
        </p>
      </section>
      <section className="mx-auto mb-20 max-w-4xl px-4" data-aos="zoom-out-up">
        <h1 className="mb-8 text-4xl font-normal tracking-tight text-sol-grey-accent text-center">
          Echipa organizatoare
        </h1>
        <ul className="flex list-none mx-auto justify-center flex-wrap max-w-4xl gap-10">
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
      <section className="mx-auto mb-10 max-w-4xl px-4" data-aos="zoom-out-up">
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
