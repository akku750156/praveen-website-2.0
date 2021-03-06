import Head from "next/head";
import Header from "../components/sections/Header";
import Photo from "../components/sections/Photo";
import Art from "../components/sections/Art";
import Travel from "../components/sections/Travel";
import Sculpture from "../components/sections/Sculpture";
import Developer from "../components/sections/Developer";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center ">
      <Head>
        <title>Praveen Pasupuleti</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full bg-max bg-gradient-to-b from-blue-300 to-red-200 m-2">
        <Header />
        <Photo />
        <Art />
        <Travel />
        <Sculpture />
        <Developer />
      </main>
    </div>
  );
}
