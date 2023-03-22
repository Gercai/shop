export const addToShopCart = (item,cartItems,setCartItems,setGesamtPreis) => {
    
    let processingCartItem = {
        id: item.id,
        title: item.title,
        preis: item.price,
        count: 1
    };

setCartItems([...cartItems,processingCartItem]);
}


export const incrementCart = (cartItems, changeItem,setCartItems) => {

 
const newItem = cartItems.map((item) => {
    if(item.id === changeItem.id){
        let quant = item.count + 1;
        let newItem = {...item, count: quant};
        return newItem
    }else{
        let newItem = item;
        return newItem;
    }
}).filter(item => item.count >0)


setCartItems(newItem); 
}

export const decrementCart = (cartItems, changeItem,setCartItems) => {

    const newItem = cartItems.map((item) => {
        if(item.id === changeItem.id){
            let quant = item.count - 1;
            let newItem = {...item, count: quant};
            return newItem
        }else{
            let newItem = item;
            return newItem;
        }
    }).filter(item => item.count >0)
    setCartItems(newItem); 
}


export const calculatePrice = (cartItems, setGesamtPreis) => {
    let total = cartItems.reduce((acc, cur) => acc + parseInt(cur.preis) * cur.count
    ,0);
    setGesamtPreis(total);
};