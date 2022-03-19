import React from "react";
import { useTheme } from "@mui/material/styles";
import AnimatedMenuItem from "./AnimatedMenuItem";
import Box from '@mui/material/Box'

export default function MainMenu({ styles }) {
  const theme = useTheme();

  return (
    <Box sx={{ marginLeft: "auto", marginRight: "auto", justifyContent: "center", width: "90vw", display: "flex", paddingBottom: "100px" }}>
      <AnimatedMenuItem
        href="/"
        text="work"
        variant="h1"
        sx={{
          paddingRight: "50px",
          paddingLeft: '10px'
        }}
      />
      <AnimatedMenuItem 
        href="/Info" 
        text="info" 
        variant="h1" 
        sx={{
          paddingRight: "50px",
          paddingLeft: '50px'
        }} 
      />
      <AnimatedMenuItem 
        href="/Lab" 
        text="lab" 
        variant="h1" 
        sx={{ 
          paddingRight: "10px", 
          paddingLeft: '50px' 
        }} 
      />
    </Box>
  );
}
