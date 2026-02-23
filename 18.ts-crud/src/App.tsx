
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Movies from './pages/Movies'
import AddMovie from './pages/AddMovie'
import MovieDetail from './pages/MovieDetail'
import Header from './layout/Header'

function App() {

  return (
    <>
      <Header />
      <Routes>
        {/* <Route path='/' element={<Movies />} />
        <Route path='/movies' element={<Movies />} /> */}
        <Route path="/" element={<Navigate to="/movies" replace />} />
        <Route path="/movies" element={<Movies />} />
        <Route path='/movies/new' element={<AddMovie />} />
        <Route path='/movies/:id' element={<MovieDetail />} />
      </Routes>
    </>
  )
}

export default App
