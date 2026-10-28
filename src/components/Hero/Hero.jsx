import { Link } from "react-router";
import { PATH } from "../../routing/routing.jsx";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <p className="eyebrow">Меньше лишнего — больше своего</p>
        <h1>
          Вещи, которые
          <br />
          делают день лучше.
        </h1>
        <p className="hero-text">
          Продуманный дизайн, спокойные цвета и вещи на каждый день.
        </p>
        <Link className="btn btn-primary" to={PATH.Catalog}>
          Перейти в каталог <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="art-circle" />
        <div className="art-card art-card-one">
          <span>
            EVERYDAY
            <br />
            ESSENTIALS
          </span>
        </div>
        <div className="art-card art-card-two" />
      </div>
    </section>
  );
}
