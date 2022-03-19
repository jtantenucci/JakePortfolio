import React from "react";
import AppBar from "@mui/material/AppBar";
import { useTheme } from "@mui/material/styles";
import SpringMenu from './SpringMenu';
import Toolbar from "@mui/material/Toolbar";

export default function Navigation() {
  const theme = useTheme();
  return (
    <>
      <AppBar elevation={0}>
        <Toolbar sx={{ display: "flex", justifyContent: "center", backgroundColor: "white" }}>
            <SpringMenu />
        </Toolbar>
      </AppBar>
    </>
  );
}
