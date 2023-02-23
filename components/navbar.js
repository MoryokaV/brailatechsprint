import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky z-10 top-0 h-16 w-full bg-sol-blue-accent/50 backdrop-blur-lg">
      <div className="h-full max-w-6xl w-full flex items-center justify-between mx-auto">
        <h2 className="text-sol-grey-accent text-xl">
          <span className="text-lg font-bold">~</span>
          <span className="text-sol-green text-lg font-bold">$</span>
          &nbsp;BrăilaTechSprint
        </h2>
        <nav className="flex gap-6">
          <Link href="/" className="group hover:text-sol-grey-accent">
            Acasă
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-sol-green"></span>
          </Link>
          <Link href="/regulament" className="group">
            Regulament
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-sol-green"></span>
          </Link>
          <Link href="/echipa" className="group">
            Organizatori
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-sol-green"></span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
