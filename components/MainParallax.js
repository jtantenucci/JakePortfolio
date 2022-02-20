import React, { useState } from "react";
import ImageList from '@mui/material/ImageList';
import { MainArray } from '../components/MainArray';
import WorkImage from '../components/WorkImage';
import Image from 'next/image';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
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
    <ImageList sx={{ width: "90vw" }} cols={2} gap={50}>
      {MainArray.map((item) => (
        <ImageListItem cols={1}>
          <Image
            className={styles.nextImage}
            src={item.img}
            alt={item.title}
            height="443"
            width="635"
            sizes="50vw"
            quality="100"
            layout="responsive"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem >
      ))}
    </ImageList>
  );
}
