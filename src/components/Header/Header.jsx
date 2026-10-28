import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { PATH } from "../../routing/routing.jsx";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="logo" to={PATH.Home} aria-label="NOIR — главная">
          NOIR<span>.</span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "×" : "☰"}
        </button>
        <nav
          className={`main-nav${menuOpen ? " open" : ""}`}
          aria-label="Основная навигация"
        >
          <Link className={pathname === PATH.Home ? "active" : undefined} to={PATH.Home}>
            Главная
          </Link>
          <Link className={pathname === PATH.Catalog ? "active" : undefined} to={PATH.Catalog}>
            Каталог
          </Link>
          <Link className={pathname === PATH.Cart ? "active" : undefined} to={PATH.Cart}>
            Корзина <span className="cart-count">0</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
