import React from "react";
import { useTheme } from "@mui/material/styles";
import SpringMenu from "./SpringMenu";
import Toolbar from "@mui/material/Toolbar";
import { AppBar } from "@mui/material";
import PageAnchorBox from "components/PageAnchorBox";

export default function Navigation({
  lab,
  color,
  changedColor,
  changedColor2,
  changedColor3,
}) {
  const theme = useTheme();
  Navigation.defaultProps = {
    lab: false
  }
  return (
    <>
      <PageAnchorBox />
      <AppBar
        position="sticky"
        elevation={0}
        id="back-to-top-anchor"
        color={lab ? 'primary' : 'secondary'}
        sx={{
          paddingTop: "5px",
          paddingBottom: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          flexDirection: "row",
        }}
      >
        <SpringMenu
          lab={lab}
          color={color}
          changedColor={changedColor}
          changedColor2={changedColor2 ? changedColor2 : changedColor}
          changedColor3={changedColor3 ? changedColor3 : changedColor}
        />
      </AppBar>
    </>
  );
}
