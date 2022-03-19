import React from "react";
import { useTheme } from "@mui/material/styles";
import AnimatedMenuItem from "./menu/AnimatedMenuItem";
import FooterMenu from "./menu/FooterMenu";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'

export default function MiniMenu({ styles }) {
    const theme = useTheme();

    return (
        <>
            <Box container sx={{ marginLeft: "auto", marginRight: "auto", maxWidth: "90vw", display: "flex", flexDirection: "row", paddingTop: "100px", paddingBottom: "50px", justifyContent: "space-between" }}>
                <FooterMenu />
                <Typography sx={{ justifySelf: "end" }} variant="h4">
                    jake lamothe 2022©
                </Typography>
            </Box>
        </>
    );
}
