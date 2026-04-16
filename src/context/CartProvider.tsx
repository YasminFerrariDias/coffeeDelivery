import { useState } from "react"
import { CartContext, type CartProps } from "./CartContext"

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCartState] = useState<CartProps[]>([])

  const setCart = (cart: CartProps[]) => {
    setCartState(cart)
  }

  function addToCart(newItem: CartProps) {
    const itemExists = cart.find(item => item.img === newItem.img)

    if (itemExists) {
      console.log("Já existe")
      
    } else {
      console.log("Não existe")
      setCart([...cart, newItem])
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        addToCart: addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
