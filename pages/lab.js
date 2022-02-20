import React from 'react';
import ImageList from '@mui/material/ImageList';
import { WorkImageArray } from '../components/workimagearray';
import WorkImage from '../components/WorkImage';

export default function Lab() {
  return (
    <ImageList rowHeight={800} sx={{ width: 1920, height: 1080 }} cols={2}>
      {WorkImageArray.map((item) => (
        <WorkImage 
          title={item.title} 
          key={item.img} 
          path={item.img} 
          size={item.cols}
        />
      ))}
    </ImageList>
  );
}