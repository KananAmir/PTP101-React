import { useState } from "react"
import { addNewBook } from "../../services/bookService"
import { useNavigate } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';



function AddBook() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: 0,
    coverImageURL: "",
    description: ""
  })

  const nav = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!book.title.trim() ||

      !book.author.trim() ||
      !book.price ||
      !book.coverImageURL.trim() ||
      !book.description.trim()) {

      toast.error("Please fill in all fields!")
      return
    }
    try {
      const response = await addNewBook(book)

      // if (response.status === 201) {
      //   alert("Book added successfully!")
      //   setBook({
      //     title: "",
      //     author: "",
      //     price: 0,
      //     coverImageURL: "",
      //     description: ""
      //   })
      // }

      toast.success('Book Added Successfully!')
      
      setBook({
        title: "",
        author: "",
        price: 0,
        coverImageURL: "",
        description: ""
      })

      setTimeout(() => {
        nav("/admin/books")
      }, 1500);

    } catch (error) {
      console.log(error.message);
    }
  }

  console.log(book);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Admin Add Book Page
      </h2>

      <form
        className="bg-white shadow rounded-lg p-6 space-y-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="title"
          id="title"
          placeholder="title"
          className="w-full border border-gray-300 rounded px-4 py-2
                     focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => {
            setBook({
              ...book,
              title: e.target.value
            })
          }}
          value={book.title}
        />

        <input
          type="text"
          name="author"
          id="author"
          placeholder="author"
          className="w-full border border-gray-300 rounded px-4 py-2
                     focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => {
            setBook({
              ...book,
              author: e.target.value
            })
          }}
          value={book.author}
        />

        <input
          type="number"
          name="price"
          id="price"
          placeholder="price"
          className="w-full border border-gray-300 rounded px-4 py-2
                     focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => {
            setBook({
              ...book,
              price: e.target.valueAsNumber
            })
          }}
          value={book.price}
        />

        <input
          type="text"
          name="coverImageURL"
          id="coverImageURL"
          placeholder="coverImageURL"
          className="w-full border border-gray-300 rounded px-4 py-2
                     focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => {
            setBook({
              ...book,
              coverImageURL: e.target.value
            })
          }}
          value={book.coverImageURL}
        />

        <textarea
          name="description"
          id="description"
          placeholder="description"
          className="w-full border border-gray-300 rounded px-4 py-2
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          onChange={(e) => {
            setBook({
              ...book,
              description: e.target.value
            })
          }}
          value={book.description}
        ></textarea>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded
                     hover:bg-indigo-700 transition font-medium"
        >
          Add Book
        </button>
      </form>

      <Toaster />
    </div>
  )
}

export default AddBook
