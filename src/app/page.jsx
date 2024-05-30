"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./home.module.css";
// import dynamic from "next/dynamic";

// hydration in nextjs
// Hydration errors occur when the server-rendered HTML content and the client-side JavaScript do not match.
// 1. using useEffect we can prevent hydration
// 2. using dynamically import compont we can prevent hydraion
// 3. hide the hydration error by passing an argument in html element that is supperessHydrationWarning

// importing dynamically import to prevent hydration
// const HydrationTestNoSSR = dynamic(() => import("@/components/hydrationTest"), { ssr: false });

export default function Home() {
  // using useEffect to prevent hydration
  // const [isClientSide, setIsClientSide] = useState(false);
  // useEffect(() => {
  //   setIsClientSide(true);
  // }, []);

  // let randomValue = Math.random();

  // console.log("randomValue", randomValue);

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        {/* {isClientSide && randomValue} */}
        {/* <HydrationTestNoSSR /> */}
        {/* <div suppressHydrationWarning>{randomValue}</div> */}
        <h1 className={styles.title}>Create Thoughts Agency.</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eos similique inventore voluptatum beatae odit nihil cum vero recusandae eligendi!</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImage} />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
}
