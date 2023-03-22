import "./shop.scss";
import { ProductDetails } from "./modules/ProductDetails.jsx";
import { Footer } from "./modules/Footer.jsx";
import { Navbar } from "./modules/Navbar.jsx";
import { ProductCard } from "./modules/ProductCard.jsx";
import { ShoppingCart } from "./modules/ShoppingCart.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ShoppingCart />
      <ProductCard />
      <ProductDetails />
      <Footer />
    </div>
  );
}

export default App;
