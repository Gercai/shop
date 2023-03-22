import "./shop.scss";
import "./css/navifooter.scss";
import { ProductDetails } from "./modules/ProductDetails.jsx";
import { Footer } from "./modules/Footer.jsx";
import { Navbar } from "./modules/Navbar.jsx";
import { ProductCard } from "./modules/ProductCard.jsx";
import { ShoppingCart } from "./modules/ShoppingCart.jsx";
import { Home } from "./modules/Home.jsx";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  // id, imageURL, category, title, description, size, color

  const [cartItems, setCartItems] = useState([
    { id: 1, title: "greenShirt", preis: 20, number: 2 },
    { id: 2, title: "greenShirt", preis: 20, number: 1 },
  ]);

  console.log(cartItems);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductCard />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        <Route
          path="/shoppingcart"
          element={<ShoppingCart cartItems={cartItems} />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
