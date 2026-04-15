import { useState } from "react"
import { CartContext, type CartProps } from "./CartContext"

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCartState] = useState<CartProps[]>([])

  const setCart = (cart: CartProps[]) => {
    setCartState(cart)
  }

  function addToCart(item: CartProps) {
    setCart([...cart, item])
    console.log(item)
  }

    console.log(cart)
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
