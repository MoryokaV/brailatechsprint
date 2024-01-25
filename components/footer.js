import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-auto w-full sol-blue bg-sol-dark-blue">
      <div className="max-w-4xl p-4 gap-x-4 gap-y-6 mx-auto grid grid-cols-2 sm:grid-cols-3 items-center justify-center">
        <section className="sm:mx-auto">
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
        <section className="order-3 col-span-2 sm:order-2 mx-auto">
          <p className="brightness-75 text-sm">
            Copyright @ {new Date().getFullYear()} Braila Tech Sprint
          </p>
        </section>
        <section className="sm:mx-auto order-2 sm:order-3">
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
