import React from "react";
import { useTheme } from "@mui/material/styles";
import AnimatedMenuItem from "./AnimatedMenuItem";
import Box from '@mui/material/Box'

export default function FooterMenu({ styles }) {
    const theme = useTheme();

    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "row", paddingBottom: "25px", justifyContent: "flex-start" }}>
                <AnimatedMenuItem
                    href="https://www.instagram.com/la.brains/"
                    text="instagram"
                    variant="h4"
                    sx={{
                        paddingRight: "10px",
                    }}
                />
                <AnimatedMenuItem
                    href="https://www.linkedin.com/in/jakelamothe/"
                    text="linkedin"
                    variant="h4"
                    sx={{
                        paddingRight: "10px",
                        paddingLeft: '10px'
                    }}
                />
                <AnimatedMenuItem
                    href="mailto:jake.lamothe@gmail.com"
                    text="email"
                    variant="h4"
                    sx={{
                        paddingRight: "10px",
                        paddingLeft: '10px'
                    }}
                />
            </Box>
        </>
    );
}
