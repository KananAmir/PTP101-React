
interface IncrementProps {
    onIncrement: () => void
}

const Increment = ({ onIncrement }: IncrementProps) => {
    return (
        <button onClick={onIncrement}>Increment</button>
    )
}

export default Increment