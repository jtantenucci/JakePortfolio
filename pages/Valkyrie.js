import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
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
import ValkyrieNasdaq from "public/ValkyrieNasdaq.gif";
import ValkTypeExploration from "public/ValkTypeExploration.png";
import ValkyrieArtboard from "public/ValkyrieArtboard.png";
import ValkyrieArtboard2 from "public/ValkArtboard2.png";
import ValkyrieExploration from "public/ValkyrieExploration.png";
import ValkyrieLogo from "public/ValkyrieLogo.png";
import ValkyrieLogo2 from "public/ValkyrieLogo2.png";
import ValkyrieMock from "public/ValkyrieMock.png";
import ValkyriePalette from "public/ValkyriePalette.png";
import ValkyriePalette2 from "public/ValkyriePalette2.png";
import ValkyrieWire from "public/ValkyrieWire.png";

export default function Valkyrie() {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {columns ? null : <Navigation />}
      <Box
        container
        sx={{ marginLeft: "auto", marginRight: "auto", maxWidth: "90vw" }}
      >
        <Toolbar />
        {columns ? <MiniMenu changedColor={'#14359a'} changedColor2={'#ed5439'} changedColor3={'#ccff00'} /> : null}
        <PageHeader title="Valkyrie" />
        <ImageBlock path={ValkyrieMock} title="Valkyrie Mock" />
        <PageText
          text="Valkyrie Investments is a alternative asset management firm based in Tennessee, 
                focusing on the emerging cryptocurrency sector. I was assigned to refresh Valkyrie's identity, 
                with an emphasis on legibility in digital spaces."
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
          text="Art Direction → Jake LaMothe"
        />
        <ImageBlock
          marginLeft={0}
          maxWidth="80vw"
          path={ValkyrieLogo}
          title="Valkyrie Logo"
        />
        <ImageBlock
          maxWidth="70vw"
          path={ValkyriePalette}
          title="Valkyrie Palette"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: columns ? "row" : "column",
            maxWidth: "100vw",
            justifyContent: "space-between",
          }}
        >
          <PageText marginRight={columns ? 0 : "auto"} paddingBottom={columns ? "50px" : "0px"} text="Color Palette" />
          <PageText
            paddingTop={columns ? "50px" : "0px"}
            text="As digital centric brand, it was important to be mindful of contrast and color. 
                  Valkyrie's final selected palette provides a high contrast and the ability to catch eyes 
                  even with a quick scroll."
          />
        </Box>
        <ImageBlock
          maxWidth="70vw"
          path={ValkyriePalette2}
          title="Valkyrie Palette2"
        />
      </Box>
      <ImageBlock marginLeft={0} maxWidth="70vw" path={ValkTypeExploration} title="Valkyrie Type Exploration" />
      <ImageBlock maxWidth="100vw" path={ValkyrieExploration} title="Valkyrie Exploration" />
      <ImageBlock maxWidth="80vw" path={ValkyrieLogo2} title="Valkyrie Logo 2" />      
      <ImageBlock maxWidth="95vw" path={ValkyrieWire} title="Valkyrie Wireframe" />      
      <ImageBlock marginRight={0} maxWidth="70vw" path={ValkyrieArtboard} title="Valkyrie Artboard" />
      <ImageBlock maxWidth="90vw" path={ValkyrieArtboard2} title="Valkyrie Artboard 2" />
      <ImageBlock marginLeft={0} maxWidth="60vw" path={ValkyrieNasdaq} title="Valkyrie Artboard 2" />
      <PageFooter changedColor={'#14359a'} changedColor2={'#ed5439'} changedColor3={'#ccff00'} />
    </>
  );
}
