// NextJS
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Piano from "../app/components/Piano";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Piano Player</title>
        <meta name="description" content="Play a mighty fine tune" />
      </Head>

      <main>
        <div className="h-screen flex flex-col justify-center items-center">
          <div className="p-10 flex flex-col justify-center items-center">
            <h1>Welcome to the Piano Player.</h1>
            <h2>Use your keyboard.</h2>
          </div>

          <Piano />
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
