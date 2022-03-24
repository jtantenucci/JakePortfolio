import React from "react";
import { useTheme } from "@mui/material/styles";
import AnimatedMenuItem from "./AnimatedMenuItem";
import PageAnchorBox from "components/PageAnchorBox";
import Box from "@mui/material/Box";

export default function MiniMenu({ color, changedColor }) {
  const theme = useTheme();

  return (
    <>
      <PageAnchorBox>
        <Box
          sx={{
            display: "flex",
            paddingBottom: "25px",
            marginLeft: "auto",
            marginRight: "0",
            justifyContent: "flex-end",
          }}
        >
          <AnimatedMenuItem
            href="/"
            text="work"
            variant="h3"
            color={color}
            changedColor={changedColor}
            sx={{
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          />
          <AnimatedMenuItem
            href="/info"
            text="info"
            variant="h3"
            color={color}
            changedColor={changedColor}
            sx={{
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          />
          <AnimatedMenuItem
            href="/lab"
            text="lab"
            variant="h3"
            color={color}
            changedColor={changedColor}
            sx={{
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          />
        </Box>
      </PageAnchorBox>
    </>
  );
}
