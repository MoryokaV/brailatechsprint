import { useState } from "react";

const FAQ = () => {
  return (
    <section
      className="mx-auto mb-16 w-full md:max-w-4xl px-4"
      data-aos="fade-down"
      data-aos-delay="300"
    >
      <h3 className="text-2xl font-medium text-sol-grey-accent">
        Întrebări frecvente
      </h3>
      <div className="mt-1 mb-8 h-1 w-16 bg-sol-yellow"></div>
      <Accordion title="Cine poate participa?">
        Concursul se adresează elevilor și tinerilor pasionați de programare, cu
        vârste cuprinse între 13 și 20 ani, care studiază în Brăila și în
        județele limitrofe acestuia.
      </Accordion>
      <Accordion title="Cum te poți înscrie? Câți membri poate avea o echipă?">
        Înscrierile se realizează individual sau în numele echipei (alcătuită
        din maxim 3 persoane), completând formularul disponibil pe site.
      </Accordion>
      <Accordion title="Ce beneficii vei avea pe tot parcurusul participării?">
        În timpul evenimentului, pe langa asigurarea gustarilor si bauturilor,
        vei avea oportunitatea de a socializa cu alte persoane din afara echipei
        tale cu aceeasi viziune si mentalitate asupra pasiunilor tale.
      </Accordion>
      <Accordion title="Cum vor fi acordate premiile și în ce constau acestea?">
        La finalul celor 24 de ore de coding, vei avea ocazia să îți prezinți
        proiectele în fața unui juriu de experți. Primii 3 cei mai creativi vor
        pleca acasă, atât cu experiența unei aventuri tehnologice, cât și cu
        premii fabuloase, anunțate în momentele următoare!
      </Accordion>
      <Accordion title="Ce limbaje de programare și tehnologii sunt acceptate la hackathon?">
        În cadrul competiției Brăila Tech Sprint este permisă folosirea oricărui
        limbaj de programare, participanții pot alege limbajele de programare
        potrivite pentru abilitățile și experiența lor.
      </Accordion>
      <Accordion title="Ce se întâmplă dacă vreau sa plec, temporar, în timpul hackathonului?">
        În cursul hackathonul este interzisă părăsirea proximității de
        desfășurare a competiției fără a fi însoțit de un membru din staff.
      </Accordion>
    </section>
  );
};

const Accordion = ({ title, children }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="w-full border-t border-t-sol-grey/30 px-0 py-3">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex items-center justify-between w-full py-2"
      >
        <p className="font-medium text-lg text-left">{title}</p>
        <svg
          className={`${
            accordionOpen ? "fill-sol-grey" : "fill-sol-bright-blue"
          } shrink-0 ml-8`}
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden">{children}</p>
      </div>
    </div>
  );
};

export default FAQ;
