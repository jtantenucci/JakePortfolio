import React from "react";
import ImageList from "@mui/material/ImageList";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MainHoverImage from "./image/MainHoverImage";
import MainMenu from "./menu/MainMenu";
import PageFooter from './PageFooter';
import { MainArray } from './MainArray';


export default function Work({ styles }) {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      { columns ? <MainMenu /> : null }
      <Box container sx={{ marginLeft: "auto", marginRight: "auto", width: "90vw",display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
        <Typography variant="h4" sx={{ justifySelf: "start" }}>
          selected work
        </Typography>
        <Typography variant="h4" sx={{ justifySelf: "start" }}>
          2021→2022
        </Typography>
      </Box>
      <ImageList className={styles.imageList} sx={{ marginLeft: "auto", marginRight: "auto", width: "90vw", overflow: "hidden", backgroundClip: "border-box" }} cols={columns ? 2 : 1} gap={25}>
        {MainArray.map((item) => (
          <MainHoverImage key={item.title} img={item.img} title={item.title} path={item.path}/>
        ))}
      </ImageList>
      <PageFooter />
    </>
  );
}
