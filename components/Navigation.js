import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import AppBar from "@material-ui/core/AppBar";
import SpringMenu from './SpringMenu';
import Toolbar from "@material-ui/core/Toolbar";
import Image from "next/image";
import Instagram from "mdi-material-ui/Instagram";
import Linkedin from "mdi-material-ui/Linkedin";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bg: {
    backgroundColor: "white",
  },
  bar: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    paddingTop: 12,
    opacity: 0.6,
  },
  icons: {
    color: 'rgba(179, 179, 179, 1)',
  }
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function Navigation(props) {
  const classes = useStyles();


  return (
    <div className={classes.root}>
     <ElevationScroll {...props}>
      <AppBar className={classes.bg} elevation={24}>
        <Toolbar className={classes.bar}>
          <div className={classes.logo}>
            <Image src="/logo.png" alt="namelogo" width={264} height={51} quality={100} />
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
      </ElevationScroll>
    </div>
  );
}
