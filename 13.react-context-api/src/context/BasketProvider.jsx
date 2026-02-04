import { useEffect, useState } from "react"
import { BasketContext } from "./BasketContext"

const BasketProvider = ({ children }) => {
    const storedBasket = localStorage.getItem("basket")
    const [basket, setBasket] = useState(storedBasket ? JSON.parse(storedBasket) : [])


    const addToBasket = (book) => {
        setBasket((prevBasket) => [...prevBasket, { ...book, quantity: 1 }])
    }

    const removeFromBasket = (bookId) => {
        setBasket((prevBasket) => prevBasket.filter((b) => b.id !== bookId))
    }

    const isInBasket = (bookId) => {
        const idx = basket.findIndex((b) => b.id === bookId)

        if (idx === -1) {
            return false
        }
        return true
    }

    const increaseQuantity = (bookId) => {
        setBasket((prevBasket) => prevBasket.map((book) => {
            if (book.id !== bookId) return book
            return { ...book, quantity: book.quantity + 1 }
        }))
    }

    const decreaseQuantity = (bookId) => {
        setBasket((prevBasket) => prevBasket.map((book) => {
            if (book.id !== bookId) return book
            return { ...book, quantity: book.quantity - 1 }
        }))
    }

    const clearBasket = () => {
        if (window.confirm("Are you sure you want to clear the basket?")) {
            setBasket([])
        }
    }

    const totalPrice = basket.reduce((total, book) => total + book.price * book.quantity, 0)

    const totalBasketCount = basket.reduce((total, book) => total + book.quantity, 0)



    useEffect(()=>{
        localStorage.setItem("basket", JSON.stringify(basket))
    }, [basket])
    return (
        <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket, isInBasket, increaseQuantity, decreaseQuantity, clearBasket, totalBasketCount, totalPrice }}>{children}</BasketContext.Provider>
    )
}

export default BasketProvider



