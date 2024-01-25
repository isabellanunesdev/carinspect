"use client";
import axios from "axios";

import Link from "next/link";

import { useEffect, useState } from "react";
import { FiPlusCircle, FiMenu } from "react-icons/fi";
import { Card } from "@/components/Card";

import styles from "./page.module.css";

export default function Page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:80/portfolios/")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error(`Houve um erro: ${error}`));
  }, []);

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <FiMenu className={styles.menu} />
        <span className={styles.sectionHeader}>Meus veículos</span>
      </nav>
      <main className={styles.main}>
        <section className={styles.cardGrid}>
          {data.map((item, index) => (
            <Card
              key={index}
              image={item.vehicleImages[0]}
              altText={`${item.brand} ${item.model} ${item.manufactureYear}`}
              title={`${item.brand} ${item.model} ${item.manufactureYear}`}
              subtitle={item.licensePlate}
            />
          ))}
        </section>
        <FiPlusCircle className={styles.btnAdd} />
      </main>
    </div>
  );
}
