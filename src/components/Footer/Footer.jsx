import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={`${styles["site-footer"]}`} id="cart">
      <div className={`container ${styles["footer-inner"]}`}>
        <a className={`${styles.logo} ${styles["logo-light"]}`} href="#home">
          NOIR<span>.</span>
        </a>
        <p>Простые вещи. Хороший каждый день.</p>
        <small>© 2026 NOIR. Учебный проект.</small>
      </div>
    </footer>
  );
}
