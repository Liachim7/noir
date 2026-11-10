import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { PATH } from "../../routing/routing.jsx";
import styles from "./Header.module.css";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header className={styles["site-header"]}>
      <div className={`container ${styles["header-inner"]}`}>
        <Link className="logo" to={PATH.Home} aria-label="NOIR — главная">
          NOIR<span>.</span>
        </Link>
        <button
          className={styles["menu-toggle"]}
          type="button"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "×" : "☰"}
        </button>
        <nav
          className={`${styles["main-nav"]}${menuOpen ? ` ${styles.open}` : ""}`}
          aria-label="Основная навигация"
        >
          <Link className={pathname === PATH.Home ? styles.active : undefined} to={PATH.Home}>
            Главная
          </Link>
          <Link className={pathname === PATH.Catalog ? styles.active : undefined} to={PATH.Catalog}>
            Каталог
          </Link>
          <Link className={pathname === PATH.Cart ? styles.active : undefined} to={PATH.Cart}>
            Корзина <span className={styles["cart-count"]}>0</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
