import { useEffect, useState } from "react"

const Card = () => {

    const [count, setCount] = useState(0)
    const [inputValue, setInputValue] = useState('')
    // mounting
    // useEffect(() => {
    //     console.log('card component mounted');
    // }, [])  

    // unmounting
    // useEffect(() => {
    //     console.log('card component mounted');

    //     // cleanup function
    //     return ()=>{
    //      console.log('card component unmounted');
    //     }
    // }, [])  


    // updating
    console.log('aaa');
    
        useEffect(() => {
        console.log('card component updating');

    }, [count])  

    //dependency array
    return (
        <div style={{ maxWidth: '500px', padding: '1rem', border: '1px solid', marginTop: '1rem' }}>
            <h2>React Component Lifecycle</h2>
            <p>Effects have a different lifecycle from components. Components may mount, update, or unmount. An Effect can only do two things: to start synchronizing something, and later to stop synchronizing it. This cycle can happen multiple times if your Effect depends on props and state that change over time. React provides a linter rule to check that you’ve specified your Effect’s dependencies correctly. This keeps your Effect synchronized to the latest props and state.</p>
            <p>{inputValue}</p>
            <hr />
            <button onClick={()=>{setCount((c) => c + 1)}}>count: {count}</button>
            <br />
            <input type="text" onChange={((e)=>setInputValue(e.target.value))}/>
        </div>
    )
}

export default Card