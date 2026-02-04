import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Loading from "../../components/Loading"
import { BASE_URL, ENDPOINTS } from '../../constant'
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext"
import { WishlistContext } from "../../context/WishlistContext"
import { BasketContext } from "../../context/BasketContext"

const Books = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")

  const { theme } = useContext(ThemeContext)
  const { wishlist, toggleWishlist, isInWishlist } = useContext(WishlistContext)
  const { addToBasket, basket, isInBasket, increaseQuantity } = useContext(BasketContext)

  console.log("wishlist", wishlist);
  console.log("basket", basket);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const resp = await axios(`${BASE_URL}/${ENDPOINTS.BOOKS}`)
        setBooks(resp.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    getBooks()
  }, [])


  const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()) || book.author.toLowerCase().includes(searchTerm.toLowerCase()))
  console.log(filteredBooks);

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <div className={`container mx-auto px-4 py-8 ${theme === 'light' ? 'text-black bg-white' : 'text-white bg-gray-800'}`}>
      <h2 className="text-3xl font-bold mb-8 text-center">
        📚 Book Store
      </h2>

      <div className="mb-8">
        <input type="search" name="search" id="search" className={`${theme === 'light' ? 'border border-black-500 rounded px-4 py-2' : 'border border-white-500 rounded px-4 py-2 bg-gray-700 text-white'}`} onChange={(e) => {
          setSearchTerm(e.target.value)
        }} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className={`rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col ${theme === 'light' ? 'bg-white' : 'bg-gray-700'}`}
          >
            <div className="relative">
              <img
                src={book.coverImageURL}
                alt={book.title}
                className="h-56 w-full object-cover rounded-t-xl"
              />

              <button onClick={() => {
                toggleWishlist(book)
              }}>
                <FaHeart
                  className={`absolute top-3 right-3 text-2xl cursor-pointer transition ${isInWishlist(book) ? 'text-red-500 hover:text-red-700' : 'text-gray-300 hover:text-gray-500'}`}
                /></button>
            </div>


            <div className="p-4 flex flex-col flex-1">

              <Link to={`/books/${book.id}`}>
                <h3 className="text-lg font-semibold line-clamp-2">
                  {book.title}
                </h3>
              </Link>


              <p className="text-sm text-gray-600 mt-1">
                {book.author}
              </p>

              <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                {book.description}
              </p>

              <div className="mt-auto flex items-center justify-between pt-4">
                <span className="text-xl font-bold text-indigo-600">
                  ${book.price}
                </span>

                <div className="flex items-center gap-3">
                  <span className="text-sm text-yellow-500 font-medium">
                    ⭐ {book.rating}
                  </span>

                  {/* ADD TO BASKET BUTTON */}
                  <button
                    className={`p-2 rounded-full transition cursor-pointer ${theme === "light"
                      ? "bg-indigo-100 hover:bg-indigo-200"
                      : "bg-indigo-600 hover:bg-indigo-700"
                      }`}

                    onClick={() => {
                      if (isInBasket(book.id)) {
                        increaseQuantity(book.id)
                      }
                      else {
                        addToBasket(book)
                      }
                    }}
                  >
                    <FaShoppingCart
                      className={`text-lg ${isInBasket(book.id) ? 'text-orange-600' : "text-indigo-600"}`}
                    />
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Books
