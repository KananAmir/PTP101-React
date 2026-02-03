import { useEffect, useState } from "react"
import { WishlistContext } from "./WishlistContext"

const WishlistProvider = ({ children }) => {
    const storedWishlist = localStorage.getItem("wishlist")

    const [wishlist, setWishlist] = useState(
        storedWishlist ? JSON.parse(storedWishlist) : []
    )

    const toggleWishlist = (book) => {
        const idx = wishlist.findIndex((b) => b.id === book.id)
        if (idx === -1) {
            setWishlist([...wishlist, book])
        } else {
            setWishlist(wishlist.filter((b) => b.id !== book.id))
        } 
    }

    const isInWishlist = (book) => {
        const idx = wishlist.findIndex((b) => b.id === book.id)

        if (idx === -1) {
            return false
        }

        return true
    }
    const clearWishlist = () => { 
        if(window.confirm("Are you sure you want to clear the wishlist?")){
            setWishlist([])
        }
    }

    useEffect(()=>{
        localStorage.setItem("wishlist", JSON.stringify(wishlist))
    }, [wishlist])

    return (
        <WishlistContext.Provider value={{ wishlist, toggleWishlist, isInWishlist, clearWishlist }}>{children}</WishlistContext.Provider>
    )
}

export default WishlistProvider


