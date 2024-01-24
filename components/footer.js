import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-auto w-full sol-blue bg-sol-dark-blue">
      <div className="max-w-4xl px-5 py-3 gap-x-10 gap-y-4 mx-auto flex flex-wrap items-center justify-center sm:justify-between">
        <section>
          <h2 className="font-semibold text-xl">Social media</h2>
          <div className="mt-4 flex gap-3 brightness-75 hover:brightness-100">
            <FaFacebook
              className="w-5 h-5 cursor-pointer"
              onClick={() =>
                window.open("https://www.facebook.com/HackBTS", "_blank")
              }
            />
            <FaInstagram
              className="w-5 h-5 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/brailatechsprint2024/",
                  "_blank"
                )
              }
            />
          </div>
        </section>
        <section>
          <p className="brightness-75 text-sm">
            Copyright @ {new Date().getFullYear()} Braila Tech Sprint
          </p>
        </section>
        <section>
          <h2 className="font-semibold text-xl">Contact</h2>
          <div className="mt-4 flex gap-3">
            <a
              className="text-sol-yellow underline hover:no-underline"
              href="mailto: hackathon@bjbraila.ro"
            >
              hackathon@bjbraila.ro
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
