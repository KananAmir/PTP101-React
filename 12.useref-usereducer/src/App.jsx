
import { useEffect, useRef, useState } from 'react'
import './App.css'
import Counter from './components/Counter';
import Todo from './components/Todo';

function App() {
  const [count, setCount] = useState(0)
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  const inputRef = useRef(null)

  const countRef = useRef(0)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <>
      <input type="text" name="" id="" ref={inputRef} />
      <button onClick={() => {
        // console.log(inputRef.current);
        inputRef.current.focus()
        // inputRef.current.value = 'hello'
      }}>focus</button>
      <hr />

      <h2>Count: {countRef.current}</h2>
      <button onClick={() => {
        countRef.current++
        console.log(countRef.current);
      }}>inc by useref</button>


      <button onClick={() => setCount(count + 1)}>inc by usestate</button>


      <hr />


      <div>
        <p>{seconds} saniyə</p>
        <button
          onClick={() => {
            clearInterval(intervalRef.current);
          }}
        >
          Stop
        </button>
      </div>

      <hr />

      <Counter/>

      <hr />
      <Todo />
    </>
  )
}

export default App
