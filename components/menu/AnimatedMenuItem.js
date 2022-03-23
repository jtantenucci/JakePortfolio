import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import {Link as MuiLink} from '@mui/material';
import Typography from "@mui/material/Typography";

export default function AnimatedMenuItem({
  href,
  text,
  variant,
  sx,
  changedColor,
  useMui
}) {
  const [hover, setHover] = useState(false);
  AnimatedMenuItem.defaultProps = {
    changedColor: "#4287f5",
    useMui: false,
  };
  const [properties, set] = useSpring(() => ({
    config: config.molasses,
    opacity: 1,
    color: "#000",
    textDecoration: "none",
  }));

  const MouseEnter = () => {
    set({ opacity: 0.4, textDecoration: "line-through", color: changedColor });
    setHover(true);
  };

  const MouseLeave = () => {
    set({ opacity: 1, textDecoration: "none", color: "#000" });
    setHover(false);
  };

  const AnimatedLink = animated(Typography);
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {useMui ? 
        <MuiLink href={href}>
        <AnimatedLink
          sx={sx}
          variant={variant}
          typography={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
          style={{
            opacity: properties.opacity,
            textDecoration: properties.textDecoration,
            color: properties.color,
          }}
          onMouseEnter={MouseEnter}
          onMouseLeave={MouseLeave}
        >
          {text}
        </AnimatedLink>
      </MuiLink>
      :
      <Link passHref href={href}>
        <AnimatedLink
          sx={sx}
          variant={variant}
          typography={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
          style={{
            opacity: properties.opacity,
            textDecoration: properties.textDecoration,
            color: properties.color,
          }}
          onMouseEnter={MouseEnter}
          onMouseLeave={MouseLeave}
        >
          {text}
        </AnimatedLink>
      </Link>}
    </>
  );
}
