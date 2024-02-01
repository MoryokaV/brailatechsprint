import Image from "next/image";

import raluca from "public/feedback/raluca.jpeg";
import eva from "public/feedback/eva.jpeg";
import bacalu from "public/feedback/bacalu.jpg";
import { FaQuestion } from "react-icons/fa";

const Reviews = () => {
  return (
    <section
      className="mx-auto mb-16 w-full md:max-w-4xl px-4 grid sm:grid-cols-2 gap-6"
      data-aos="fade-down"
    >
      <div className="">
        <div className="relative h-20 mb-8 w-full">
          <FaQuestion className="absolute z-20 fill-sol-blue-accent brightness-125 h-20 w-20 left-0 sm:-translate-x-1/2 sm:left-1/2" />
          <FaQuestion className="absolute z-10 fill-sol-blue-accent h-20 w-20 rotate-[30deg] left-10 sm:-translate-x-1 sm:left-1/2" />
        </div>
        <h3 className="text-2xl font-medium text-sol-grey-accent">
          Părerile foștilor concurenți
        </h3>
        <div className="mt-1 mb-4 h-1 w-16 bg-sol-yellow"></div>
        <p>
          Organizatorii BTS 2024 pun pe primul loc satisfacția concurenților și
          dorința acestora de a reveni în competiție și la edițiile viitoare. De
          aceea, feedback-ul reprezintă un element esențial și benefic pentru
          îmbunătățirea continuă a evenimentului. Avem câteva motive foarte bune
          pentru a colecta impresiile participanților: Vom ști în ce măsură
          concurenții și-au îmbunătățit competențele IT și antreprenoriale.
          Înțelegem cum să ajustăm totul astfel încât să oferim un eveniment de
          calitate. Dorim să construim o comunitate interconectată, pentru că
          acest hackathon este și un eveniment social pe parcursul căruia
          concurenții se cunosc și relaționează între ei. Cultivăm atmosfera
          pozitivă prin recunoașterea eforturilor și reușitelor echipei de
          organizare, dar și pe cele ale concurenților, motivând astfel
          participarea la evenimentele viitoare. În concluzie, spuneți-vă
          părerea, fiecare opinie este utilă și astfel Brăila Tech Sprint devine
          un hackathon mai performant și mai atractiv!
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <FeedbackItem name="Raluca Toma" img={raluca} end={true}>
          O experiență remarcabilă ce te motivează să depășești barierele
          confortului și să îți valorifici atât abilitățile tehnice, cât și cele
          sociale, sub presiunea timpului.
        </FeedbackItem>
        <FeedbackItem name="Eva Pacea" img={eva}>
          Momentul în care vedeți că un proiect realizat de voi într-un timp
          atat de scurt dă roade, satisfactia oferita întrece orice sentiment.
        </FeedbackItem>
        <FeedbackItem name="Alex Bacalu" img={bacalu} end={true}>
          Este o experiență provocatoare, dar care aduce satisfacție și noi
          modalități de învățare. În plus, recomand acest concurs tuturor celor
          pasionați de informatică și nu numai.
        </FeedbackItem>
      </div>
    </section>
  );
};

const FeedbackItem = ({ name, img, end, children }) => {
  return (
    <article
      className={`w-5/6 bg-sol-blue-accent px-8 py-3 rounded-tl-xl rounded-br-xl transition-all hover:shadow-lg hover:-translate-y-2 duration-300 ${
        end && "self-end"
      }`}
    >
      <div className="flex items-center gap-2 mb-3">
        <Image
          src={img}
          className="rounded-full h-[2.7rem] w-[2.7rem]"
          alt={name}
        />
        <p className="font-medium">{name}</p>
      </div>
      <p className="italic">&quot;{children}&quot;</p>
    </article>
  );
};

export default Reviews;
