import { Link } from "react-router";
import { PATH } from "../../routing/routing.jsx";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles["hero-content"]}`}>
        <p className="eyebrow">Меньше лишнего — больше своего</p>
        <h1>
          Вещи, которые
          <br />
          делают день лучше.
        </h1>
        <p className={styles["hero-text"]}>
          Продуманный дизайн, спокойные цвета и вещи на каждый день.
        </p>
        <Link className="btn btn-primary" to={PATH.Catalog}>
          Перейти в каталог <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className={styles["hero-art"]} aria-hidden="true">
        <div className={styles["art-circle"]} />
        <div className={`${styles["art-card"]} ${styles["art-card-one"]}`}>
          <span>
            EVERYDAY
            <br />
            ESSENTIALS
          </span>
        </div>
        <div className={`${styles["art-card"]} ${styles["art-card-two"]}`} />
      </div>
    </section>
  );
}
