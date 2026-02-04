
import './App.css'
import AdminLayout from './layout/Admin'
import ClientLayout from './layout/Client'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Client/Home'
import About from './pages/Client/About'
import Contact from './pages/Client/Contact'
import Books from './pages/Client/Books'

import AdminDashboard from './pages/Admin/Dashboard'
import AdminBooks from './pages/Admin/Books'
import AddBook from './pages/Admin/AddBook'
import EditBook from './pages/Admin/EditBook'
import BookDetail from './pages/Client/BookDetail'
import Wishlist from './pages/Client/Wishlist'
import Basket from './pages/Client/Basket'

function App() {

  return (
    <>
      {/* CLIENT LAYOUT */}

      <Routes>

        <Route path='/' element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='wishlist' element={<Wishlist />} />
          <Route path='basket' element={<Basket />} />
          {/* <Route path='books' element={<Books />} />
          <Route path='books/:id' element={<BookDetail />} /> */}
          <Route path='books'>
            <Route index element={<Books />} />
            <Route path=':id' element={<BookDetail />} />
          </Route>
        </Route>

      </Routes>

      {/* ADMIN LAYOUT */}

      <Routes>

        <Route path='/admin' element={<AdminLayout />}>

          <Route index element={<AdminDashboard />} />
          <Route path='books'>
            <Route index element={<AdminBooks />} /> // index route for /admin/books
            <Route path='new' element={<AddBook />} />
            <Route path='edit'>
              <Route index element={<Navigate to="/admin/books" />} />
              <Route path=':id' element={<EditBook />} />
            </Route>
          </Route>

        </Route>

      </Routes>
    </>
  )
}

export default App
