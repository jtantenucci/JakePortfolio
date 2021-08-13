import "../styles/globals.css";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import Navigation from "../components/nav/Navigation";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
