import { Link } from "react-router";
import { PATH } from "../../routing/routing.jsx";

export function PageNotFound() {
  return (
    <main className="container page-main empty-state">
      <h1>404</h1>
      <p>Страница не найдена.</p>
      <Link className="btn btn-primary" to={PATH.Home}>На главную</Link>
    </main>
  );
}
