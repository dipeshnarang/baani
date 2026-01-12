"use client";

import * as React from "react";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createCache from "@emotion/cache";
import theme from "./theme";

// Create an Emotion cache instance. Using a factory keeps it per-request on the server
// and avoids sharing styles between concurrent renders, which can cause hydration
// mismatches in the App Router.
const createEmotionCache = () =>
  createCache({
    key: "mui",
    prepend: true,
  });

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cache] = React.useState(() => {
    const emotionCache = createEmotionCache();
    // compat mode ensures `inserted` is populated for serialization
    emotionCache.compat = true;
    return emotionCache;
  });

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(" "),
      }}
    />
  ));

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
