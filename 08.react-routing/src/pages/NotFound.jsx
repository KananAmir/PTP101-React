import { useNavigate } from "react-router-dom"

const NotFound = () => {
  const nav = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-7xl font-extrabold text-indigo-600">404</h1>

      <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2 text-center max-w-md">
        Axtardığınız səhifə mövcud deyil və ya silinib. Ana səhifəyə qayıda bilərsiniz.
      </p>

      <button
        onClick={() => nav("/")}
        className="mt-6 px-6 py-3 bg-indigo-600 text-blue rounded-lg
                   hover:bg-indigo-700 transition duration-300 shadow-md"
      >
        Go Home
      </button>
    </div>
  )
}

export default NotFound
