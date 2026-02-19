

interface DecrementProps {
    setCount: React.Dispatch<React.SetStateAction<number>>,
}


const Decrement = ({setCount}: DecrementProps) => {
  return ( 
    <button onClick={()=> setCount((prev) => prev - 1)}>Decrement</button>
  )
}

export default Decrement