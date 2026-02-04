import { useContext } from "react"
import { BasketContext } from "../../context/BasketContext"
import { Link } from "react-router-dom"
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Basket() {
  const { basket, increaseQuantity, decreaseQuantity, clearBasket, removeFromBasket, totalPrice } = useContext(BasketContext)

  const {t} = useTranslation()
  if (basket.length === 0) {
    return (
      <div className="max-w-5xl mx-auto py-10 text-center">
        <h2 className="text-2xl font-bold my-5">{t("basket.emptyMessage")}</h2>
        <p className="text-gray-600 mb-4">
          {t("basket.emptyDescription")}
        </p>
        <Link to="/books" className="text-blue-700 font-semibold hover:underline">
          {t("basket.goToBooks")}
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">{t("basket.title")}</h2>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Image</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Title</th>
              <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700">Quantity</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Price</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Sub Total</th>
              <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700">Remove</th>
            </tr>
          </thead>

          <tbody>
            {basket.map((book) => (
              <tr key={book.id} className="border-t hover:bg-gray-50 transition">
                <td className="py-3 px-4">
                  <img
                    src={book.coverImageURL}
                    alt={book.title}
                    className="w-12 h-16 object-cover rounded"
                  />
                </td>

                <td className="py-3 px-4 font-medium">
                  {book.title}
                </td>

                <td className="py-3 px-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className={`bg-gray-400 p-2 rounded hover:bg-gray-300 cursor-pointer ${book.quantity === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={book.quantity === 1}
                      onClick={() => {
                        decreaseQuantity(book.id)
                      }}
                    >
                      <FaMinus />
                    </button>
                    <span className="font-semibold">{book.quantity}</span>

                    <button className="bg-gray-400 p-2 rounded hover:bg-gray-300 cursor-pointer"
                      onClick={() => {
                        increaseQuantity(book.id)
                      }}
                    >
                      <FaPlus />
                    </button>
                  </div>
                </td>

                {/* <td className="py-3 px-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className={`bg-gray-400 p-2 rounded hover:bg-gray-300 cursor-pointer`}
                      onClick={() => {
                        decreaseQuantity(book.id)
                        if(book.quantity === 1){
                          removeFromBasket(book.id)
                        }
                      }}
                    > 
                      <FaMinus />
                    </button>
                    <span className="font-semibold">{book.quantity}</span>

                    <button className="bg-gray-400 p-2 rounded hover:bg-gray-300 cursor-pointer"
                      onClick={() => {
                        increaseQuantity(book.id)
                      }}
                    >
                      <FaPlus />
                    </button>
                  </div>
                </td> */}

                <td className="py-3 px-4">${book.price}</td>

                <td className="py-3 px-4 font-semibold text-green-600">
                  ${book.price * book.quantity}
                </td>

                <td className="py-3 px-4 text-center">
                  <button className="text-red-500 hover:text-red-700 cursor-pointer"
                    onClick={() => {
                      if (window.confirm("Are you sure you want to remove this book from the basket?")) {
                        removeFromBasket(book.id)
                      }
                    }}
                  >
                    <FaTrashAlt size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between mt-6 p-4 bg-gray-100 rounded-b-lg ">
           <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer"
          onClick={clearBasket}
        >
          Clear Basket
        </button>

        <div className="text-lg font-semibold">
          Total Price: <span className="text-green-600">${totalPrice}</span>
        </div>
        </div>
       
      </div>
    </div>
  )
}

export default Basket
