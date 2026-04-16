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
      const newCart = cart.map((item) => {
        if (item.img === newItem.img) {
          return {
            ...item,
            amount: Math.min(10, item.amount + newItem.amount)
          }
        }
        return item
      })
      console.log("Existe")
      setCart(newCart)
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
    const item = cart.find(item => item.img === img)
    
    if (!item) return // se item não existe, retorna
    
    if (item.amount === 1) {
        const newCart = cart.filter(item => item.img != img)
        setCart(newCart)
      } else {
        const newCart = cart.map((item) => {
          if (item.img === img) {
            return { ...item, amount: item.amount - 1 }
          }

          return item
        })

        setCart(newCart)
      }
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
