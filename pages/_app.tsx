// NextJS
import type { AppProps } from "next/app";

// React
import React, { ReactElement } from "react";

// Styles
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

export default function MyApp({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return <Component {...pageProps} />;
}
