import styles from "./page.module.css";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.leftPanel}></div>
      <div className={styles.container}>
        <h1 className={styles.logo}>Car Inspect</h1>
        <p className={styles.subtitle}>Crie uma nova senha</p>
        <div className={styles.inputGroup}>
          <Input type="password" placeholder="Digite sua nova senha" required />
          <Input type="password" placeholder="Repita a nova senha" required />
        </div>
        <Button title="Redefinir senha" />
      </div>
    </main>
  );
}
