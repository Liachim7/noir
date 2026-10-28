import { Route, Routes } from "react-router";
import { CartPage } from "../page/CartPage/CartPage.jsx";
import { CatalogPage } from "../page/CatalogPage/CatalogPage.jsx";
import { HomePage } from "../page/HomePage/HomePage.jsx";
import { PageNotFound } from "../page/PageNotFound/PageNotFound.jsx";
import { ProductPage } from "../page/ProductPage/ProductPage.jsx";

export const PATH = {
  Home: "/",
  Catalog: "/catalog",
  Product: "/product",
  Cart: "/cart",
  NotFound: "*",
};

export function Routing() {
  return (
    <Routes>
      <Route path={PATH.Home} element={<HomePage />} />
      <Route path={PATH.Catalog} element={<CatalogPage />} />
      <Route path={PATH.Product} element={<ProductPage />} />
      <Route path={PATH.Cart} element={<CartPage />} />
      <Route path={PATH.NotFound} element={<PageNotFound />} />
    </Routes>
  );
}
