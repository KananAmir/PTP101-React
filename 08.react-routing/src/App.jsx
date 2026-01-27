
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './layout/Footer'
import Header from './layout/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Books from './pages/Books'

function App() {

  return (
    <>
    <Header />

    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/books' element={<Books />}/>
    </Routes>

    <Footer />
    </>
  )
}

export default App
