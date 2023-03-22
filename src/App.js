import './shop.scss';
import {Productdetails} from './modules/ProductDetails';
import {Footer} from './modules/Footer';
import {Navbar} from './modules/Navbar';
import {ProductCard} from './modules/ProductCard';
import {Shoppingcart} from './modules/shopping';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Shoppingcart></Shoppingcart>
      <ProductCard></ProductCard>
      <Productdetails></Productdetails>
      <Footer></Footer>
    </div>
  );
}

export default App;
