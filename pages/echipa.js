import Head from 'next/head'
import Navbar from "components/navbar";
import Footer from "@/components/footer";
import styles from './echipa.module.css';
import Image from 'next/image';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Team() {
    const teamMembers = [
        {
          name: 'Mario Vlaviano',
          role: 'Organizator',
          image: 'https://i.imgur.com/iS27rva.jpg',
          social: {
            linkedin: 'https://www.linkedin.com/in/mariovlaviano/',
            github: 'https://github.com/moryokav',
          },
        },
        {
          name: 'Andrei Iașar',
          role: 'Organizator',
          image: 'https://i.imgur.com/GfcnEd8.jpg',
          social: {
            linkedin: 'https://www.linkedin.com/in/andreiiasar',
            github: 'https://github.com/andreiusq',
          },
        },
        {
          name: 'Ștefan Ghețu',
          role: 'Organizator',
          image: 'https://i.imgur.com/iS27rva.jpg',
          social: {
            linkedin: 'https://www.linkedin.com/in/stefanghetu',
            github: 'https://github.com/ursus161',
          },
        },
      ];

      const judges = [
        {
          name: 'Mario Vlaviano',
          role: 'Rector @ Politehnică Timișoara',
          image: 'https://cngmm.ro/velocity/static/media/vlaviano.75729c3d103b167d9497.jpg',
          social: {
            linkedin: 'https://www.linkedin.com/in/mariovlaviano/',
            github: 'https://github.com/moryokav',
          },
        },
        {
          name: 'Andrei Iașar',
          role: 'Rector @ Politehnică Timișoara',
          image: 'https://i.imgur.com/GfcnEd8.jpg',
          social: {
            linkedin: 'https://www.linkedin.com/in/andreiiasar',
            github: 'https://github.com/andreiusq',
          },
        },
        {
          name: 'Ștefan Ghețu',
          role: 'Rector @ Politehnică Timișoara',
          image: '/john-doe.jpg',
          social: {
            linkedin: 'https://www.linkedin.com/in/stefanghetu',
            github: 'https://github.com/ursus161',
          },
        },
        {
          name: 'Mario Vlaviano',
          role: 'Rector @ Politehnică Timișoara',
          image: 'https://cngmm.ro/velocity/static/media/vlaviano.75729c3d103b167d9497.jpg',
          social: {
            linkedin: 'https://www.linkedin.com/in/mariovlaviano/',
            github: 'https://github.com/moryokav',
          },
        },
        {
          name: 'Mario Vlaviano',
          role: 'Rector @ Politehnică Timișoara',
          image: 'https://cngmm.ro/velocity/static/media/vlaviano.75729c3d103b167d9497.jpg',
          social: {
            linkedin: 'https://www.linkedin.com/in/mariovlaviano/',
            github: 'https://github.com/moryokav',
          },
        },
        {
          name: 'Mario Vlaviano',
          role: 'Rector @ Politehnică Timișoara',
          image: 'https://cngmm.ro/velocity/static/media/vlaviano.75729c3d103b167d9497.jpg',
          social: {
            linkedin: 'https://www.linkedin.com/in/mariovlaviano/',
            github: 'https://github.com/moryokav',
          },
        },
        {
          name: 'Mario Vlaviano',
          role: 'Rector @ Politehnică Timișoara',
          image: 'https://cngmm.ro/velocity/static/media/vlaviano.75729c3d103b167d9497.jpg',
          social: {
            linkedin: 'https://www.linkedin.com/in/mariovlaviano/',
            github: 'https://github.com/moryokav',
          },
        },
      ];



  return (
    <>
      <Head>
        <title>Organizatori</title>
      </Head>
      <Navbar></Navbar>
        <section className="mx-auto mb-10 max-w-4xl px-4" data-aos="zoom-out-up">
            <h1 className="mb-6 text-4xl font-normal tracking-tight text-sol-grey-accent text-center">Despre ce este vorba?</h1>
            <p className="tracking-wide text-center">
            Donec ultricies mi at metus sollicitudin pellentesque. Sed in dui
            neque. Vestibulum ut commodo sapien. Suspendisse ut mi orci.
            Pellentesque et nisi quis neque faucibus viverra. Pellentesque
            suscipit bibendum condimentum. Integer blandit justo a elit viverra,
            eget feugiat tortor congue. Vestibulum ipsum leo, cursus eget
            venenatis eu, venenatis eu nulla. Cras dictum tincidunt lectus
            volutpat ultricies. Duis lobortis mauris fringilla hendrerit
            commodo. Duis ut sodales justo, ut auctor orci. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Aliquam ac dictum
            metus. Vivamus leo lacus, laoreet sed laoreet vitae, condimentum
            iaculis libero.
          </p>
        </section>
      <section
          className="mx-auto mb-10 max-w-4xl px-4"
          data-aos="zoom-out-up"
        >
      <h1 className="mb-6 text-4xl font-normal tracking-tight text-sol-grey-accent text-center">Echipa de organizatori</h1>
      <ul className={styles.teamList}>
        {teamMembers.map((member, index) => (
          <li key={index} className={`${styles.teamMember} teamMember`}>
        <Image className="rounded-full" src={member.image} alt={member.name} objectFit="cover" width="200" height="200" />
        <div>
            <h2 className="teamMemberName text-center">{member.name}</h2>
            <p className="text-center">{member.role}</p>
        </div>
        <div className="social flex items-center">
          <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-500 hover:text-gray-900">
          <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-500 hover:text-gray-900">
          <FontAwesomeIcon icon={faGithub} />
          </a>
          </div>
        </li>
    ))}
    </ul>
      </section>
        <section
            className="mx-auto mb-10 max-w-4xl px-4"
            data-aos="zoom-out-up"
        >
            <h1 className="mb-6 text-4xl font-normal tracking-tight text-sol-grey-accent text-center">Juriul</h1>
            <p className="tracking-wide text-center"> Donec ultricies mi at metus sollicitudin pellentesque. Sed in dui neque.</p> <br></br>
            <ul className={styles.teamList}>
                {judges.map((member, index) => (
                    <li key={index} className={styles.teamMember}>
                    <br></br>
                    <Image className="rounded-full" src={member.image} alt={member.name} objectFit="cover" width="200" height="200" />
                    <div>
                        <h2 className="text-center">{member.name}</h2>
                        <p className="text-center">{member.role}</p>
                    </div>
                    </li>
                ))}
            </ul>
        </section>

      <Footer></Footer>
    </>
  )
}