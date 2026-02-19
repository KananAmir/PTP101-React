


interface ResetProps {
    setCount: React.Dispatch<React.SetStateAction<number>>,
}

const Reset = ({setCount}: ResetProps) => {
  return (
    <button onClick={()=> setCount(0)}>Reset</button>
  )
}

export default Reset