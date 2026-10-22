import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import PopularProducts from "./components/PopularProducts/PopularProducts.jsx";
import Newsletter from "./components/Newsletter/Newsletter.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PopularProducts />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
