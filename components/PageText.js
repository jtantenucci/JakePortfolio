import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function PageText({ text, marginLeft, marginRight, maxWidth, paddingTop, paddingBottom }) {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up("md"));
  PageText.defaultProps = {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "50vw",
    paddingTop: "50px",
    paddingBottom: "50px"
  }

  return (      
    <Box
      sx={{
        marginLeft: {marginLeft},
        marginRight: {marginRight},
        maxWidth: columns ? {maxWidth} : '100vw',
        paddingTop: {paddingTop},
        paddingBottom: {paddingBottom}
      }}
    >
        <Typography 
            sx={{ lineHeight: "50px"}}
            variant={columns ? 'h4' : 'h6' }
        >
            {text}
        </Typography>
    </Box>
  );
}
