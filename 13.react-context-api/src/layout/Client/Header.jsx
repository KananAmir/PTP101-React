import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ThemeContext } from "../../context/ThemeContext"
import { FaHeart } from "react-icons/fa";
import { WishlistContext } from "../../context/WishlistContext";

const Header = () => {

  const { theme, toggleTheme } = useContext(ThemeContext)
  const { wishlist } = useContext(WishlistContext)

  const linkClasses = ({ isActive }) =>
    isActive
      ? `mx-4 text-indigo-600 font-semibold border-b-2 border-indigo-600`
      : `mx-4 text-gray-600 hover:text-indigo-500 transition-colors  ${theme === 'light' ? '' : '!text-white !border-white'}`

  return (
    <header className={`flex items-center justify-center h-16 bg-white shadow px-4 ${theme === 'light' ? 'text-black' : 'text-white !bg-gray-800'}`}>
      <NavLink to="/" className={linkClasses}>
        Home
      </NavLink>

      <NavLink to="/books" className={linkClasses}>
        Book Store
      </NavLink>

      <NavLink to="/about" className={linkClasses}>
        About
      </NavLink>

      <NavLink to="/contact" className={linkClasses}>
        Contact
      </NavLink>
      <NavLink to="/wishlist" className={linkClasses}>
        <div className="flex !text-2xl">
          <FaHeart className="text-red-500 " />
          <sup>{wishlist.length}</sup>
        </div>
      </NavLink>
      <button onClick={toggleTheme} className="border border-2 px-3 my-1 rounded cursor-pointer">
        {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </header>
  )
}

export default Header
