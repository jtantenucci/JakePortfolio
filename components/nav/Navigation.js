import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import SpringMenu from './SpringMenu';
import Toolbar from "@material-ui/core/Toolbar";
import Image from "next/image";
import Instagram from "mdi-material-ui/Instagram";
import Linkedin from "mdi-material-ui/Linkedin";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bg: {
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  bar: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    paddingTop: 12,
    opacity: 0.7,
  },
  icons: {
    color: 'rgba(179, 179, 179, 1)',
  }
}));


export default function Navigation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.bg} elevation={0}>
        <Toolbar className={classes.bar}>
          <div className={classes.logo}>
            <Image src="/logo.png" alt="namelogo" width={224.4} height={43.35} quality={100} />
          </div>
          <div>
            <SpringMenu />
          </div>
          <div>
            <Instagram className={classes.icons} />
            <Linkedin className={classes.icons} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
