import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Loading from "../../components/Loading"
import { BASE_URL, ENDPOINTS } from '../../constant'

const Books = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)

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

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">
        📚 Book Store
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <Link
            to={`/books/${book.id}`}
            key={book.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col"
          >
            <img
              src={book.coverImageURL}
              alt={book.title}
              className="h-56 w-full object-cover rounded-t-xl"
            />

            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-semibold line-clamp-2">
                {book.title}
              </h3>

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

                <span className="text-sm text-yellow-500 font-medium">
                  ⭐ {book.rating}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Books
