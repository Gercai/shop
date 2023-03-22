import "./shop.scss";
import "./css/navifooter.scss";
import { ProductDetails } from "./modules/ProductDetails.jsx";
import { Footer } from "./modules/Footer.jsx";
import { Navbar } from "./modules/Navbar.jsx";
import { ProductCard } from "./modules/ProductCard.jsx";
import { ShoppingCart, CompactCart } from "./modules/ShoppingCart.jsx";
import { Home } from "./modules/Home.jsx";
import { Routes, Route } from "react-router-dom";
import { useState,useEffect } from "react";
import { calculatePrice } from "./functions/shopcartFunctions";
import { InsertForm } from "./modules/InsertForm.jsx"

function App() {
  // id, imageURL, category, title, description, size, color
  const [cartItems, setCartItems] = useState([]);
  const [gesamtPreis, setGesamtPreis] = useState(0);

useEffect(() => {
  calculatePrice(cartItems,setGesamtPreis)
},[cartItems])

  return (
    <div className="App">
      <Navbar />
     {cartItems.length?<CompactCart 
     cartItems={cartItems}
     setCartItems={setCartItems} 
     gesamtPreis={gesamtPreis}
     setGesamtPreis={setGesamtPreis}></CompactCart>:""}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductCard 
        
        cartItems={cartItems}
        setCartItems={setCartItems}
        />}></Route>
        <Route path="/products/:id" element={<ProductDetails 
        setCartItems={setCartItems} 
        gesamtPreis={gesamtPreis}
        />}></Route>
        <Route
          path="/shoppingcart"
          element={<ShoppingCart 
            cartItems={cartItems} 
            setCartItems={setCartItems} 
            gesamtPreis={gesamtPreis}
            setGesamtPreis={setGesamtPreis}
            />}
        ></Route>
        <Route path="/admin" element={<InsertForm />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
