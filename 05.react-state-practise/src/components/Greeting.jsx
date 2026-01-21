import { useState } from "react";

const Greeting = () => {
    console.log('Greeting component rendered!');

    const [message, setMessage] = useState('Hello, welcome to our site!');


    const changeText = () => {
        setMessage('Thank you for visiting us!');
    }
    
    return (
        <>
            <h2>{message}</h2>
            {/* <button onClick={() => {
                changeText()
            }}>change message</button> */}

            <button onClick={changeText}>change message</button>
        </>
    )
}

export default Greeting