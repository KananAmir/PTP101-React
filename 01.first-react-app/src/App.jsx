import './App.css'
import Card from './components/Card'
import Greeting from './components/Greeting'
import Wellcome from './components/Wellcome'

function App() {

  return (
    <>
      <Greeting />
      <hr />
      <Wellcome />
      <hr />
      <Card/>
      <Card/>
      <Card/>
    </>
  )
}

export default App

// function Greeting() {
//   return <h1>Hello World</h1>
// }

// const Welcome = () => {
//   return <h2>Welcome to React</h2>
// }

// function sum(a, b){
//   return a + b
// }

// console.log(sum(3, 5))
// console.log(sum(1 ,4));
