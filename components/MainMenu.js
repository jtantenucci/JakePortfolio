import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import { useTheme } from "@mui/material/styles";
import AnimatedMenuItem from "./AnimatedMenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "@mui/material/Link";
import Box from '@mui/material/Box'

export default function MainMenu({ styles }) {
  const [hover, setHover] = useState(false);
  const [properties, set] = useSpring(() => ({
    opacity: 1,
  }));

  const MouseEnter = () => {
    set({ opacity: 0.75 });
    setHover(true);
  }

  const MouseLeave = () => {
    set({ opacity: 1 });
    setHover(false)
  }

  const AnimatedLink = animated(Link);
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{ display: "flex", paddingBottom: "100px" }}>
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
          paddingLeft: '10px'
        }} 
      />
      <AnimatedMenuItem 
        href="/Lab" 
        text="lab" 
        variant="h1" 
        sx={{ 
          paddingRight: "50px", 
          paddingLeft: '10px' 
        }} 
      />
    </Box>
  );
}
