import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import MiniMenu from "components/menu/MiniMenu";
import Navigation from "components/nav/Navigation";
import PageText from "components/PageText";

export default function Info() {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {columns ? null : <Navigation />}
      <Toolbar />
      <Box
        container
        sx={{ maxWidth: columns ? "75vw" : "90vw", marginLeft: "auto", marginRight: "auto"}}
      >
        {columns ? <MiniMenu /> : null}
      </Box>
      <Box
        container
        sx={{ maxWidth: columns ? "75vw" : "90vw", marginLeft: "auto", marginRight: "auto", paddingTop: columns? "50px" : "0px"}}
      >
        <Typography fontFamily="TWKLausanne-700" fontSize={columns ? 75 : 40}>
          A designer with experience in digital, motion and identity design.
        </Typography>
        <Typography
          sx={{ paddingTop: "50px" }}
          fontFamily="TWKLausanne-700"
          fontSize={columns ? 75 : 40}
        >
          I find ways to work concept-driven visuals into valuable brand
          experiences and long-lasting connections.  I am always open to new
          opportunities, so please feel free to say hi! 
        </Typography>
        <Typography
          sx={{ paddingTop: "50px" }}
          fontFamily="TWKLausanne-700"
          fontSize={columns ? 75 : 40}
        >
          Currently working as an
          Art Director @ LUDWIG+.
        </Typography>
      </Box>
    </>
  );
}
