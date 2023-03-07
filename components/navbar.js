import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="sticky z-10 top-0 left-0 right-0 w-full bg-sol-blue-accent/50 backdrop-blur-lg">
      <div className="h-full max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a className="text-sol-grey-accent text-xl" href="/">
          <span className="text-lg font-bold">~</span>
          <span className="text-sol-green text-lg font-bold">$</span>
          &nbsp;BrăilaTechSprint
        </a>
        <nav className="hidden sm:flex gap-6">
          <Link href="/" className="group hover:text-sol-grey-accent">
            Acasă
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-sol-green"></span>
          </Link>
          <Link href="/regulament" className="group">
            Regulament
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-sol-green"></span>
          </Link>
          <Link href="/organizare" className="group">
            Organizare
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-sol-green"></span>
          </Link>
        </nav>
        <button
          className="block sm:hidden h-5 w-5"
          onClick={() => setMenu(!menu)}
        >
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </button>
      </div>
      <aside
        className={`w-screen ${
          menu ? "max-h-40" : "max-h-0"
        } overflow-hidden transition-all duration-300`}
      >
        <div
          className={`flex ${
            menu ? "flex" : "hidden"
          } flex-col items-center gap-4 p-6`}
        >
          <Link href="/" className="group hover:text-sol-grey-accent">
            Acasă
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-sol-green"></span>
          </Link>
          <Link href="/regulament" className="group">
            Regulament
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-sol-green"></span>
          </Link>
          <Link href="/organizare" className="group">
            Organizare
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-sol-green"></span>
          </Link>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
