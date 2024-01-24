import Link from "next/link";

import styles from "./not-found.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.error}>404</h1>
        <p className={styles.subtitle}>Página não encontrada</p>
        <Link className={styles.link} href="/">
          Ir para a home
        </Link>
      </div>
    </main>
  );
}
