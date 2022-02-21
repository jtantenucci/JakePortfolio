import React, { useState } from "react";
import ImageList from '@mui/material/ImageList';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MainArray } from '../components/MainArray';
import Image from 'next/image';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function Collages({ styles }) {
  const [open, set] = useState(true);
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <ImageList sx={{ width: "90vw" }} cols={ columns ? 2 : 1 } gap={25}>
      {MainArray.map((item) => (
        <ImageListItem cols={1} key={item.img}>
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
            subtitle={<span> {item.author}</span>}
            position="below"
          />
        </ImageListItem >
      ))}
    </ImageList>
  );
}
