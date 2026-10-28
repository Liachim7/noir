import { Link } from "react-router";
import { PATH } from "../../routing/routing.jsx";
import ProductCard from "./ProductCard/ProductCard.jsx";

export default function PopularProducts() {
  return (
    <section className="section container">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Подборка</p>
          <h2>Популярное сейчас</h2>
        </div>
        <Link className="text-link" to={PATH.Catalog}>
          Весь каталог <span>→</span>
        </Link>
      </div>
      <div className="product-grid">
        <ProductCard name="Термокружка Daily" category="Аксессуары" price="1 490 ₽" art="art-mug" tag="Хит" />
        <ProductCard name="Сумка Everyday" category="Аксессуары" price="2 290 ₽" art="art-bag" tag="Новинка" />
        <ProductCard name="Настольная лампа Soft" category="Дом" price="3 490 ₽" art="art-lamp" />
        <ProductCard name="Футболка Basic" category="Одежда" price="1 790 ₽" art="art-shirt" />
      </div>
    </section>
  );
}
