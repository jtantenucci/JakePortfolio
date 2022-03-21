import React from 'react';
import ImageList from '@mui/material/ImageList';
import { WorkImageArray } from 'components/workimagearray';
import WorkImage from 'components/image/WorkImage';
import { Toolbar } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { Box } from '@mui/material'
import PageHeader from 'components/PageHeader';
import useMediaQuery from "@mui/material/useMediaQuery";
import MiniMenu from 'components/menu/MiniMenu';
import Navigation from 'components/nav/Navigation';

export default function Lab() {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      { columns ? null : <Navigation /> }
      <Box container sx={{ paddingRight: "100px", paddingLeft: "100px" }}>
        <Toolbar />
        { columns ? <MiniMenu/> : null }
        <PageHeader title="lab"/>
      </Box>
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
    </>
  );
}