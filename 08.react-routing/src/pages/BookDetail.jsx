import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { BASE_URL, ENDPOINTS } from "../constant"
import Loading from "../components/Loading"

const genreMap = {
  "1": "Programming",
  "2": "Fiction",
  "3": "History",
  "4": "Self-Help",
}

const BookDetail = () => {
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState("")

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const getBook = async () => {
      setLoading(true)
      setErrorMsg("")
      try {
        const resp = await axios(`${BASE_URL}/${ENDPOINTS.BOOKS}/${id}`)
        setBook(resp.data)
      } catch (error) {
        setErrorMsg(error?.message || "Something went wrong")
      } finally {
        setLoading(false)
      }
    }

    if (id) getBook()
        
  }, [id])

  if (loading) {
    return(
        <Loading />
    )
  }

  if (errorMsg) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4">
          {errorMsg}
        </div>

        <button
          onClick={() => navigate(-1)}
          className="mt-6 px-5 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition"
        >
          ← Go back
        </button>
      </div>
    )
  }

  if (!book) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-center text-gray-600">Book not found.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition block mx-auto"
        >
          Go Home
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition"
      >
        ← Go back
      </button>

      <div className="mt-6 bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="bg-gray-50 p-6 flex items-center justify-center">
            <img
              src={book.coverImageURL}
              alt={book.title}
              className="w-full max-w-sm rounded-xl shadow object-cover"
            />
          </div>

          {/* Details */}
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700">
                {genreMap[book.genre] || `Genre #${book.genre}`}
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                {book.language}
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3">
              {book.title}
            </h1>

            <p className="text-gray-600 mt-1">
              by <span className="font-medium text-gray-800">{book.author}</span>
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              {book.description}
            </p>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="rounded-xl border p-3">
                <p className="text-xs text-gray-500">Rating</p>
                <p className="text-lg font-semibold text-yellow-600">⭐ {book.rating}</p>
              </div>
              <div className="rounded-xl border p-3">
                <p className="text-xs text-gray-500">Sold</p>
                <p className="text-lg font-semibold text-gray-900">{book.sold}</p>
              </div>
              <div className="rounded-xl border p-3">
                <p className="text-xs text-gray-500">Stock</p>
                <p className="text-lg font-semibold text-gray-900">{book.stock}</p>
              </div>
              <div className="rounded-xl border p-3">
                <p className="text-xs text-gray-500">Price</p>
                <p className="text-lg font-semibold text-indigo-700">${book.price}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
                onClick={() => alert("Added to basket (demo)")}
              >
                Add to Basket
              </button>

              <button
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-gray-300 bg-white font-semibold hover:bg-gray-50 transition"
                onClick={() => alert("Added to wishlist (demo)")}
              >
                Add to Wishlist
              </button>
            </div>

            <p className="text-xs text-gray-400 mt-4">
              Book ID: {book.id}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetail
