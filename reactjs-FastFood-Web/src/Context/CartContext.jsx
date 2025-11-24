import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () => {

    let context = useContext(CartContext)
    if (!context) {
        throw new Error ("useCart must be used within a CartProvider")
    }
    return context

}

function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = ( cartItem, cartQty, cartDrink ) => {

        let productIndex = cartItems.findIndex((item) => {
            item.id === cartItem.id && item.cartDrink === cartDrink
        })

        if (productIndex === -1) {
            let product = { ...cartItem, cartQty , cartDrink }
            setCartItems([ ...cartItems , product ])
        }
        else {
            const copyCartItems = [...cartItems];
            copyCartItems[productIndex].cartQty += cartQty
            setCartItems([...copyCartItems])

        }

    }

    const updateCartQty = (cartItem , deltaQty) => {

        let index = cartItems.findIndex((item) => {
            item.id === cartItem.id && item.cartDrink === cartDrink
        })

        if (index !== -1) {
            const copyCartItems = [...cartItems];
            copyCartItems[productIndex].cartQty += deltaQty
            setCartItems([...copyCartItems])

        }

    }

    const removeCartItem = (cartItem) => {
        
        let filterdCartItems = cartItem.filter((item) => {
            item.id === cartItem.id ? item.cartDrink !== cartItem.cartDrink : true
        })
        setCartItems(filterdCartItems)

    }

    const getTotalItems = () => {
        return cartItems.reduce((total , item) => total + item.cartQty , 0)
    }

    const getTotalPrice = () => {
        return cartItems.reduce((total , item) => total + item.price * item.cartQty , 0)
    }

    const totalCartItems = getTotalItems();
    const totalCartPrice = getTotalPrice();

    return (
        <CartContext.Provider value={{ cartItems , addToCart , updateCartQty , removeCartItem , totalCartItems , totalCartPrice }}>
            {children}
        </CartContext.Provider>
    )
    
}

export default CartProvider