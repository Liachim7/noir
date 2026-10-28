import { Footer } from "./components/Footer/Footer.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Routing } from "./routing/routing.jsx";

export default function App() {
  return (
    <div className="layout">
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}
