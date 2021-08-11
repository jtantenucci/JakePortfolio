import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MenuIcon from "@material-ui/icons/Menu";
import Link from "@material-ui/core/Link";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useSpring, animated } from "react-spring";
import { config } from 'react-spring'



const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(179, 179, 179, 1)',
  },
  linksContainer: {
    backgroundColor: "white",
    padding: theme.spacing(20, 20, 20),
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    height: 1080,
    paddingBottom: 400,
  },
  links: {
    fontStyle: "italic",
    fontSize: 72,
    fontFamily: "helvetica",
    color: 'rgba(179, 179, 179, 1)',
    padding: 5,
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  menuButton: {
    marginRight: 177,
    marginBottom: 0,
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
        if (open && onEnter) {
          onEnter();
        }
      },
      onRest: () => {
        if (!open && onExited) {
          onExited();
        }
      },
    });
  
    return (
      <animated.div ref={ref} style={style} {...other}>
        {children}
      </animated.div>
    );
  });

  Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
  };

export default function SpringMenu() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const preventDefault = (event) => event.preventDefault();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        edge="start"
        className={classes.menuButton}
        onClick={handleOpen}
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Fade}>
            <AppBar className={classes.appBar} elevation={0}>
            <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
                </IconButton>
            </Toolbar>
            </AppBar>
            <Fade in={open}>
              <div className={classes.linksContainer} >
                <Link href="/" className={classes.links}>
                    home
                </Link>
                <Link href="/work" className={classes.links}>
                    work
                </Link>
                <Link href="#" onClick={preventDefault} className={classes.links}>
                    about
                </Link>
                <Link href="#" onClick={preventDefault} className={classes.links}>
                    contact
                </Link>
                </div>
            </Fade>
        </Dialog>
    </div>
  );
}