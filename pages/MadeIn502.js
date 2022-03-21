import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import PageHeader from "components/PageHeader";
import PageText from "components/PageText";
import PageSubtext from 'components/PageSubtext';
import PageFooter from 'components/PageFooter';
import ImageBlock from "components/image/ImageBlock";
import MiniMenu from "components/menu/MiniMenu";
import Navigation from "components/nav/Navigation";
import MintGalleryHead from "public/MintGalleryHead.png";
import Mint502Marks from "public/Mint502Marks.png";
import MintTypeCard from "public/MintTypeCard.png";
import MintColorsSpread from "public/MintColorsSpread.png";
import MintAlternates from "public/MintAlternates.png";
import MintTile from "public/MintTile.gif";
import MintHeader from "public/MintHeader.png";

export default function MadeIn502() {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {columns ? null : <Navigation changedColor='#87edaf' />}
      <Box sx={{ marginLeft: "auto", marginRight: "auto", maxWidth: "90vw" }}>
        <Toolbar />
        {columns ? <MiniMenu changedColor='#87edaf' /> : null}
        <PageHeader title="Made In 502" />
        <ImageBlock path={MintGalleryHead} title="Mint Gallery Head" />
        <PageText
          text="Mint 502 is Louisville, Kentucky's premier sneaker boutique.  
                 With a grand opening in late 2021 and little to no pre-existing brand materials, 
                 I was tasked with creating the brand's identity system."
        />
        <PageSubtext
          paddingTop={columns ? "0px" : "1px"}
          paddingBottom={50}
          maxWidth="50vw" 
          text="Client → Mint 502"
        />
        <ImageBlock
          marginLeft={0}
          maxWidth="70vw"
          path={Mint502Marks}
          title="Mint 502 Marks"
        />
        <ImageBlock
          marginRight={0}
          maxWidth="70vw"
          path={MintTypeCard}
          title="Mint Type Card"
        />
        <ImageBlock
          marginLeft={0}
          maxWidth="70vw"
          path={MintColorsSpread}
          title="Mint Colors Spread"
        />
        <ImageBlock
          maxWidth="50vw"
          path={MintTile}
          title="MintTile"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: columns ? "row" : "column",
            maxWidth: "100vw",
            justifyContent: "space-between"
          }}
        >
          <PageText marginRight={columns ? 0 : "auto"} paddingBottom={columns ? "50px" : "0px"} text="Alternate Marks" />
          <PageText
            paddingTop={columns ? "50px" : "0px"}
            text="I worked closely with the Mint team to provide a flexible system that could work in today's evolving media space. 
            Typography and the application of our marks create distinctive sub-labels whilst staying true to the parent channel's style."
          />
        </Box>
      </Box>
      <ImageBlock path={MintAlternates} title="Mint Alternates" />
      <ImageBlock path={MintHeader} paddingTop='0px' paddingBottom='0px' maxWidth="66vw" title="Mint Header" />
      <PageFooter changedColor='#87edaf' />
    </>
  );
}
