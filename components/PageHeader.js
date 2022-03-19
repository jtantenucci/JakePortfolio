import React from "react";
import { useTheme } from "@mui/material/styles";
import styled from 'styled-components';
import Typography from '@mui/material/Typography';


const Head = styled.div`
    display: "flex";
    padding: 20px;
    align-items: "center";
    flex-direction: "row";
    justify-content: "space-evenly";
`

export default function MainMenu({title}) {
  const theme = useTheme();

  return (      
    <Head>
        <Typography variant='h1'>
            {title}
        </Typography>
    </Head>
  );
}
