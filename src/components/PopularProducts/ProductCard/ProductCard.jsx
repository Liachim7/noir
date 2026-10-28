import { Link } from "react-router";
import { PATH } from "../../../routing/routing.jsx";

export default function ProductCard({ name, category, price, art, tag }) {
  return (
    <article className="product-card">
      <Link to={PATH.Product} aria-label={`Подробнее: ${name}`}>
        <div className={`product-image ${art}`} aria-hidden="true">
          {tag && <span className="product-tag">{tag}</span>}
          <div className="product-shape" />
        </div>
        <div className="product-meta">
          <div>
            <p className="product-name">{name}</p>
            <p className="product-category">{category}</p>
          </div>
          <span className="product-price">{price}</span>
        </div>
      </Link>
    </article>
  );
}
