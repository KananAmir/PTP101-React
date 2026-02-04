import { Link } from "react-router-dom"
import LanguageSwitcher from "../../components/LanguageSwitcher"

const AdminHeader = () => {
  return (
    <header>
      <Link to="/admin" className="mx-4 text-gray-600 hover:text-indigo-500 transition-colors">
        Dashboard
      </Link>
      <Link to="/admin/books" className="mx-4 text-gray-600 hover:text-indigo-500 transition-colors">
        Manage Books
      </Link>
      <Link to="/admin/books/new" className="mx-4 text-gray-600 hover:text-indigo-500 transition-colors">
        Add New Book
      </Link>
      <LanguageSwitcher />
    </header>
  )
}

export default AdminHeader