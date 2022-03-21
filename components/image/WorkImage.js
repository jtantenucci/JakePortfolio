import React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Image from 'next/image';

export default function WorkImage({ title, author, path }) {
  return (
    <ImageListItem cols={1} sx={{ height: 443, width: 635 }}>
      <Image
        src={path}
        alt={title}
        height="443"
        width="635"
      />
      <ImageListItemBar
        title={title}
        subtitle={<span>by: {author}</span>}
        position="below"
      >
        wtf
      </ImageListItemBar>
    </ImageListItem >
  );
}