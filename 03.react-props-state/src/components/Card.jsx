
const Card = ({ children, isBlue }) => {
    return (
        <div style={{
            border: '1px solid',
            borderColor: isBlue ? 'blue' : 'gray',
            padding: '16px',
            borderRadius: '8px',
            backgroundColor: isBlue ? '#e0f0ff' : '#f9f9f9'

        }}>
            {children}
        </div>
    )
}

export default Card