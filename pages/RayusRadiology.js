import { Toolbar } from "@mui/material";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import PageHeader from "components/PageHeader";
import PageFooter from "components/PageFooter";
import PageText from "components/PageText";
import PageSubtext from "components/PageSubtext";
import ImageBlock from "components/image/ImageBlock";
import MiniMenu from "components/menu/MiniMenu";
import Navigation from "components/nav/Navigation";
import RayusSign from "public/RayusSign.png";
import RayusPoster from "public/RayusPoster.png";
import RayusPoster2 from "public/RayusPoster2.png";
import RayusInstagram from "public/RayusInstagram.png";
import RayusSocialTile from "public/RayusSocialTile.png";
import RayusSocialTileGif from "public/RayusSocialTile.gif";

export default function RayusRadiology() {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {columns ? null : <Navigation changedColor={'#0484bd'} changedColor2={'#f2581b'} />}
      <Box
        container
        sx={{ marginLeft: "auto", marginRight: "auto", maxWidth: "90vw" }}
      >
        <Toolbar />
        {columns ? <MiniMenu changedColor={'#0484bd'} changedColor2={'#f2581b'} /> : null}
        <PageHeader title="Rayus Radiology" />
        <ImageBlock path={RayusSign} title="Rayus Sign" />
        <PageText
          text="RAYUS Radiology is a national provider of radiology and diagnostic medicine. 
                Formerly known as CDI, Center for Diagnostic Imaging, we created a new name, logo, 
                and brand identity for RAYUS and launched in 2021. I was assigned to produce social content and launch materials."
        />
        <PageSubtext
          paddingTop="0px"
          paddingBottom={0}
          maxWidth="50vw"
          text="Agency → LUDWIG+"
        />
        <PageSubtext
          paddingTop="0px"
          paddingBottom={50}
          maxWidth="50vw"
          text="Creative Director → Robin Todd"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            maxWidth: "100vw",
            justifyContent: "space-between",
          }}
        >
          <ImageBlock maxWidth="40vw" path={RayusPoster} title="Rayus Poster" />
          <ImageBlock
            maxWidth="40vw"
            path={RayusPoster2}
            title="Rayus Poster 2"
          />
        </Box>
        <ImageBlock
          maxWidth="50vw"
          path={RayusSocialTileGif}
          title="Rayus Social Tile Gif"
        />
        <ImageBlock path={RayusInstagram} title="Rayus Social Tile Gif" />
      </Box>
      <PageFooter changedColor={'#0484bd'} changedColor2={'#f2581b'} />
    </>
  );
}
