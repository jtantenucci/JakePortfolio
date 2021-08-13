import React, { useState } from "react";
import intact from "../public/intact-sketch.png";
import highNoon from "../public/highnoon-sketch.png";
import neuehaus from "../public/neuehaus-sketch.png";
import milkman from "../public/milkman-sketch.png";
import laborOfLove from "../public/labor-of-sketch.png";
import soak from "../public/soak-sketch.png";
import sorry from "../public/sorry-sketch.png";
import springHours from "../public/springhours-sketch.png";
import vaccine from "../public/vaccine-sketch.png";
import washed from "../public/washed-sketch.png";
import wetmail from "../public/wetmail-sketch.png";
import april from "../public/april-sketch.png";
import MainText from "./parallax/MainText";
import ParallaxTab from './parallax/ParallaxTab';
import LayerContents from './parallax/LayerContents';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated } from "react-spring";

export default function Collages({ styles }) {
  const [open, set] = useState(true);
  const Fade = React.forwardRef(function Fade(props, ref) {
    const { children } = props;
    const style = useSpring({
      config: { tension: 220, friction: 60, clamp: true },
      enter: { color: "rgba(0,0,0,0)", opacity: 0.1 },
      to: {
        color:
          "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, " +
          "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.4) 100%)",
      },
      from: { color: "rgba(0,0,0,0)" },
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
        <ParallaxLayer offset={0} speed={1} style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", color: "black", zIndex: 1 }}>
          <Fade>
            <MainText />
          </Fade>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.3} style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", color: "black", zIndex: 1 }}>
          <h3 className={styles.description}>
            this is some descriptor text for the portfolio.
          </h3>
          <LayerContents src={vaccine} alt="vaccine"/>
          <LayerContents src={washed} alt="washed"/>
        </ParallaxLayer>
        <ParallaxTab offset={1}/>        
        <ParallaxLayer offset={1.75} speed={0.5} style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", color: "white", zIndex: 1 }}>
          <LayerContents src={neuehaus} alt="neuehaus"/>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.8} style={{ color: "white", zIndex: 1 }}>
          <LayerContents src={springHours} alt="springHours"/>
        </ParallaxLayer>
        <ParallaxLayer offset={2.7} speed={0.4} style={{ zIndex: 1 }}>
          <LayerContents src={highNoon} alt="high noon"/>
          <LayerContents src={sorry} alt="sorry"/>
        </ParallaxLayer>
        <ParallaxTab offset={3} />        
        <ParallaxLayer offset={3.2} speed={0.5} style={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1 }}>
          <LayerContents src={intact} alt="intact"/>
          <LayerContents src={wetmail} alt="wetmail"/>
        </ParallaxLayer>
        <ParallaxLayer offset={3.8} speed={0.5} style={{ zIndex: 1 }}>
          <LayerContents src={april} alt="april"/>
          <LayerContents src={laborOfLove} alt="labor of love"/>
        </ParallaxLayer>
        <ParallaxTab offset={5}/>        
        <ParallaxLayer offset={4.5} speed={0.5} style={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1 }}>
          <LayerContents src={milkman} alt="milkman"/>
          <LayerContents src={soak} alt="soak"/>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
