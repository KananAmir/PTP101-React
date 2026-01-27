import { useEffect, useState } from "react"
import { BASE_URL, ENDPOINTS } from "../constant"
import axios from 'axios'

const Books = () => {

  const [books, setBooks] = useState([])

  useEffect(() => {
    const getBooks = async () => {
      try {
        const resp = await axios(`${BASE_URL}/${ENDPOINTS.BOOKS}`)
        setBooks(resp.data)
      } catch (error) {
        console.log(error);
      }
    }

    getBooks()
  }, [])


  if (books.length === 0) {
    return (<p>
      LOADING...
    </p>)
  }

  return (
    <div>
      <ul> {books.map((book) => {
        return (
          <li key={book.id}>{book.title}</li>
        )
      })}</ul>
    </div>
  )
}

export default Books