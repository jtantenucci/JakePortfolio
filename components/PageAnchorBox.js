import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export default function PageAnchorBox({ children }) {
  return (
    <>
      <Toolbar />
      <Box id="top-menu-anchor" sx={{ marginLeft: "auto", marginRight: "auto", maxWidth: "90vw" }}> 
       {children}
      </Box>
    </>
  );
}
