import Image from "next/image";

import raluca from "public/feedback/raluca.jpeg";
import eva from "public/feedback/eva.jpeg";
import mihai from "public/feedback/mihai.jpg";
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
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
          Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
          officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
          sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
          consectetur et est culpa et culpa duis.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <FeedbackItem name="Raluca Toma" img={raluca} end={true}>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </FeedbackItem>
        <FeedbackItem name="Eva Pacea" img={eva}>
          Momentul în care vedeți că un proiect realizat de voi într-un timp
          atat de scurt dă roade, satisfactia oferita întrece orice sentiment.
        </FeedbackItem>
        <FeedbackItem name="Mihai Scarlet" img={mihai} end={true}>
          Mi-am depășit limitele și am învățat lucruri noi, contracronometru.
          Îmi doresc ca un număr cat mai mare de elevi să se dezvolte și să își
          cunoască adevaratul potențial.
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
