import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Brăila IT hackathon landing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header className="sticky top-0 h-20 w-full bg-sol-blue-accent"></header>
        <Masthead></Masthead>
        <section className="mx-auto mb-10 max-w-4xl">
          <h2 className="text-2xl font-medium text-sol-grey-accent">
            Ce este Brăila Tech Sprint?
          </h2>
          <div className="mt-1 mb-4 h-1 w-16 bg-green-600"></div>
          <p className="tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisis velit eu molestie vulputate. Suspendisse dui dolor,
            lobortis non tortor mattis, feugiat maximus enim. Pellentesque at
            elementum augue, sit amet pretium leo. Vivamus sit amet mattis
            metus, non volutpat metus. Nullam gravida augue sed maximus mollis.
            Nulla a massa ligula. Maecenas laoreet dapibus luctus. Curabitur
            auctor diam vitae lacus mollis tempor. Sed sit amet mattis mauris,
            vitae pretium lorem. Duis feugiat efficitur felis, et vestibulum
            urna accumsan quis. Praesent gravida erat scelerisque justo mollis,
            vitae ornare sapien tempus. Phasellus in odio pellentesque tellus
            dapibus molestie a sit amet metus. Donec sagittis, velit non
            imperdiet sagittis, augue risus mattis dui, ultricies elementum
            nulla turpis dictum ante. Aenean fringilla efficitur lacinia. Fusce
            semper orci eu euismod condimentum. Ut quis nunc in magna faucibus
            volutpat. Donec ultricies mi at metus sollicitudin pellentesque. Sed
            in dui neque. Vestibulum ut commodo sapien. Suspendisse ut mi orci.
          </p>
        </section>
        <section className="mx-auto mb-10 max-w-4xl">
          <h2 className="text-2xl font-medium text-sol-grey-accent">
            Ediția I - 2023
          </h2>
          <div className="mt-1 mb-4 h-1 w-16 bg-green-600"></div>
          <p className="tracking-wide">
            Donec ultricies mi at metus sollicitudin pellentesque. Sed in dui
            neque. Vestibulum ut commodo sapien. Suspendisse ut mi orci.
            Pellentesque et nisi quis neque faucibus viverra. Pellentesque
            suscipit bibendum condimentum. Integer blandit justo a elit viverra,
            eget feugiat tortor congue. Vestibulum ipsum leo, cursus eget
            venenatis eu, venenatis eu nulla. Cras dictum tincidunt lectus
            volutpat ultricies. Duis lobortis mauris fringilla hendrerit
            commodo. Duis ut sodales justo, ut auctor orci. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Aliquam ac dictum
            metus. Vivamus leo lacus, laoreet sed laoreet vitae, condimentum
            iaculis libero.
          </p>
          <br></br>
          <p className="tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisis velit eu molestie vulputate. Suspendisse dui dolor,
            lobortis non tortor mattis, feugiat maximus enim. Pellentesque at
            elementum augue, sit amet pretium leo. Vivamus sit amet mattis
            metus, non volutpat metus. Nullam gravida augue sed maximus mollis.
            Nulla a massa ligula. Maecenas laoreet dapibus luctus. Curabitur
            auctor diam vitae lacus mollis tempor. Sed sit amet mattis mauris,
            vitae pretium lorem. Duis feugiat efficitur felis, et vestibulum
            urna accumsan quis. Praesent gravida erat scelerisque justo mollis.
          </p>
          <br></br>
          <p className="tracking-wide">
            Vă puteți înscrie, completând următorul&nbsp;
            <a
              className="text-blue-500 underline"
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfIv_3d2VGq0fK3j1YAyk_P8TTSXyTbnhUwNnokqiWy1LZXPQ/viewform"
            >
              formular
            </a>
          </p>
        </section>
      </main>
    </>
  );
}

const Masthead = () => {
  return (
    <div className="flex justify-center items-center gap-48 w-full mt-10 mb-24">
      <div>
        <h1 className="text-4xl font-normal tracking-tight text-sol-grey-accent">
          Brăila <span className="font-semibold">Tech</span>
          <span className="text-green-600 font-semibold"> Sprint</span>
        </h1>
      </div>

      <Image
        src="/code images stack.png"
        width="550"
        height="550"
        alt="coding images stack"
      ></Image>
    </div>
  );
};