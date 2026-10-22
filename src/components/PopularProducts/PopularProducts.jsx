import styles from "./PopularProducts.module.css";
import ProductCard from "./ProductCard/ProductCard.jsx";

export default function PopularProducts() {
  return (
    <section className={`container ${styles.section}`} id="catalog">
      <div className={`${styles["section-heading"]}`}>
        <div>
          <p className={`${styles.eyebrow}`}>Подборка</p>
          <h2>Популярное сейчас</h2>
        </div>
        <a className={`${styles["text-link"]}`} href="#catalog">
          Весь каталог <span>→</span>
        </a>
      </div>
      <div className={`${styles["product-grid"]}`}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}
