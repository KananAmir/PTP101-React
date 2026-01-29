import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { editBookById, getBookById } from "../../services/bookService";
import Loading from "../../components/Loading";
import toast, { Toaster } from "react-hot-toast";


function EditBook() {
  const [book, setBook] = useState(null);

  const { id } = useParams()
  const nav = useNavigate()
  const handleSubmit = async (e)=>{
    e.preventDefault()

    try {
      const response = await editBookById(id, book)

      // if(response.status === 200){
      //   alert("Book edited successfully!")
      // }

      toast.success("Book edited successfully!", {
        duration: 2000,
      })

      setTimeout(()=>{
        nav(-1)
      }, 2000)
      
    } catch (error) {
      console.log(error.message);
    }
    
  }


  useEffect(() => {
    const getBookInfo = async (id) => {
      try {
        const res = await getBookById(id)
        setBook(res.data)

      } catch (error) {
        console.log(error.message);
      }
    }

    if (id) {
      getBookInfo(id)
    }
  }, [id])

  if (!book) {
    return <Loading/>
  }


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
          className="w-full bg-green-600 text-white py-2 rounded
                     hover:bg-green-700 transition font-medium cursor-pointer"
        >
          Edit Book
        </button>
      </form>

      <Toaster />
    </div>
  )
}

export default EditBook