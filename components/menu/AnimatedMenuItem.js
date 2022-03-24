import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import {Link as MuiLink} from '@mui/material';
import Typography from "@mui/material/Typography";

export default function AnimatedMenuItem({
  changedWidth,
  height,
  color,
  href,
  text,
  variant,
  sx,
  changedColor,
  useMui
}) {
  const [hover, setHover] = useState(false);
  AnimatedMenuItem.defaultProps = {
    changedWidth: "100%",
    changedColor: "#4287f5",
    height: "5px",
    useMui: false,
  };
  const [properties, set] = useSpring(() => ({
    config: config.molasses,
    opacity: 1,
    color: color,
    textDecoration: "none",
  }));

  const [stProps, setSt] = useSpring(() => ({
    config: config.default,
    width: "0%",
  }));

  const MouseEnter = () => {
    set({ opacity: 0.4, color: changedColor });
    setSt({ width: changedWidth } );
    setHover(true);
  };

  const MouseLeave = () => {
    set({ opacity: 1, color: color });
    setSt({ width: "0%"} );
    setHover(false);
  };

  const AnimatedLink = animated(Typography);
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {useMui ? 
        <div style={{ position: "relative", display: "inline-block" }}>
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
      <animated.div
          onMouseEnter={MouseEnter}
          onMouseLeave={MouseLeave}
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            justifyContent: "center",
            width: stProps.width,
            height: height,
            opacity: properties.opacity,
            background: properties.color,
          }}
        />
      </div>
      :
      <div style={{ position: "relative", display: "inline-block" }}>
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
      </Link>
      <animated.div
          onMouseEnter={MouseEnter}
          onMouseLeave={MouseLeave}
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            justifySelf: "center",
            width: stProps.width,
            height: height,
            opacity: properties.opacity,
            background: properties.color,
          }}
        />
      </div>}
    </>
  );
}
