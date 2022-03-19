import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "@mui/material/Link";
import Box from '@mui/material/Box'

export default function MainMenu({ styles }) {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));

  return (      
    <Box sx={{ display: "flex", paddingBottom: "100px" }}>
        <Link sx={{paddingRight: "50px", paddingLeft: '10px'}} href="/" variant='h1'>
            work
        </Link>
        <Link sx={{paddingRight: "50px", paddingLeft: "50px"}} href="/info" variant='h1'>
            info
        </Link>
        <Link sx={{paddingLeft: "50px", paddingRight:'10px'}} href="/lab" variant='h1'>
            lab
        </Link>
    </Box>
  );
}
