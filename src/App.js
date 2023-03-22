import "./shop.scss";
import { ProductDetails } from "./modules/ProductDetails";
import { Footer } from "./modules/Footer";
import { Navbar } from "./modules/Navbar";
import { ProductCard } from "./modules/ProductCard";
import { ShoppingCart } from "./modules/ShoppingCart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Shoppingcart />
      <ProductCard />
      <ProductDetails />
      <Footer />
    </div>
  );
}

export default App;
