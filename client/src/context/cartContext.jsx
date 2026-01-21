import { createContext , useState} from "react";
export const CartContext = createContext();
import { toast } from "react-toastify";

const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (pizza) => {
        setCartItems([...cartItems , pizza]);
        toast.success("Pizza added to cart!" , {icon : "🍕"});
    }

    return (
        <CartContext.Provider value={{cartItems , addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;