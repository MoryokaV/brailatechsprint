import { FaMobileAlt, FaWindows, FaCode, FaTerminal } from "react-icons/fa";

const Categories = () => {
  const items = [
    {
      name: "Mobile",
      color: "bg-sol-brred",
      icon: <FaMobileAlt className="text-white w-5 h-5" />,
      description:
        "Utilizarea telefoanelor mobile a crescut exponențial în ultimii ani. Impresionează-ne prin UI/UX deosebit și intră pe piața de mobile dev.",
    },
    {
      name: "Desktop",
      color: "bg-sol-bright-blue",
      icon: <FaWindows className="text-white w-5 h-5" />,
      description:
        "Creează aplicații complexe, compatibile Windows, MacOS sau Linux menite să ruleze la cele mai înalte performanțe.",
    },
    {
      name: "CLI",
      color: "bg-sol-yellow",
      icon: <FaTerminal className="text-white w-5 h-5" />,
      description:
        "Viitor backend developer? Planifică un sistem de baze de date și API-uri pentru noi soluții.",
    },
    {
      name: "Web",
      color: "bg-sol-green",
      icon: <FaCode className="text-white w-5 h-5" />,
      description:
        "Dacă îți place să creezi site-uri sau aplicații web ușor de folosit în browser, atunci îți sugerăm să propui o soluție Web!",
    },
  ];

  return (
    <section
      className="mx-auto mb-16 w-full md:max-w-4xl px-4"
      data-aos="fade-down"
      data-aos-delay="300"
    >
      <h3 className="text-2xl font-medium text-sol-grey-accent">
        Ce proiecte sunt eligibile?
      </h3>
      <div className="mt-1 mb-4 h-1 w-16 bg-sol-yellow"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-min gap-5">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="group hover:scale-105 hover:shadow transition-all duration-500 bg-black/25 rounded-tl-lg rounded-br-lg p-4 flex flex-col items-center justify-start"
            >
              <div
                className={`rounded-full ${item.color} p-3 grid place-items-center mb-4`}
              >
                {item.icon}
              </div>
              <h4 className="group-hover:text-sol-yellow-accent transition mb-2 text-lg font-semibold text-sol-grey-accent">
                {item.name}
              </h4>
              <p className="text-center opacity-90">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
