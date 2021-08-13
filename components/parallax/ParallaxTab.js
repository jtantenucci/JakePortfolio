import { ParallaxLayer } from "@react-spring/parallax";

export default function ParallaxTab({offset}) {
  return (
    <ParallaxLayer
      offset={offset}
      speed={0}
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        backgroundPosition: "fill",
        zIndex: 0,
        backgroundImage: "url('/lavender-tab.png')",
      }}
      factor={3}
    />
  );
}
