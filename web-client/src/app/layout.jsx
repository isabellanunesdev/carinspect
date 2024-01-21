import React from "react";
import "../styles/globals.css";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;400;700&family=Roboto:wght@100;400;700&display=swap"
          rel="stylesheet"
        />
      </header>
      <body>{children}</body>
    </>
  );
}
