import React, { useState } from "react";
import intact from "../public/intact-sketch.png";
import highNoon from "../public/highnoon-sketch.png";
import neuehaus from "../public/neuehaus-sketch.png";
import milkman from "../public/milkman-sketch.png";
import laborOfLove from "../public/labor-of-sketch.png";
import soak from "../public/soak-sketch.png";
import sorry from "../public/sorry-sketch.png";
import HorizontalRule from "../components/HorizontalRule";
import Container from "@material-ui/core/Container";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { makeStyles } from "@material-ui/core/styles";
import { useSpring, animated } from "react-spring";
import springHours from "../public/springhours-sketch.png";
import vaccine from "../public/vaccine-sketch.png";
import washed from "../public/washed-sketch.png";
import wetmail from "../public/wetmail-sketch.png";
import april from "../public/april-sketch.png";
import Image from "next/image";
import Trail from "../components/Trail";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

const useStyles = makeStyles(() => ({
  icon: {
    color: "black",
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, " +
      "rgba(0,0,0,0.2) 70%, rgba(0,0,0,0) 100%)",
  },
}));

export default function Collages({ styles }) {
  const classes = useStyles();
  const [open, set] = useState(true);
  const Fade = React.forwardRef(function Fade(props, ref) {
    const { children } = props;
    const style = useSpring({
      config: { tension: 220, friction: 60, clamp: true },
      enter: { color: "rgba(0,0,0,0)", opacity: 0.1 },
      to: { color: "rgba(60,60,90,1)" },
      from: { color: "rgba(0,0,0,0)"},
    });
    return (
      <animated.div ref={ref} style={style}>
        {children}
      </animated.div>
    );
  });

  return (
    <>
      <Parallax pages={7} style={{ top: "0", left: "0" }}>
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            color: "black",
          }}
        >
          <Fade>
            <h1 className={styles.title}>this is placeholder text.</h1>
            <h2 className={styles.subtitle}>
              this text serves as an introduction to the artist and portfolio at
              hand.
            </h2>
            <HorizontalRule />
            <h3 className={styles.description}>
              this is some descriptor text for the portfolio.
            </h3>
          </Fade>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            color: "black",
          }}
        >
          <h3 className={styles.description}>
            this is some descriptor text for the portfolio.
          </h3>
          <div className={styles.stackBottom}>
            <Image
              src={vaccine}
              alt="vaccine"
              quality={100}
              width={611.6}
              height={614}
              placeholder="blur"
            />
          </div>
          <Image
            src={washed}
            alt="washed"
            quality={100}
            width={611.6}
            height={614}
            placeholder="blur"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={2}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
            backgroundImage: "url('/lavender-tab.png')",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
          }}
        >
          <div className={styles.stackBottom}>
            <Image
              src={neuehaus}
              alt="neuehaus"
              quality={100}
              width={611.6}
              height={614}
              placeholder="blur"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1} style={{ color: "white" }}>
          <div className={styles.stackTop}>
            <Image
              src={springHours}
              alt="springHours"
              width={611.6}
              height={614}
              quality={100}
              placeholder="blur"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.5}>
          <Container>
            <div className={styles.stackBottom}>
              <Image
                src={highNoon}
                alt="highnoon"
                quality={100}
                width={611.6}
                height={614}
                placeholder="blur"
              />
            </div>
            <div className={styles.stackTop}>
              <Image
                src={sorry}
                alt="sorry"
                width={611.6}
                height={614}
                quality={100}
                placeholder="blur"
              />
            </div>
          </Container>
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            backgroundImage: "url('/lavender-tab.png')",
          }}
        >
          <div className={styles.stackBottom}>
            <Image
              src={intact}
              alt="intact"
              quality={100}
              width={611.6}
              height={614}
              objectFit="intrinsic"
              placeholder="blur"
            />
          </div>
          <div className={styles.stackTop}>
            <Image
              src={wetmail}
              alt="wetmail"
              quality={100}
              width={611.6}
              height={614}
              placeholder="blur"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={0.5} style={{}}>
          <div className={styles.stackBottom}>
            <Image
              src={april}
              alt="april"
              quality={100}
              width={611.6}
              height={614}
              placeholder="blur"
            />
          </div>
          <div className={styles.stackTop}>
            <Image
              src={laborOfLove}
              alt="labor of love"
              quality={100}
              width={611.6}
              height={614}
              objectFit="intrinsic"
              placeholder="blur"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={6}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            backgroundImage: "url('/lavender-tab.png')",
          }}
        >
          <div className={styles.stackBottom}>
            <Image
              src={milkman}
              alt="milkman"
              quality={100}
              width={611.6}
              height={614}
              placeholder="blur"
            />
          </div>
          <div className={styles.stackTop}>
            <Image
              src={soak}
              alt="soak"
              quality={100}
              width={611.6}
              height={614}
              placeholder="blur"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            color: "white",
          }}
        ></ParallaxLayer>
      </Parallax>

      {/*  <div className={styles.stackBottom}>
        <Image
          src={highNoon}
          alt="highnoon"
          quality={100}
          width={611.6}
          height={614}
          placeholder="blur"
        />
      </div>
      <div className={styles.stackTop}>
        <Image
          src={sorry}
          alt="sorry"
          width={611.6}
          height={614}
          quality={100}
          placeholder="blur"
        />
      </div>
      <div className={styles.stackBottom}>
        <Image
          src={intact}
          alt="intact"
          quality={100}
          width={611.6}
          height={614}
          objectFit="intrinsic"
          placeholder="blur"
        />
      </div>
      <div className={styles.stackTop}>
        <Image
          src={wetmail}
          alt="wetmail"
          quality={100}
          width={611.6}
          height={614}
          placeholder="blur"
        />
      </div>
      <div className={styles.stackBottom}>
        <Image
          src={april}
          alt="april"
          quality={100}
          width={611.6}
          height={614}
          placeholder="blur"
        />
      </div>
      <div className={styles.stackTop}>
        <Image
          src={laborOfLove}
          alt="labor of love"
          quality={100}
          width={611.6}
          height={614}
          objectFit="intrinsic"
          placeholder="blur"
        />
      </div>
      <div className={styles.stackBottom}>
        <Image
          src={milkman}
          alt="milkman"
          quality={100}
          width={611.6}
          height={614}
          placeholder="blur"
        />
      </div>
      <div className={styles.stackTop}>
        <Image
          src={soak}
          alt="soak"
          quality={100}
          width={611.6}
          height={614}
          placeholder="blur"
        />
      </div> */}
    </>
  );
}
