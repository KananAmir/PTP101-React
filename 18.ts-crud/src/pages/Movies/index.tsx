import { useContext, useEffect, useState } from "react"
import type { Movie } from "../../types/movie"
import { deleteMovieById, getMovies } from "../../services/movieService"
import DeleteMovie from "../../components/DeleteMovie"
import { BasketContext } from "../../context/BasketContext"

function Movies() {
  const [movies, setMovies] = useState<Movie[]>([])
  const basketContext = useContext(BasketContext)

  const addToBasket = basketContext?.addToBasket || (() => {})

  const handleDelete = async (id: string) => {
    try {
      await deleteMovieById(id)
      setMovies(movies.filter((m) => m.id !== id))
    } catch (error) {
      console.log(error)
    }

  }



  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getMovies()
        setMovies(data)
      } catch (error) {
        console.log(error)
      }
    }

    getData()
  }, [])

  if (movies.length === 0) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <p className="text-xl font-semibold animate-pulse">Loading...</p>
      </div>
    )
  }



  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🎬 Movies</h1>

      <div className="overflow-x-auto shadow-lg rounded-2xl">
        <table className="min-w-full bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
            <tr>
              <th className="px-4 py-3 text-left">Image</th>
              <th className="px-4 py-3 text-left">Title</th>
              <th className="px-4 py-3 text-left">Year</th>
              <th className="px-4 py-3 text-left">IMDB Rating</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {movies.map(movie => (
              <tr
                key={movie.id}
                className="hover:bg-gray-50 transition duration-200"
              >
                <td className="px-4 py-3">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-20 h-28 object-cover rounded-lg shadow"
                  />
                </td>

                <td className="px-4 py-3 font-medium">{movie.title}</td>

                <td className="px-4 py-3">{movie.year}</td>

                <td className="px-4 py-3">
                  <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-semibold">
                    ⭐ {movie.imDbRating}
                  </span>
                </td>

                <td className="px-4 py-3">
                  <div className="flex justify-center gap-2">
                    <button className="cursor-pointer px-3 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition">
                      Edit
                    </button>
                    <DeleteMovie onDeleteMovie={handleDelete} movieId={movie.id} />
                    <button className="cursor-pointer px-3 py-1 text-sm bg-green-500 hover:bg-green-600 text-white rounded-lg transition">
                      Details
                    </button>

                    <button onClick={()=> addToBasket(movie)} className="cursor-pointer px-3 py-1 text-sm bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition">
                      Add to Basket
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Movies