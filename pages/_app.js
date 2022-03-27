import "styles/globals.css";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { ThemeProvider } from "@mui/material/styles";
import { animated, Transition, config } from "react-spring";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "src/createEmotionCache";
import useMediaQuery from "@mui/material/useMediaQuery";
import ScrollTop from "components/effects/ScrollTop";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import theme from "styles/theme";

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps, ...props }) {
  const columns = useMediaQuery(theme.breakpoints.up("md"));
  const emotionCache = clientSideEmotionCache;
  const router = useRouter();
  const items = [
    {
      id: router.route,
      Component,
      pageProps,
    },
  ];

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Transition
          items={items}
          keys={(item) => item.id}
          from={{ opacity: 0 }}
          initial={{ opacity: 1 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
          config={config.gentle}
        >
          {(
            styles,
            {
              pageProps: animatedPageProps,
              Component: AnimatedComponent,
            },
            key
          ) => (
            <animated.div
              key={key}
              style={{
                ...styles,
                width: "100vw",
                height: "100vw",
              }}
            >
              <AnimatedComponent {...animatedPageProps} />
              <ScrollTop {...props}>
                <Fab
                  sx={{
                    background: theme.palette.tertiary.main,
                    color: theme.palette.secondary.main,
                  }}
                  variant="extended"
                  size="medium"
                  aria-label="scroll back to top"
                >
                  <KeyboardArrowUpIcon />
                </Fab>
              </ScrollTop>
            </animated.div>
          )}
        </Transition>
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
