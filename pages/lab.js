import React from "react";
import ImageList from "@mui/material/ImageList";
import { WorkImageArray } from "components/WorkImageArray";
import WorkImage from "components/image/WorkImage";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import PageHeader from "components/PageHeader";
import ImageBlock from "components/image/ImageBlock";
import useMediaQuery from "@mui/material/useMediaQuery";
import MiniMenu from "components/menu/MiniMenu";
import Navigation from "components/nav/Navigation";
import MintTile from "public/MintTile.gif";
import HeadComponent from "components/HeadComponent";

export default function Lab() {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <HeadComponent title="lab - Jake Lamothe" />
      {columns ? null : <Navigation />}
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
        <Toolbar />
        {columns ? <MiniMenu /> : null}
        <PageHeader title="lab" />
        <ImageBlock maxWidth="50vw" path={MintTile} title="MintTile" />
      </Box>
      <ImageList
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "100vw",
          overflow: "hidden",
          backgroundClip: "border-box",
        }}
        cols={columns ? 3 : 1}
        gap={25}
      >
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
