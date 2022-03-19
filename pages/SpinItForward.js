import { Toolbar } from '@mui/material';
import { Box } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import React from 'react';
import useMediaQuery from "@mui/material/useMediaQuery";
import PageHeader from '../components/PageHeader';
import MiniMenu from '../components/MiniMenu';
import Navigation from '../components/nav/Navigation';


export default function SpinItForward() {
    const theme = useTheme();
    const columns = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <>
            { columns ? null : <Navigation /> }
            <Box container sx={{ marginLeft: "auto", marginRight: "auto", maxWidth: "90vw" }}>
                <Toolbar />
                { columns ? <MiniMenu/> : null }
                <PageHeader title="Spin It Forward"/>
            </Box>
        </>

    );
  }