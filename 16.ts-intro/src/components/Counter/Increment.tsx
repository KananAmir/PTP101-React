

interface IncrementProps {
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>,
}
  

// const Increment = ({setCount, count}: IncrementProps) => {
//   return (
//     <button onClick={()=>setCount(count + 1)}>Increment</button>
//   )
// }

// export default Increment 


const Increment: React.FC<IncrementProps> = ({setCount, count}) => {
  return (
    <button onClick={()=>setCount(count + 1)}>Increment</button>
  )
}

export default Increment 