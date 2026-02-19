

interface DecrementProps {
    onDecrement: ()=> void
}
const Decrement = ({onDecrement}: DecrementProps) => {
  return (
    <button onClick={onDecrement}>Decrement</button>
  )
}

export default Decrement