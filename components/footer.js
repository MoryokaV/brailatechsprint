import SocialIcon from "./social_icons";

const Footer = () => {
  return (
    <footer className="w-full sol-blue bg-sol-dark-blue">
      <div className="max-w-4xl px-5 py-3 gap-x-10 gap-y-4 mx-auto flex flex-wrap items-center justify-center sm:justify-between">
        <section>
          <h2 className="font-semibold text-xl">Social media</h2>
          <div className="mt-4 flex gap-3 brightness-50 hover:brightness-75">
            <SocialIcon
              icon="/logo-facebook.svg"
              url="https://www.facebook.com/BibliotecaBraila"
            ></SocialIcon>
            <SocialIcon
              icon="/link-outline.svg"
              url="https://bjbraila.ro"
            ></SocialIcon>
          </div>
        </section>
        <section>
          <p className="brightness-75 text-sm">
            Copyright @ {new Date().getFullYear()} BTS
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
