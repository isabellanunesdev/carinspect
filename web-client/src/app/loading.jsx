"use client";

import CircularProgress from "@mui/material/CircularProgress";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import styles from "./loading.module.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#181818",
    },
    secondary: {
      main: "#c98b4d",
    },
  },
});

export default function Page() {
  return (
    <main className={styles.main}>
      <ThemeProvider theme={theme}>
        <CircularProgress color="secondary" />
      </ThemeProvider>
    </main>
  );
}
