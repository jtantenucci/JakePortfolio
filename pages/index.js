import React, { useState, useEffect } from "react";
import Head from "next/head";
import Toolbar from "@mui/material/Toolbar";
import MainSite from "../components/MainSite";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>jake_portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/AlteHaasGroteskRegular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/AlteHaasGroteskBold.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <main>
        <Toolbar />
          <div className={styles.main}>
            <MainSite styles={styles} />
          </div>
      </main>
    </div>
  );
}
