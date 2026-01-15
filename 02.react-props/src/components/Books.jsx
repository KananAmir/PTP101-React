import '../assets/css/books.css'
import BookCard from './BookCard';
const Books = ({ books }) => {
    console.log(books);

    return (
        <div className="books">
            { 
                books.map((book)=>{
                    return (
                       <BookCard book={book} key={book.id}/>
                    )
                })
            }
        </div>
    )
}

export default Books