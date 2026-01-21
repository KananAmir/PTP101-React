import React from 'react'

const Reset = ({ setCount }) => {
    return (
        <button onClick={() => { setCount(0) }}>reset</button>
    )
}

export default Reset 