import React from "react";
import LayerContents from './LayerContents';
import { ParallaxLayer } from "@react-spring/parallax";

export default function CustomParallaxLayer({ offset, speed, src, alt, styles }) {
  return (
    <>      
        <ParallaxLayer offset={offset} speed={speed} style={{ styles }}>
          <LayerContents src={src} alt={alt}/>
        </ParallaxLayer>
    </>
  );
}
