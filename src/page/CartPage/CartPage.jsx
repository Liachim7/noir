import { Link } from "react-router";
import { PATH } from "../../routing/routing.jsx";

export function CartPage() {
  return (
    <main className="container page-main">
      <div className="page-heading">
        <p className="eyebrow">Ваш выбор</p>
        <h1>Корзина</h1>
        <p>Товары, которые вы добавили.</p>
      </div>
      <section className="cart-content" aria-label="Содержимое корзины">
        <div className="cart-empty">
          <h2>В корзине пока пусто</h2>
          <p>Загляните в каталог и выберите что-нибудь для себя.</p>
          <Link className="btn btn-primary" to={PATH.Catalog}>
            Перейти в каталог →
          </Link>
        </div>
      </section>
    </main>
  );
}
