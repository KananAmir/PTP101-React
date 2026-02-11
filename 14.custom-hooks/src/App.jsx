
import './App.css'
import Books from './components/Books'
import Categories from './components/Categories'
import { useToggle } from './hooks/useToggle'
import 'swiper/css';

function App() {

  const [isToggled, toggle] = useToggle()
  
  return (
    <>
      <button onClick={toggle}>Toggle Categories</button>
      {isToggled && <Categories />}
      
      <hr />
      <Books />
    </>
  )
}

export default App
