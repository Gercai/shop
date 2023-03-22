import "./shop.scss";
import { ProductDetails } from "./modules/ProductDetails.jsx";
import { Footer } from "./modules/Footer.jsx";
import { Navbar } from "./modules/Navbar.jsx";
import { ProductCard } from "./modules/ProductCard.jsx";
import { ShoppingCart } from "./modules/ShoppingCart.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/products" element={<ProductCard />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        <Route to="/shoppingcart" element={<ShoppingCart />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
