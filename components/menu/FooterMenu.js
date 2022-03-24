import React from "react";
import { useTheme } from "@mui/material/styles";
import AnimatedMenuItem from "./AnimatedMenuItem";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function FooterMenu({
  color,
  changedColor,
  changedColor2,
  changedColor3,
}) {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Box
        sx={{
          marginRight: "auto",
          marginLeft: "0px",
          display: "flex",
          flexDirection: columns ? "row" : "column",
          paddingBottom: "25px",
          justifyContent: "space-evenly",
        }}
      >
        <AnimatedMenuItem
          useMui="false"
          href="https://www.instagram.com/la.brains/"
          text="instagram"
          color={color}
          variant={columns ? "h4" : "h5"}
          changedColor={changedColor}
          height="2px"
          changedWidth="90%"
          sx={{
            paddingRight: "10px",
          }}
        />
        <AnimatedMenuItem
          useMui="false"
          href="https://www.linkedin.com/in/jakelamothe/"
          text="linkedin"
          color={color}
          variant={columns ? "h4" : "h5"}
          changedColor={changedColor2 ? changedColor2 : changedColor}
          height="2px"
          changedWidth={ columns ? "90%" : "72%" }
          sx={{
            paddingRight: "10px",
          }}
        />
        <AnimatedMenuItem
          useMui="false"
          href="mailto:jake.lamothe@gmail.com"
          text="email"
          color={color}
          variant={columns ? "h4" : "h5"}
          changedColor={changedColor3 ? changedColor3 : changedColor}
          height="2px"
          changedWidth={ columns ? "90%" : "50%" }
          sx={{
            paddingRight: "10px",
          }}
        />
      </Box>
    </>
  );
}
