import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faCode,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faWindows } from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;

const Categories = () => {
  const items = [
    {
      name: "Mobile",
      color: "bg-sol-brred",
      icon: faMobileAlt,
      description:
        "Utilizarea telefoanelor mobile a crescut exponențial în ultimii ani. Impresionează-ne prin UI/UX deosebit și intră pe piața de mobile dev.",
    },
    {
      name: "Desktop",
      color: "bg-sol-bright-blue",
      icon: faWindows,
      description:
        "Creează aplicații complexe, compatibile Windows, MacOS sau Linux menite să ruleze la cele mai înalte performanțe.",
    },
    {
      name: "CLI",
      color: "bg-sol-yellow",
      icon: faTerminal,
      description:
        "Viitor backend developer? Planifică un sistem de baze de date și API-uri pentru noi soluții.",
    },
    {
      name: "Web",
      color: "bg-sol-yellow",
      icon: faCode,
      description:
        "Dacă îți place să creezi site-uri sau aplicații web ușor de folosit în browser, atunci îți sugerăm să propui o soluție Web!",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-min gap-5">
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className="group hover:scale-105 hover:shadow transition-all duration-500 bg-black/25 rounded-tl-lg rounded-br-lg p-4 flex flex-col items-center justify-start"
          >
            <div
              className={`rounded-full ${item.color} h-12 w-12 grid place-items-center mb-4`}
            >
              <FontAwesomeIcon icon={item.icon} className="text-white fa-lg" />
            </div>
            <h4 className="group-hover:text-green-200 transition mb-2 text-lg font-semibold text-sol-grey-accent">
              {item.name}
            </h4>
            <p className="text-center opacity-90">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
