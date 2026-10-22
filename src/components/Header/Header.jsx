import { useState } from "react";
import styles from "./Header.module.css";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={`${styles["site-header"]}`}>
      <div className={`container ${styles["header-inner"]}`}>
        <a
          className={`${styles.logo}`}
          href="#home"
          aria-label="NOIR — главная"
        >
          NOIR<span>.</span>
        </a>
        <button
          className={`${styles["menu-toggle"]}`}
          type="button"
          aria-label="Меню"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <nav
          className={`${styles["main-nav"]} ${menuOpen ? styles.open : ""}`}
          aria-label="Основная навигация"
        >
          <a className={`${styles.active}`} href="#home">
            Главная
          </a>
          <a href="#catalog">Каталог</a>
          <a href="#cart">
            Корзина <span className={`${styles["cart-count"]}`}>0</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
