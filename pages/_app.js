import "../styles/globals.css";
import { ThemeProvider } from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";
import Navigation from "../components/nav/Navigation";
import PageFooter from '../components/PageFooter';
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  const columns = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <ThemeProvider theme={theme}>
          { columns ? null : <Navigation />}
      <Component {...pageProps} />
      <PageFooter />
    </ThemeProvider>
  );
}

export default MyApp;
