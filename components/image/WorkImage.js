import React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Image from 'next/image';

export default function WorkImage({ title, author, path }) {
  return (
    <ImageListItem cols={1}>
      <Image
        src={path}
        alt={title}
        height="443"
        width="635"
        sizes="50vw"
        quality="100"
        layout="responsive"
      />
    </ImageListItem >
  );
}