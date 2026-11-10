import { Link } from "react-router";
import { PATH } from "../../routing/routing.jsx";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles["site-footer"]}>
      <div className={`container ${styles["footer-inner"]}`}>
        <Link className={`logo ${styles["logo-light"]}`} to={PATH.Home}>
          NOIR<span>.</span>
        </Link>
        <p>Простые вещи. Хороший каждый день.</p>
        <small>© 2026 NOIR. Учебный проект.</small>
      </div>
    </footer>
  );
}
