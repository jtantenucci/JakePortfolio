import React from "react";
import { useTheme } from "@mui/material/styles";
import SpringMenu from './SpringMenu';
import Toolbar from "@mui/material/Toolbar";

export default function Navigation({ changedColor, changedColor2, changedColor3 }) {
  const theme = useTheme();
  return (
    <>
      <Toolbar sx={{ display: "flex", justifyContent: "center", backgroundColor: "white" }}>
          <SpringMenu changedColor={changedColor} changedColor2={changedColor2 ? changedColor2 : changedColor} changedColor3={changedColor3 ? changedColor3 : changedColor}  />
      </Toolbar>
    </>
  );
}
