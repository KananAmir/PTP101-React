
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Counter from './components/Counter'
import Greeting from './components/Greeting'
import InputExample from './components/InputExample'
import Students from './components/Students'

function App() {
  const [showCard, setShowCard] = useState(false)

  return (
    <>
      <Greeting />

      <hr />

      <button onClick={() => {
        setShowCard(true)
      }}>show card</button>
      <button onClick={() => {
        setShowCard(false)
      }}>hide card</button>

      <button onClick={() => {
        setShowCard((prevState) => !prevState)
      }}>toggle card</button>
      <br />
      {/* { 
        showCard ? <Card /> : <p>no card!</p>
      } */}
      {
        showCard && <Card />
      }
      <hr />
      <Counter />

      <hr />
      <InputExample/> 

      <hr />

      <Students />
    </>
  )
}

export default App


// conditional rendering: ternary operator, logical and operator