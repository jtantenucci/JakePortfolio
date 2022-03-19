import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import ImageListItem from "@mui/material/ImageListItem";
import Link from "@mui/material/Link";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function MainHoverImage({ ...props }) {
  const [hover, setHover] = useState(false);
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 100,
    (x - window.innerWidth / 2) / 100,
    0.85,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  const [properties, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: {
        tension: 120,
        friction: 14,
        clamp: true
    },
    opacity: 1,
    filter: 1
  }));
  const AnimatedImageListItem = animated(ImageListItem);
  const theme = useTheme();

  const MouseEnter = () => {
    set({ opacity: 0.75, contrast: 0 })
    setHover(true);
  }

  const MouseLeave = () => {
    set({ xys: [0, 0, 1], opacity: 1, contrast: 1});
    setHover(false)
  }

  return (
    <>
      <AnimatedImageListItem
        cols={1}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseEnter={MouseEnter}
        onMouseLeave={MouseLeave}
        style={{
          transform: properties.xys.to(trans),
          opacity: properties.opacity,
          filter: `contrast(${properties.filter})`
        }}
      >
        <Link href={props.title}>
          <Image
            src={props.img}
            alt={props.title}
            height="443"
            width="635"
            sizes="50vw"
            quality="100"
            layout="responsive"
          />
        </Link>
        <ImageListItemBar
          sx={{
            color: "#000",
            "& .MuiImageListItemBar-subtitle": {
              color: "#929292",
              [theme.breakpoints.down("lg")]: {
                fontSize: 18,
              },
            },
            "& .MuiImageListItemBar-title": {
              [theme.breakpoints.down("lg")]: {
                fontSize: 24,
              },
            },
          }}
          title={props.title}
          position="below"
        />
      </AnimatedImageListItem>
    </>
  );
}
