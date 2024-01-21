import styles from "./style.module.css";

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
