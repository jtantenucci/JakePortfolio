import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";


export default function ImageBlock({path, title, maxWidth, height, marginRight, marginLeft, paddingTop, paddingBottom}) {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));
  ImageBlock.defaultProps = {
    maxWidth: "100vw",
    height: "auto",
    marginRight: "auto",
    marginLeft: "auto",
    paddingTop: '100px',
    paddingBottom: '100px'
  }

  return (      
    <Box
      sx={{
        maxWidth: columns ? {maxWidth} : "100vw",
        height: {height},
        marginRight: {marginRight},
        marginLeft: {marginLeft},
        paddingTop: columns ? {paddingTop} : '50px',
        paddingBottom: columns ? {paddingBottom} : '50px'
      }}
    >
      <Image
        src={path}
        alt={title}
        quality={80}
        objectFit="contain"
      />
    </Box>
  );
}
