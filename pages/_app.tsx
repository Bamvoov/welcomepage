import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic"; // 1. Import dynamic

// 2. Import CursorTracker dynamically and disable Server-Side Rendering (SSR)
const CursorTracker = dynamic(() => import("../components/CursorTracker"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme === "dark" ? "dark" : "light"
    );
  }, [theme]);

  return (
    <>
      {/* Cursor follows across all pages */}
      <CursorTracker />

      {/* App content */}
      <Component {...pageProps} theme={theme} setTheme={setTheme} />
    </>
  );
}

export default MyApp;
