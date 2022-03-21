import React from "react";
import { useTheme } from "@mui/material/styles";
import FooterMenu from "components/menu/FooterMenu";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'

export default function PageFooter({ changedColor, changedColor2, changedColor3 }) {
    const theme = useTheme();

    return (
        <>
            <Box container sx={{ marginLeft: "auto", marginRight: "auto", maxWidth: "90vw", display: "flex", flexDirection: "row", paddingTop: "100px", paddingBottom: "50px", justifyContent: "space-between" }}>
                <FooterMenu changedColor={changedColor} changedColor2={changedColor2 ? changedColor2 : changedColor} changedColor3={changedColor3 ? changedColor3 : changedColor} />
                <Typography sx={{ justifySelf: "end" }} variant="h4">
                    jake lamothe 2022©
                </Typography>
            </Box>
        </>
    );
}
