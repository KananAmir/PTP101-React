import { useState } from "react"
import { BasketContext } from "./BasketContext"
import type { Movie } from "../types/movie"

export interface Basket extends Movie {
  quantity: number
}


const BasketProvider = ({ children }: { children: React.ReactNode }) => {
  const [basket, setBasket] = useState<Basket[]>([])


  const addToBasket = (movie: Movie) => {
    const idx = basket.findIndex((item) => item.id === movie.id)
    if (idx !== -1) {
      return;
    }
    setBasket([...basket, { ...movie, quantity: 1 }])
  }

  const removeFromBasket = (id: string) => {
    setBasket(basket.filter((item) => item.id !== id))
  }

  const clearBasket = () => {
    setBasket([])
  }

  const incrementQuantity = (id: string) => {
    setBasket(basket.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 }
      }

      return item
    }
    ))
  }

  const decrementQuantity = (id: string) => {
    
    setBasket(basket.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 }
      }
      return item

    }))
  }


  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket, clearBasket, incrementQuantity, decrementQuantity }}>{children}</BasketContext.Provider>
  )
}


export default BasketProvider    