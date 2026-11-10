import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { PATH } from "../../routing/routing.jsx";
import { ProductDetails } from "./ProductDetails/ProductDetails.jsx";
import styles from "./ProductPage.module.css";

export function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setProduct(null);
    setCategory(null);
    setError(null);

    fetch(`/products/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Не удалось загрузить товар");
        return response.json();
      })
      .then((productData) => {
        setProduct(productData);
        return fetch(`/categories/${productData.categoryId}`);
      })
      .then((response) => {
        if (!response.ok) throw new Error("Не удалось загрузить категорию");
        return response.json();
      })
      .then(setCategory)
      .catch(setError);
  }, [id]);

  if (error) {
    return (
      <main className="container page-main">
        <p className="empty-state" role="alert">Ошибка: {error.message}</p>
        <Link className="text-link" to={PATH.Catalog}>
          ← Вернуться в каталог
        </Link>
      </main>
    );
  }

  if (!product || !category) {
    return (
      <main className={`container page-main ${styles["product-page-state"]}`}>
        <p>Загрузка...</p>
      </main>
    );
  }

  return <ProductDetails product={product} category={category} />;
}
