import styles from "./style.module.css";

export function Button({ title, ...rest }) {
  return (
    <button className={styles.button} {...rest}>
      {title}
    </button>
  );
}
