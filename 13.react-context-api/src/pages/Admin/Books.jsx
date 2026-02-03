import axios from "axios"
import { useEffect, useState, useRef } from "react"
import { BASE_URL, ENDPOINTS } from "../../constant"
import Loading from "../../components/Loading"
import { deleteBookById } from "../../services/bookService"
import toast, { Toaster } from "react-hot-toast"
import { Link } from "react-router-dom"

function Books() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)

  const searchTimeoutRef = useRef(null)

  const handleDelete = async (bookId) => {
    try {
      const response = await deleteBookById(bookId)
      console.log(response);

      // if(response.status === 200){
      //   const filteredBooks = books.filter((book) => book.id !== bookId)
      //   setBooks(filteredBooks)
      // }
      setBooks(books.filter((book) => book.id !== bookId))
      toast.success("Book deleted successfully!")


    } catch (error) {
      console.log(error.message);

    }
  }

  // const handleSearch = async (e) => {
  //   try {
  //     const searchTerm = e.target.value;
  //     const response = await axios(`${BASE_URL}/${ENDPOINTS.BOOKS}?q=${searchTerm}`)
  //     // console.log(response.data);
  //     setBooks(response.data)

  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }


  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    // əvvəlki timeout-u ləğv et
    clearTimeout(searchTimeoutRef.current);

    // yeni timeout qur
    searchTimeoutRef.current = setTimeout(async () => {
      try {
        const response = await axios(
          `${BASE_URL}/${ENDPOINTS.BOOKS}?q=${searchTerm}`
        );
        setBooks(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }, 500); // 👈 debounce delay
  };


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
    return <Loading />
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Admin Books Page
      </h2>

      <div className="mb-8">
        <input type="search" name="search" id="search" className="border border-amber-500 rounded px-4 py-2" onChange={handleSearch} />
      </div>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-sm font-medium text-gray-600">Image</th>
              <th className="px-4 py-3 text-sm font-medium text-gray-600">Title</th>
              <th className="px-4 py-3 text-sm font-medium text-gray-600">Author</th>
              <th className="px-4 py-3 text-sm font-medium text-gray-600">Price</th>
              <th className="px-4 py-3 text-sm font-medium text-gray-600">Description</th>
              <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {books.map((book) => (
              <tr key={book.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <img
                    src={book.coverImageURL}
                    alt={book.title}
                    className="w-20 h-28 object-cover rounded"
                  />
                </td>

                <td className="px-4 py-3 font-medium text-gray-800">
                  {book.title}
                </td>

                <td className="px-4 py-3 text-gray-600">
                  {book.author}
                </td>

                <td className="px-4 py-3 text-gray-700">
                  ${book.price}
                </td>

                <td className="px-4 py-3 text-gray-500 max-w-xs truncate">
                  {book.description}
                </td>

                <td className="px-4 py-3">
                  <div className="flex justify-center gap-2">
                    <Link to={`/admin/books/edit/${book.id}`} className="px-4 py-2 text-sm bg-green-500 text-white rounded hover:bg-green-600 transition cursor-pointer!">
                      Edit
                    </Link>
                    <button className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition cursor-pointer!" onClick={() => handleDelete(book.id)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Toaster />
      </div>
    </div>
  )
}

export default Books
