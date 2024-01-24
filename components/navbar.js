import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";

import logo from "public/bts.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="sticky z-10 top-0 left-0 right-0 w-full bg-sol-blue-accent/50 backdrop-blur-lg">
      <header className="h-full max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link className="text-sol-grey-accent text-2xl flex gap-3" href="/">
          <Image src={logo} width="65" alt="BTS logo"></Image>{" "}
          <h2 className="font-normal tracking-tighter text-sol-grey">
            Brăila<span className="font-semibold">Tech</span>
            <span className="text-sol-yellow font-semibold">Sprint</span>
          </h2>
        </Link>
        <nav className="hidden sm:flex gap-6">
          <Link href="/" className="group hover:text-sol-grey-accent">
            Acasă
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-sol-yellow"></span>
          </Link>
          <Link href="/regulament" className="group hover:text-sol-grey-accent">
            Regulament
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-sol-yellow"></span>
          </Link>
          <Link href="/galerie" className="group hover:text-sol-grey-accent">
            Galerie
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-sol-yellow"></span>
          </Link>
          <Link href="/organizare" className="group hover:text-sol-grey-accent">
            Organizare
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-sol-yellow"></span>
          </Link>
        </nav>
        <button
          className="block sm:hidden outline-white outline-2 outline rounded-md h-5 w-5"
          onClick={() => setMenu(!menu)}
        >
          <IoMenu />
        </button>
      </header>
      <aside
        className={`w-screen ${
          menu ? "max-h-48" : "max-h-0"
        } overflow-hidden transition-all duration-300`}
      >
        <div
          className={`flex ${
            menu ? "flex" : "hidden"
          } flex-col items-center gap-4 p-6`}
        >
          <Link href="/" className="group hover:text-sol-grey-accent">
            Acasă
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-sol-yellow"></span>
          </Link>
          <Link href="/regulament" className="group hover:text-sol-grey-accent">
            Regulament
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-sol-yellow"></span>
          </Link>
          <Link href="/galerie" className="group hover:text-sol-grey-accent">
            Galerie
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-sol-yellow"></span>
          </Link>
          <Link href="/organizare" className="group hover:text-sol-grey-accent">
            Organizare
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-sol-yellow"></span>
          </Link>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
