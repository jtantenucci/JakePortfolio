import React from "react";
import { useTheme } from "@mui/material/styles";
import PageAnchorBox from "components/PageAnchorBox";
import AnimatedMenuItem from "./AnimatedMenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";

export default function MainMenu({ changedColor }) {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      <PageAnchorBox>
        <Box
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
            justifyContent: "center",
            width: "90vw",
            display: "flex",
            paddingBottom: "100px",
          }}
        >
          <AnimatedMenuItem
            href="/"
            text="work"
            variant={columns ? "h1" : "h2"}
            changedColor={changedColor}
            sx={{
              paddingRight: "50px",
              paddingLeft: "10px",
            }}
          />
          <AnimatedMenuItem
            href="/info"
            text="info"
            variant={columns ? "h1" : "h2"}
            changedColor={changedColor}
            sx={{
              paddingRight: "50px",
              paddingLeft: "50px",
            }}
          />
          <AnimatedMenuItem
            href="/lab"
            text="lab"
            variant={columns ? "h1" : "h2"}
            changedColor={changedColor}
            sx={{
              paddingRight: "10px",
              paddingLeft: "50px",
            }}
          />
        </Box>
      </PageAnchorBox>
    </>
  );
}
