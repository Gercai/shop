import './shop.scss';
import {Productdetails} from './modules/Productdetails';
import {Footer} from './modules/Footer';
import {Navbar} from './modules/Navbar';
import {ProductCard} from './modules/ProductCard';
import {Shoppingcart} from './modules/Shoppingcart';

import {useEffect,useState} from 'react';


function App() {

  // id, imageURL, category, title, description, size, color

const [cartItems, setCartItems] = useState([{id: 1,
    title: "greenShirt",
  preis: 20},
  {id: 2,
    title: "greenShirt",
  preis: 20}]);

  console.log(cartItems);

  // useEffect(()=> {
  //   setCartItems(initialStateSC);
  // },[])

  return (
    <div className="App">
      <Navbar></Navbar>
      <Shoppingcart
        cartItems = {cartItems}
      />
      <ProductCard></ProductCard>
      <Productdetails></Productdetails>
      <Footer></Footer>
    </div>
  );
}

export default App;
