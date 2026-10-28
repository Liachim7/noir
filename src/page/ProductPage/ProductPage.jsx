import { Link } from "react-router";
import { PATH } from "../../routing/routing.jsx";

export function ProductPage() {
  return (
    <main className="container page-main">
      <nav className="breadcrumbs" aria-label="Хлебные крошки">
        <Link to={PATH.Home}>Главная</Link>
        <span aria-hidden="true">/</span>
        <Link to={PATH.Catalog}>Каталог</Link>
        <span aria-hidden="true">/</span>
        <span>Термокружка Daily</span>
      </nav>
      <section className="product-detail">
        <div className="detail-image art-mug" aria-hidden="true">
          <span className="art-label">
            АКСЕССУАРЫ
            <br />
            NOIR OBJECTS
          </span>
          <div className="mug-shape" />
        </div>
        <div className="detail-info">
          <p className="eyebrow">Аксессуары · Артикул 001</p>
          <h1>Термокружка Daily</h1>
          <p className="detail-price">1 490 ₽</p>
          <p className="detail-description">
            Любимый напиток всегда под рукой. Минималистичная термокружка с
            удобной крышкой сохраняет температуру и легко вписывается в ваш день
            — от утренней дороги до вечерней прогулки.
          </p>
          <ul className="product-features">
            <li>Объём: 350 мл</li>
            <li>Материал: нержавеющая сталь</li>
            <li>Цвет: песочный</li>
          </ul>
          <button className="btn btn-primary btn-wide" type="button">
            Добавить в корзину <span aria-hidden="true">→</span>
          </button>
          <p className="cart-feedback" aria-live="polite" />
          <Link className="text-link back-link" to={PATH.Catalog}>
            ← Вернуться в каталог
          </Link>
        </div>
      </section>
    </main>
  );
}
