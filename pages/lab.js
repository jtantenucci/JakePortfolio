import React from "react";
import ImageList from "@mui/material/ImageList";
import { LabArray } from "components/LabArray";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import PageHeader from "components/PageHeader";
import ImageBlock from "components/image/ImageBlock";
import useMediaQuery from "@mui/material/useMediaQuery";
import MiniMenu from "components/menu/MiniMenu";
import Navigation from "components/nav/Navigation";
import MintTile from "public/MintTile.gif";
import HeadComponent from "components/HeadComponent";
import PageFooter from "components/PageFooter";

export default function Lab() {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{backgroundColor: "#000"}}>
      <HeadComponent title="lab - Jake Lamothe" />
      {columns ? <MiniMenu color="#fff"/> : <Navigation />}
      <Box
        container
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "90vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <PageHeader color="#fff" title="lab" />
      </Box>
      <ImageList
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "90vw",
          overflow: "hidden",
          backgroundClip: "border-box"
        }}
        variant='masonry'
        cols={columns ? 4: 1}
        gap={5}
      >
        {LabArray.map((item) => (
          <ImageBlock
            paddingTop="0px"
            paddingBottom="0px"
            title={item.title}
            key={item.img}
            path={item.img}
          />
        ))}
      </ImageList>
      <PageFooter color="#fff"></PageFooter>
    </Box>
  );
}
