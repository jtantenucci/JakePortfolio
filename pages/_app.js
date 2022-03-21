import "styles/globals.css";
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from 'src/createEmotionCache';
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "styles/theme";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const columns = useMediaQuery(theme.breakpoints.up("md"));
  const { Component, emotionCache = 
    clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
