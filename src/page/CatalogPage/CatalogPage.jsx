import { useEffect, useState } from "react";
import { ProductCard } from "../../components/PopularProducts/ProductCard/ProductCard.jsx";
import styles from "./CatalogPage.module.css";

export function CatalogPage() {
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
    <main className="container page-main">
      <div className="page-heading">
        <p className="eyebrow">Выбирайте своё</p>
        <h1>Каталог</h1>
        <p>Продуманные вещи для повседневных ритуалов.</p>
      </div>
      <section className={styles["catalog-tools"]} aria-label="Поиск и фильтры">
        <label className={styles["search-box"]}>
          <span className="sr-only">Поиск товаров</span>
          <span aria-hidden="true">⌕</span>
          <input type="search" placeholder="Найти товар..." disabled />
        </label>
        <div className={styles["filter-group"]} aria-label="Категории">
          <span className={`${styles["filter-chip"]} ${styles.active}`}>Все товары</span>
          {categoriesError ? (
            <span role="alert">{categoriesError.message}</span>
          ) : (
            categories.map((category) => (
              <span className={styles["filter-chip"]} key={category.id}>
                {category.title}
              </span>
            ))
          )}
        </div>
        <label className={styles["sort-control"]}>
          Сортировка
          <select disabled defaultValue="default">
            <option value="default">По умолчанию</option>
          </select>
        </label>
      </section>

      {productsError ? (
        <p className="empty-state" role="alert">Ошибка: {productsError.message}</p>
      ) : products.length === 0 ? (
        <p className="empty-state">Товары не найдены</p>
      ) : (
        <>
          <p className={styles["results-count"]}>Найдено товаров: {products.length}</p>
          <div className={`product-grid ${styles["catalog-grid"]}`}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                category={categoriesById[product.categoryId] || ""}
              />
            ))}
          </div>
        </>
      )}
    </main>
  );
}
