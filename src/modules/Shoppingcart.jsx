import { useState, useEffect } from "react";
import "../css/shoppingcart.scss";

export const ShoppingCart = ({ cartItems }) => {
  const [gesamtPreis, setGesamtPreis] = useState();

  useEffect(() => {
    calculateCard();
  }, [cartItems]);

  const calculateCard = () => {
    let total = cartItems.reduce((acc, cur) => {
      acc = acc + cur.preis;
    });
    setGesamtPreis(total);
  };

  const increment = (id) => {
console.log(id)
}

  const decrement = (id) => {
console.log(id)
  }

  return (
    cartItems && (
      <div className="shoppingCard">
        {cartItems.map((item, i) => (
          <div>
            <p>{item.preis}€</p>
            <p>{item.title}</p>
            <button onClick={increment(item.id)}>+</button>
            <button onClick={decrement(item.id)}>-</button>
          </div>
        ))}
        Total : {gesamtPreis}
      </div>
    )
  );
};

// compactCart ist für die schnellAnsicht
export const CompactCart = ({ cartItems }) => {
  const [gesamtPreis, setGesamtPreis] = useState();
  const calculateCard = () => {
    let total = cartItems.reduce((acc, cur) => {
      acc = acc + cur.preis;
    });
    setGesamtPreis(total);
  };
  return <></>;
};
