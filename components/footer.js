import SocialIcon from "./social_icons";

const Footer = () => {
  return (
    <footer className="w-full sol-blue bg-sol-dark-blue">
      <div className="h-full max-w-4xl px-6 py-4 gap-4 mx-auto flex justify-between">
        <section>
          <h2 className="font-semibold text-xl">Social media</h2>
          <div className="mt-6 flex gap-3 brightness-50 hover:brightness-75">
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
          <h2 className="font-semibold text-xl">Contact</h2>
          <div className="mt-6 flex gap-3">
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
