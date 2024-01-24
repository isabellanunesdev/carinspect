import styles from "./index.module.css";

export function Button({ title, ...rest }) {
  return (
    <button className={styles.button} {...rest}>
      {title}
    </button>
  );
}
