
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Suppliers from './components/Suppliers'
import Categories from './components/Categories'

function App() {

  const [show, setShow] = useState(false)
  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-700">
        Hello world!
      </h1>
      <button onClick={() => setShow(!show)}>
        {show ? 'hide' : 'show'}
      </button>
      {show && <Card />}


      <hr />
      <Categories />
      <hr />

      <Suppliers />
    </>
  )
}

export default App

// useEffect hook 

// component mounting
// component updating
// component unmounting