import React from "react";
import { useTheme } from "@mui/material/styles";
import SpringMenu from "./SpringMenu";
import Toolbar from "@mui/material/Toolbar";
import { AppBar } from "@mui/material";

export default function Navigation({
  changedColor,
  changedColor2,
  changedColor3,
}) {
  const theme = useTheme();
  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        id="back-to-top-anchor"
        sx={{
          paddingTop: "5px",
          paddingBottom: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          flexDirection: "row",
          backgroundColor: "white",
        }}
      >
        <SpringMenu
          changedColor={changedColor}
          changedColor2={changedColor2 ? changedColor2 : changedColor}
          changedColor3={changedColor3 ? changedColor3 : changedColor}
        />
      </AppBar>
    </>
  );
}
