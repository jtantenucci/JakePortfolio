import React from "react";
import Head from "next/head";

export default function HeadComponent({ title }) {
  return (
    <Head>
      <title>{title}</title>
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
  );
}
