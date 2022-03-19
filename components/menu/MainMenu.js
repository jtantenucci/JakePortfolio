import React from "react";
import { useTheme } from "@mui/material/styles";
import AnimatedMenuItem from "./AnimatedMenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from '@mui/material/Box'

export default function MainMenu({ styles }) {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box sx={{ marginLeft: "auto", marginRight: "auto", justifyContent: "center", width: "90vw", display: "flex", paddingBottom: "100px" }}>
      <AnimatedMenuItem
        href="/"
        text="work"
        variant={columns? "h1" : "h2" }
        sx={{
          paddingRight: "50px",
          paddingLeft: '10px'
        }}
      />
      <AnimatedMenuItem 
        href="/Info" 
        text="info" 
        variant={columns? "h1" : "h2" }
        sx={{
          paddingRight: "50px",
          paddingLeft: '50px'
        }} 
      />
      <AnimatedMenuItem 
        href="/Lab" 
        text="lab" 
        variant={columns? "h1" : "h2" }
        sx={{ 
          paddingRight: "10px", 
          paddingLeft: '50px' 
        }} 
      />
    </Box>
  );
}
