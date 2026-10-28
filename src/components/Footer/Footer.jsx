import { Link } from "react-router";
import { PATH } from "../../routing/routing.jsx";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Link className="logo logo-light" to={PATH.Home}>
          NOIR<span>.</span>
        </Link>
        <p>Простые вещи. Хороший каждый день.</p>
        <small>© 2026 NOIR. Учебный проект.</small>
      </div>
    </footer>
  );
}
