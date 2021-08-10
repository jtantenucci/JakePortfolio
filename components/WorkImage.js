import React from 'react';
import ImageListItem from '@material-ui/core/ImageListItem';
import Image from 'next/image';

export default function WorkImage({title, key, path, cols}) {
  return (
    <ImageListItem key={key} cols={1}>
      <Image 
        src={path} 
        alt={title}
        height="864"
        width="1142" 
      />
    </ImageListItem>
  );
}