import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import ImageList from '@mui/material/ImageList';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MainArray } from './MainArray';
import Image from 'next/image';
import ImageListItem from '@mui/material/ImageListItem';
import Link from '@mui/material/Link'
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function Collages({ styles }) {
  const [hover, setHover] = useState(false)
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const { x } = useSpring({
    from: { x: 0 },
    x: hover ? 1 : 0,
  })

  const endHover = () => {
    setHover(false);
    setSelectedItemIndex(-1);
  }

  const startHover = (index) => {
    setHover(true)
    setSelectedItemIndex(index);
  }

  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <ImageList sx={{ width: "90vw" }} cols={columns ? 2 : 1} gap={25}>
      {MainArray.map((item, index) => (
        <ImageListItem cols={1} key={index}>
          <animated.div
            style={{
              scale: x.to({
                range: [0, 1],
                output: [1, 0.95],
              })
            }}
          >
            <Link href={item.title}>
              <Image
                onMouseEnter={() => startHover(item.id)}
                onMouseLeave={endHover}
                className={styles.nextImage}
                src={item.img}
                alt={item.title}
                height="443"
                width="635"
                sizes="50vw"
                quality="100"
                layout="responsive"
              />
            </Link>
            <ImageListItemBar
              sx={{
                color: '#000',
                '& .MuiImageListItemBar-subtitle': {
                  color: '#929292',
                  [theme.breakpoints.down('lg')]: {
                    fontSize: 18,
                  },
                },
                '& .MuiImageListItemBar-title': {
                  [theme.breakpoints.down('lg')]: {
                    fontSize: 24,
                  },
                }
              }}
              title={item.title}
              position="below"
            />
          </animated.div>
        </ImageListItem >
      ))}
    </ImageList>
  );
}
