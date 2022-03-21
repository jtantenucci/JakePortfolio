import React from 'react';
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import PageHeader from 'components/PageHeader';
import useMediaQuery from "@mui/material/useMediaQuery";
import MiniMenu from 'components/menu/MiniMenu';
import Navigation from 'components/nav/Navigation';


export default function Info() {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
        { columns ? null : <Navigation /> }
        <Box container sx={{ maxWidth: "90vw", marginLeft: "auto", marginRight: "auto" }}>
            <Toolbar />
            { columns ? <MiniMenu/> : null }
            <PageHeader 
              variant="h2"
              title="A designer with experience in digital, motion and identity design. 
                    I find ways to work concept-driven visuals into valuable brand experiences and long-lasting connections. 
                    I'm always open to new opportunities, so please feel free to say hi! Currently working as an Art Director @ LUDWIG+."  
            />
        </Box>
    </>
  );
}