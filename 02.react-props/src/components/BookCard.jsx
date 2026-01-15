
const BookCard = ({ book }) => {
    return (
        <div className="book-card">
            <img src={book.coverImageURL} alt={book.title} />
            <h3 className="title">{book.title}</h3>
            <p className="author">by {book.author}</p>
            <p className="price">Price: ${book.price}</p>
            <p className="rating">Rating: {book.rating} / 5</p>
        </div>
    )
}

export default BookCard