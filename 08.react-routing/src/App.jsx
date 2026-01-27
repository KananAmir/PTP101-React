
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './layout/Footer'
import Header from './layout/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Books from './pages/Books'
import BookDetail from './pages/BookDetail'
import AddBook from './pages/AddBook'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/books' element={<Books />} />
        <Route path='/books/detail/:id' element={<BookDetail />} />
        <Route path='/books/new' element={<AddBook />} />

        <Route path='*' element={<NotFound />}/>
      </Routes>

      <Footer />
    </>
  )
}

export default App
