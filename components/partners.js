import { partners } from "@/data/partners";
import Image from "next/image";

const IndexPartnersFlex = () => {
  return (
    <section className="mx-auto mb-16 w-full md:max-w-6xl px-4 text-center text-xl text-sol-grey-dark">
      <h2 className="uppercase tracking-widest font-medium mb-6">Oferit de</h2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-x-6 gap-y-4">
        {partners.map((partner, index) => {
          return (
            <Image
              src={partner.img}
              alt={partner.name}
              key={index}
              className={`saturate-0 ${
                partner.invert && "invert"
              } opacity-70 w-auto max-h-20`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default IndexPartnersFlex;
