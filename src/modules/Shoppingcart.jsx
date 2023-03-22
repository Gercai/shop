import {useState, useEffect} from 'react';
import '../css/shoppingcart.scss';

export const ShoppingCart = ({cartItems}) => {

const [gesamtPreis, setGesamtPreis] = useState();

useEffect(() => {
    calculateCard();
},[cartItems])
    
const calculateCard = () => {
    let total = cartItems.reduce((acc, cur) => {
         acc = acc + cur.preis;
     })
     setGesamtPreis(total);
 }

return cartItems &&(
    <div className="shoppingCard">
        {cartItems.map((item,i) => (
            <div>
                <p>{item.preis}€</p>
                <p>{item.title}</p>
        <button>+</button>
        <button>-</button>
            </div>))}
            Total : {gesamtPreis}
    </div>);   
}

// compactCart ist für die schnellAnsicht
export const CompactCart = ({cartItems}) => {

    const [gesamtPreis, setGesamtPreis] = useState();
        const calculateCard = () => {
           let total = cartItems.reduce((acc, cur) => {
                acc = acc + cur.preis;
            })
            setGesamtPreis(total);
        }
    return (<></>)  
}
    