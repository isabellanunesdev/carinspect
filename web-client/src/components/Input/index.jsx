import React from "react";
import styles from "./index.module.css";

export function Input({ type, placeholder, ...rest }) {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      {...rest}
    />
  );
}
