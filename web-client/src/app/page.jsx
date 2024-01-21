import React from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.logo}>Car Inspect</h1>
        <div className={styles.inputGroup}>
          <Input type="text" placeholder="Nome" required />
          <Input type="email" placeholder="E-mail" required />
          <Input type="text" placeholder="CPF" required />
          <Input type="text" placeholder="Telefone" required />
          <Input type="password" placeholder="Senha" required />
        </div>
        <Button title="Começar" />
      </div>
    </main>
  );
}
