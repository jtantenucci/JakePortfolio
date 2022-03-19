import React from "react";
import ImageList from "@mui/material/ImageList";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MainHoverImage from "./MainHoverImage";
import MainMenu from "./MainMenu";


export default function Collages({ styles }) {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      { columns ? <MainMenu /> : null }
      <ImageList className={styles.imageList} sx={{ width: "90vw", overflow: "hidden", backgroundClip: "border-box" }} cols={columns ? 2 : 1} gap={25}>
        <MainHoverImage img="/work/Mint.png" title="MadeIn502" />
        <MainHoverImage img="/work/Valk.png" title="Valkyrie" />
        <MainHoverImage img="/work/rayus.png" title="RayusRadiology" />
        <MainHoverImage img="/work/Spin.png" title="SpinItForward" />
      </ImageList>
    </>
  );
}
