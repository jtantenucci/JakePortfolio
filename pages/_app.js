import "../styles/globals.css";
import { ThemeProvider } from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";
import Navigation from "../components/nav/Navigation";
import MainMenu from '../components/MainMenu';
import Footer from '../components/Footer';
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  const columns = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <ThemeProvider theme={theme}>
          { columns ? null : <Navigation />}
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
