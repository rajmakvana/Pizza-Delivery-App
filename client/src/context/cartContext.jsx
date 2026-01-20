import { createContext , useState} from "react";
export const CartContext = createContext();

const CartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (pizza) => {
        setCartItems([...cartItems , pizza])
    }

    return (
        <CartContext.Provider value={{cartItems , addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;