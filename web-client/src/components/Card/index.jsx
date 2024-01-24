import styles from "./styles.module.css";

export function Card({ image, altText, title, subtitle }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageContainer}>
        <img className={styles.cardImage} src={image} alt={altText} />
      </div>
      <div className={styles.cardTextArea}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <span className={styles.cardSubtitle}>{subtitle}</span>
      </div>
    </div>
  );
}
