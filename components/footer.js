import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import SocialIcon from "./social_icons";

const Footer = () => {
  return (
    <footer className="mt-auto w-full sol-blue bg-sol-dark-blue">
      <div className="max-w-4xl px-5 py-3 gap-x-10 gap-y-4 mx-auto flex flex-wrap items-center justify-center sm:justify-between">
        <section>
          <h2 className="font-semibold text-xl">Social media</h2>
          <div className="mt-4 flex gap-3 brightness-75 hover:brightness-100">
            <SocialIcon
              icon={faFacebook}
              url="https://www.facebook.com/BibliotecaBraila"
            ></SocialIcon>
            <SocialIcon icon={faLink} url="https://bjbraila.ro"></SocialIcon>
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
