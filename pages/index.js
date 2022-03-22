import React from "react";
import Head from "next/head";
import Work from "components/Work";
import styles from "styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jake LaMothe</title>
        <meta name="description" content="art direction/graphic design" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/public/fonts/TWKLausanne-300.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/public/fonts/TWKLausanne-400.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <main>
          <div>
            <Work styles={styles} />
          </div>
      </main>
    </div>
  );
}
