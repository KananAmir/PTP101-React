import { useState } from 'react'

const InputExample = () => {
    const [name, setName] = useState('')
    return (
        <div>
            <input  onChange={(e) => {
                setName(e.target.value)
            }} type="text" placeholder='enter name..' />

            <h3>Salam, {name || 'Guest'}</h3>
        </div>
    )
}

export default InputExample
