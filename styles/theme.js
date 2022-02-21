import { createTheme } from '@material-ui/core';


const theme = createTheme ({
  palette: {
    primary: {
      light: '#717681',
      main: 'rgba(44, 45, 47, 0.9)',
      dark: 'rgba(1, 1, 1, 0.6)',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffffff',
      main: '#dbdbdb',
      dark: '#DBDDE6',
      contrastText: '#212121',
    },
    background: {
      paper: '#fff',
      default: '#fff',
    },
    action: {
      active: 'rgba(179, 179, 179, 1)',
      hover: 'rgba(255, 255, 255, 0.1)',
      hoverOpacity: 0.08,
      selected: 'rgba(199, 225, 235, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(113, 118, 129, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.1)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    }, 
    text: {
      primary: '#000000',
      secondary: '#929292'
    },
  },
    overrides: {
    MuiImageListItemBar: {
      subtitle: {
        color: '#929292'
      }  
    },
    MuiLink: {
      underlineHover: {
        color: '#fff',
        textDecoration: 'none',
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: '#fff',
        boxShadow: 0,
      },
    },
  },
});

export default theme;