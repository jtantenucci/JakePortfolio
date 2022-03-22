import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import AnimatedMenuItem from "../menu/AnimatedMenuItem";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useSpring, animated } from "react-spring";
import Trail from "../effects/Trail";

const Fade = React.forwardRef(function Fade(props, ref) {
  const theme = useTheme();
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

export default function SpringMenu({ changedColor, changedColor2, changedColor3 }) {
  const theme = useTheme();
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
      <IconButton sx={{ marginLeft: "5px"}} onClick={handleOpen} aria-label="menu">
        <MenuIcon sx={{color: "black"}}/>
      </IconButton>
      <Dialog
        fullScreen
        PaperProps={{ sx: {overflowX: "hidden", overflowY: "hidden"}, elevation: 0 }}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        scroll="body"
      >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <IconButton
              edge="start"
              color="primary"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        <Fade in={open}>
          <Box
            sx={{
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              height: "100vh",
              paddingBottom: "50px"
            }}
          >
            <Trail open={open}>
              <AnimatedMenuItem changedColor={changedColor} variant="h2" href="/" text="work" />
              <AnimatedMenuItem changedColor={changedColor2 ? changedColor2 : changedColor} variant="h2" href="/info" text="info" />
              <AnimatedMenuItem changedColor={changedColor3 ? changedColor3 : changedColor} variant="h2" href="/lab" text="lab" />
            </Trail>
          </Box>
        </Fade>
      </Dialog>
    </div>
  );
}
