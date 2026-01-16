
const Button = ({ text, color }) => {
    
    return (
        <button style={{ backgroundColor: color ? color : 'lightgray' }}>{text}</button>
    )
} 

export default Button