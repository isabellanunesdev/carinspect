import styles from "./style.module.css";

export function Button({ title }) {
  return <button className={styles.button}>{title}</button>;
}
