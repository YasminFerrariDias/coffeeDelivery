import { useState } from "react"
import { CartContext, type CartProps } from "./CartContext"
import type { CoffeeImage } from "../components/CartCard"

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

  function incrementItem(img: CoffeeImage) {
    const newCart = cart.map((item) => {
      if (item.img === img) {
        if (item.amount < 10) {
          return { ...item, amount: item.amount + 1 }
        } else {
        return item
      }
      } else {
        return item
      }
    })

    setCart(newCart)
  }

  function decrementItem(img: CoffeeImage) {
    const newCart = cart.map((item) => {
      if (item.img === img) {
        if (item.amount > 0) {
          return { ...item, amount: item.amount - 1 }
        } else {
        return item
      }
      } else {
        return item
      }
    })

    setCart(newCart)
  }

  function removeItem(img: CoffeeImage) {
    const newCart = cart.filter((item) => item.img != img)
    setCart(newCart)
  }

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        addToCart: addToCart,
        incrementItem: incrementItem,
        decrementItem: decrementItem,
        removeItem: removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
