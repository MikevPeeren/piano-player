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
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <h1>
          Welcome to the <a href="https://nextjs.org">Piano Player</a>
        </h1>

        <Piano />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
