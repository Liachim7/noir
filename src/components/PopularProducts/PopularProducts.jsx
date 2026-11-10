import { useEffect, useState } from "react";
import { Link } from "react-router";
import { PATH } from "../../routing/routing.jsx";
import { ProductCard } from "./ProductCard/ProductCard.jsx";
import styles from "./PopularProducts.module.css";

export function PopularProducts() {
  const [products, setProducts] = useState([]);
  const [productsError, setProductsError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [categoriesError, setCategoriesError] = useState(null);

  useEffect(() => {
    fetch("/products")
      .then((response) => {
        if (!response.ok) throw new Error("Не удалось загрузить товары");
        return response.json();
      })
      .then(setProducts)
      .catch(setProductsError);
  }, []);

  useEffect(() => {
    fetch("/categories")
      .then((response) => {
        if (!response.ok) throw new Error("Не удалось загрузить категории");
        return response.json();
      })
      .then(setCategories)
      .catch(setCategoriesError);
  }, []);

  const categoriesById = Object.fromEntries(
    categories.map((category) => [category.id, category.title]),
  );

  return (
    <section className={`container ${styles.section}`}>
      <div className={styles["section-heading"]}>
        <div>
          <p className="eyebrow">Подборка</p>
          <h2>Популярное сейчас</h2>
        </div>
        <Link className="text-link" to={PATH.Catalog}>
          Весь каталог <span>→</span>
        </Link>
      </div>
      {productsError ? (
        <p className="empty-state" role="alert">Ошибка: {productsError.message}</p>
      ) : products.length === 0 ? (
        <p className="empty-state">Товары не найдены</p>
      ) : categoriesError ? (
        <p className="empty-state" role="alert">Ошибка: {categoriesError.message}</p>
      ) : (
        <div className="product-grid">
          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              category={categoriesById[product.categoryId] || ""}
            />
          ))}
        </div>
      )}
    </section>
  );
}
