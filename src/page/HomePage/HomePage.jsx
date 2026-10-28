import { Hero } from "../../components/Hero/Hero.jsx";
import Newsletter from "../../components/Newsletter/Newsletter.jsx";
import PopularProducts from "../../components/PopularProducts/PopularProducts.jsx";

export function HomePage() {
  return (
    <main>
      <Hero />
      <PopularProducts />
      <Newsletter />
    </main>
  );
}
