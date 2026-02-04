import { useContext } from "react"
import { WishlistContext } from "../../context/WishlistContext"
import { ThemeContext } from "../../context/ThemeContext"
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Wishlist() {
    const { wishlist, toggleWishlist, isInWishlist, clearWishlist } = useContext(WishlistContext)
    const { theme } = useContext(ThemeContext)

        const { t } = useTranslation();
    
    

    if (wishlist.length === 0) {
        return (
            <div className="container mx-auto px-4 py-8 text-center">
                <h2 className="text-3xl font-bold mb-4">{t("wishlist.emptyMessage")}</h2>
                <p className="text-gray-600">{t("wishlist.emptyDescription")}</p>
            </div>
        )
    }
    return (
        <div className={`container mx-auto px-4 py-8 ${theme === 'light' ? 'text-black bg-white' : 'text-white bg-gray-800'}`}>
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    Wishlist
                </h2>

                <button className="border border-2 px-4 py-2 rounded cursor-pointer" onClick={clearWishlist}>Clear Wishlist</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {wishlist.map((book) => (
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

                                <span className="text-sm text-yellow-500 font-medium">
                                    ⭐ {book.rating}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Wishlist 