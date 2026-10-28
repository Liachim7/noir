import ProductCard from "../../components/PopularProducts/ProductCard/ProductCard.jsx";

export function CatalogPage() {
  return (
    <main className="container page-main">
      <div className="page-heading">
        <p className="eyebrow">Выбирайте своё</p>
        <h1>Каталог</h1>
        <p>Продуманные вещи для повседневных ритуалов.</p>
      </div>
      <section className="catalog-tools" aria-label="Поиск и фильтры">
        <label className="search-box">
          <span className="sr-only">Поиск товаров</span>
          <span aria-hidden="true">⌕</span>
          <input type="search" placeholder="Найти товар..." disabled />
        </label>
        <div className="filter-group" aria-label="Категории">
          <span className="filter-chip active">Все товары</span>
          <span className="filter-chip">Аксессуары</span>
          <span className="filter-chip">Для дома</span>
          <span className="filter-chip">Одежда</span>
        </div>
        <label className="sort-control">
          Сортировка
          <select disabled defaultValue="default">
            <option value="default">По умолчанию</option>
          </select>
        </label>
      </section>
      <p className="results-count">Найдено товаров: 6</p>
      <div className="product-grid catalog-grid">
        <ProductCard name="Термокружка Daily" category="Аксессуары" price="1 490 ₽" art="art-mug" tag="Хит" />
        <ProductCard name="Сумка Everyday" category="Аксессуары" price="2 290 ₽" art="art-bag" tag="Новинка" />
        <ProductCard name="Настольная лампа Soft" category="Дом" price="3 490 ₽" art="art-lamp" />
        <ProductCard name="Футболка Basic" category="Одежда" price="1 790 ₽" art="art-shirt" />
        <ProductCard name="Наушники Flow" category="Аксессуары" price="4 990 ₽" art="art-headphones" />
        <ProductCard name="Блокнот Notes" category="Дом" price="690 ₽" art="art-notebook" />
      </div>
    </main>
  );
}
