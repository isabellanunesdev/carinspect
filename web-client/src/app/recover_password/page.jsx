import styles from "./page.module.css";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.leftPanel}></div>
      <div className={styles.container}>
        <h1 className={styles.logo}>Car Inspect</h1>
        <p className={styles.subtitle}>
          Se uma conta existir com o e-mail digitado, você receberá um link para
          criar uma nova senha
        </p>
        <div className={styles.inputGroup}>
          <Input type="email" placeholder="E-mail" required />
        </div>
        <Button title="Enviar" />
      </div>
    </main>
  );
}
