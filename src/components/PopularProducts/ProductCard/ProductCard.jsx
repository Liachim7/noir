import { Link } from "react-router";
import { PATH } from "../../../routing/routing.jsx";
import styles from "./ProductCard.module.css";

const formatPrice = (price) => `${new Intl.NumberFormat("ru-RU").format(price)} ₽`;

export function ProductCard({ product, category }) {
  return (
    <article className={styles["product-card"]}>
      <Link
        to={`${PATH.Product}/${product.id}`}
        aria-label={`Подробнее: ${product.title}`}
      >
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className={styles["product-meta"]}>
          <div>
            <p className={styles["product-name"]}>{product.title}</p>
            <p className={styles["product-category"]}>{category}</p>
          </div>
          <span className={styles["product-price"]}>{formatPrice(product.price)}</span>
        </div>
      </Link>
    </article>
  );
}
