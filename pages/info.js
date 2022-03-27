import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import MiniMenu from "components/menu/MiniMenu";
import Navigation from "components/nav/Navigation";
import Link from "@mui/material/Link";
import PageFooter from "components/PageFooter";
import HeadComponent from "components/HeadComponent";
import AnimatedMenuItem from "components/menu/AnimatedMenuItem";
import AnimatedDownload from "components/menu/AnimatedDownload";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ContactPageIcon from '@mui/icons-material/ContactPage';

export default function Info() {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `JLResume.pdf`;
    link.href = "./JLResume.pdf";
    link.click();
  };

  return (
    <>
      <HeadComponent></HeadComponent>
      { columns ? <MiniMenu color="#000" /> : <Navigation /> }
      <Box container sx={{ maxWidth: columns ? "75vw" : "90vw", marginLeft: "auto", marginRight: "auto", paddingTop: columns ? "50px" : "0px" }}>
        <Typography fontFamily="TWKLausanne-300" fontSize={ columns ? 75 : 40 }>
          A designer with experience in digital, motion and identity design. I
          find ways to work concept-driven visuals into valuable brand
          experiences and long-lasting connections. I am always open to new
          opportunities, so please feel free to say hi!
        </Typography>
        <Typography
          sx={{ paddingTop: "50px" }}
          fontFamily="TWKLausanne-300"
          fontSize={columns ? 75 : 40}
        >
          Currently working as an Art Director
        </Typography>
          <AnimatedMenuItem
            color="#000"
            useMui="false"
            sx={{ fontSize: columns ? 75 : 40 }}
            fontFamily="TWKLausanne-300"
            href="http://www.ludwigplus.com"
            text="@LUDWIG+."
          />
      </Box>
      <Box container sx={{ maxWidth: columns ? "75vw" : "90vw", marginLeft: "auto", marginRight: "auto", paddingTop: "50px", paddingBottom: "50px" }}>
        <AnimatedDownload
          color="#000"
          useMui="false"
          onClick={onDownload}
          sx={{
            "&:hover": {
              cursor: "pointer",
              },
            alignContent: "center",
            fontSize: columns ? 75 : 40, 
          }}
          fontFamily="TWKLausanne-300"
          height="3px"
        >
          resume<FileDownloadIcon sx={{ paddingTop: "30px"}} fontSize="inherit"/>
        </AnimatedDownload>
      </Box>
      <PageFooter color="#000" />
    </>
  );
}
