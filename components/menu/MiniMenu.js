import React from "react";
import { useTheme } from "@mui/material/styles";
import AnimatedMenuItem from "./AnimatedMenuItem";
import Box from '@mui/material/Box'

export default function MiniMenu({ changedColor, changedColor2, changedColor3 }) {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", paddingBottom: "25px", justifyContent: "flex-end" }}>
      <AnimatedMenuItem 
        href="/" 
        text="work" 
        variant="h3"
        changedColor={changedColor}
        sx={{ 
            paddingRight: "10px", 
            paddingLeft: '10px' 
        }} 
      />
      <AnimatedMenuItem 
        href="/Info" 
        text="info" 
        variant="h3"
        changedColor={changedColor2 ? changedColor2 : changedColor}
        sx={{ 
            paddingRight: "10px", 
            paddingLeft: '10px' 
        }} 
      />
      <AnimatedMenuItem 
        href="/Lab" 
        text="lab" 
        variant="h3"
        changedColor={changedColor3 ? changedColor3 : changedColor}
        sx={{ 
            paddingLeft: '10px' 
        }} 
      />
    </Box>
  );
}
