import React from "react";
import Link from "next/link";

import { Input } from "../components/Input";
import { Button } from "../components/Button";

import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.leftPanel}></div>
      <div className={styles.container}>
        <h1 className={styles.logo}>Car Inspect</h1>
        <p className={styles.subtitle}>
          Receba diversas ofertas de seguro para seus veículos e economize
        </p>
        <div className={styles.inputGroup}>
          <Input type="email" placeholder="E-mail" required />
          <Input type="password" placeholder="Senha" required />
        </div>
        <Button title="Entrar" />
        <div className={styles.linksGroup}>
          <Link className={styles.recoverPassword} href="/recover_password">
            Esqueceu sua senha?
          </Link>
          <Link className={styles.register} href="/register">
            Não tem conta?
          </Link>
        </div>
      </div>
    </main>
  );
}
