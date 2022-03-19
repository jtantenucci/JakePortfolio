import { responsiveFontSizes } from '@material-ui/core';
import { createTheme } from '@mui/material/styles';

let theme = createTheme ({
  palette: {
    primary: {
      light: '#717681',
      main: '#000',
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
      hover: 'rgba(255, 255, 255, 1)',
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
    typography: {
      fontFamily: [
        'TWKLausanne-300',
        'TWKLausanne-400',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      h1: {
        fontFamily: 'TWKLausanne-400',
        fontSize: '8rem'
      }
    },
    components: {
      MuiLink: {
        defaultProps: {
          underline: 'none',
        }
      },
      MuiToolbar: {
        defaultProps: {
          backgroundColor: 'white',
        }
      },
      MuiAppBar: {
        defaultProps: {
          padding: 0,
          overflow: 0,
        }
      },
      MuiIconButton: {
        color: "#000"
      }
    }
});

export default responsiveFontSizes(theme);