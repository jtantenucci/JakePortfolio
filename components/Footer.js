import React from "react";
import { useTheme } from "@mui/material/styles";
import AnimatedMenuItem from "./AnimatedMenuItem";
import FooterMenu from "./FooterMenu";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'

export default function MiniMenu({ styles }) {
    const theme = useTheme();

    return (
        <>
            <Box container sx={{ marginLeft: "auto", marginRight: "auto", maxWidth: "90vw", display: "flex", flexDirection: "row", paddingBottom: "25px", justifyContent: "space-between" }}>
                <FooterMenu />
                <Typography sx={{ justifySelf: "end" }} variant="h4">
                    jake lamothe 2022©
                </Typography>
            </Box>
        </>
    );
}
