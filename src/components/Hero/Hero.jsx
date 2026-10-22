import styles from "./Hero.module.css";
export default function Hero() {
  return (
    <section className={`${styles.hero}`} id="home">
      <div className={`container ${styles["hero-content"]}`}>
        <p className={`${styles.eyebrow}`}>Меньше лишнего — больше своего</p>
        <h1>
          Вещи, которые
          <br />
          делают день лучше.
        </h1>
        <p className={`${styles["hero-text"]}`}>
          Продуманный дизайн, спокойные цвета и вещи на каждый день.
        </p>
        <a className={`${styles.btn} ${styles["btn-primary"]}`} href="#catalog">
          Перейти в каталог <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className={`${styles["hero-art"]}`} aria-hidden="true">
        <div className={`${styles["art-circle"]}`}></div>
        <div className={`${styles["art-card"]} ${styles["art-card-one"]}`}>
          <span>
            EVERYDAY
            <br />
            ESSENTIALS
          </span>
        </div>
        <div
          className={`${styles["art-card"]} ${styles["art-card-two"]}`}
        ></div>
      </div>
    </section>
  );
}
