import React from "react";
import { useTheme } from "@mui/material/styles";
import AnimatedMenuItem from "./AnimatedMenuItem";
import Box from '@mui/material/Box'

export default function MiniMenu({ styles }) {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", paddingBottom: "25px", justifyContent: "flex-end" }}>
      <AnimatedMenuItem 
        href="/" 
        text="work" 
        variant="h3"
        sx={{ 
            paddingRight: "10px", 
            paddingLeft: '10px' 
        }} 
      />
      <AnimatedMenuItem 
        href="/Info" 
        text="info" 
        variant="h3"
        sx={{ 
            paddingRight: "10px", 
            paddingLeft: '10px' 
        }} 
      />
      <AnimatedMenuItem 
        href="/Lab" 
        text="lab" 
        variant="h3"
        sx={{ 
            paddingRight: "10px", 
            paddingLeft: '10px' 
        }} 
      />
    </Box>
  );
}
