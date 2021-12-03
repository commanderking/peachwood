import type { NextPage } from "next";
import Head from "next/head";
import Layout from "components/Layout";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PeachWood Estate</title>
        <meta
          name="description"
          content="Home to Peach and Woody's Digital Content"
        />
        <meta property="og:image" content="/profile/woody_excited.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout />
    </div>
  );
};

export default Home;
