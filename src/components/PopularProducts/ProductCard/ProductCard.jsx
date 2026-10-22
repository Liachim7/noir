import styles from "./ProductCard.module.css";
export default function ProductCard() {
  return (
    <article className={`${styles["product-card"]}`}>
      <a href="#product" aria-label="Подробнее о товаре">
        <div className={`${styles["product-image"]} ${styles["art-mug"]}`}>
          <span className={`${styles["product-tag"]}`}>Хит</span>
          <div className={`${styles["product-shape"]}`}></div>
        </div>
        <div className={`${styles["product-meta"]}`}>
          <div>
            <p className={`${styles["product-name"]}`}>Термокружка Daily</p>
            <p className={`${styles["product-category"]}`}>Аксессуары</p>
          </div>
          <span className={`${styles["product-price"]}`}>1 490 ₽</span>
        </div>
      </a>
    </article>
  );
}
