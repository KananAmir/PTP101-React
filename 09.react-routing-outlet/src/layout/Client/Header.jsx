import { NavLink } from "react-router-dom"

const Header = () => {

  const linkClasses = ({ isActive }) =>
    isActive
      ? "mx-4 text-indigo-600 font-semibold border-b-2 border-indigo-600"
      : "mx-4 text-gray-600 hover:text-indigo-500 transition-colors"

  return (
    <header className="flex items-center justify-center h-16 bg-white shadow">
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
    </header>
  )
}

export default Header
