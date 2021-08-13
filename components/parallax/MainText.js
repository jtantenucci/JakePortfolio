import styles from "../../styles/Home.module.css";

export default function MainText() {
  return (
    <>
      <h1 className={styles.title}>this is placeholder text.</h1>
      <h2 className={styles.subtitle}>
        this text serves as an introduction to the artist and portfolio at hand.
      </h2>
      <hr className={styles.horizrule} />
      <h3 className={styles.description}>
        this is some descriptor text for the portfolio.
      </h3>
    </>
  );
}
