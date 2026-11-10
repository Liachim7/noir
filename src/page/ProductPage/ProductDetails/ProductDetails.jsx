import { Link } from "react-router";
import { PATH } from "../../../routing/routing.jsx";
import styles from "./ProductDetails.module.css";

const formatPrice = (price) => `${new Intl.NumberFormat("ru-RU").format(price)} ₽`;

export function ProductDetails({ product, category }) {
  return (
    <main className="container page-main">
      <nav className={styles.breadcrumbs} aria-label="Хлебные крошки">
        <Link to={PATH.Home}>Главная</Link>
        <span aria-hidden="true">/</span>
        <Link to={PATH.Catalog}>Каталог</Link>
        <span aria-hidden="true">/</span>
        <span>{product.title}</span>
      </nav>
      <section className={styles["product-detail"]}>
        <div className={styles["detail-image"]}>
          <img src={product.image} alt={product.title} />
        </div>
        <div className={styles["detail-info"]}>
          <p className="eyebrow">{category.title} · Артикул {product.id}</p>
          <h1>{product.title}</h1>
          <p className={styles["detail-price"]}>{formatPrice(product.price)}</p>
          <p className={styles["detail-description"]}>{product.description}</p>
          <button className="btn btn-primary btn-wide" type="button">
            Добавить в корзину <span aria-hidden="true">→</span>
          </button>
          <p className={styles["cart-feedback"]} aria-live="polite" />
          <Link className={`text-link ${styles["back-link"]}`} to={PATH.Catalog}>
            ← Вернуться в каталог
          </Link>
        </div>
      </section>
    </main>
  );
}
