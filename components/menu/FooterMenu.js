import React from "react";
import { useTheme } from "@mui/material/styles";
import AnimatedMenuItem from "./AnimatedMenuItem";
import Box from '@mui/material/Box';
import useMediaQuery from "@mui/material/useMediaQuery";

export default function FooterMenu({ changedColor, changedColor2, changedColor3 }) {
    const theme = useTheme();
    const columns = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <>
            <Box sx={{ display: "flex", flexDirection: columns ? "row" : "column", paddingBottom: "25px", justifyContent: "flex-start" }}>
                <AnimatedMenuItem
                    href="https://www.instagram.com/la.brains/"
                    text="instagram"
                    variant="h4"
                    changedColor={changedColor}
                    sx={{
                        paddingRight: "10px",
                    }}
                />
                <AnimatedMenuItem
                    href="https://www.linkedin.com/in/jakelamothe/"
                    text="linkedin"
                    variant="h4"
                    changedColor={changedColor2 ? changedColor2 : changedColor}
                    sx={{
                        paddingRight: "10px",
                    }}
                />
                <AnimatedMenuItem
                    href="mailto:jake.lamothe@gmail.com"
                    text="email"
                    variant="h4"
                    changedColor={changedColor3 ? changedColor3 : changedColor}
                    sx={{
                        paddingRight: "10px",
                    }}
                />
            </Box>
        </>
    );
}
