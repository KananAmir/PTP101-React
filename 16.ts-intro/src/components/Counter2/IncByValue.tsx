// import { useRef } from "react"

import { useState } from "react"

// interface Props {
//     onIncrementByValue: (value: number) => void
// }
// const IncByValue = ({ onIncrementByValue }: Props) => {

//     const inputRef = useRef<HTMLInputElement>(null)
//     return (
//         <div>
//             <input type="text" name="" id="" ref={inputRef} />
//             <button
//                 onClick={() => {
//                     // console.log(inputRef.current?.value);
                    
//                     onIncrementByValue(Number(inputRef.current?.value) || 0)
//                 }}
//             >Increment by Value</button>
//         </div>
//     )
// }

// export default IncByValue   


interface Props {
    onIncrementByValue: (value: number) => void
}
const IncByValue = ({ onIncrementByValue }: Props) => {
    const [val, setVal] = useState<number>(0)

    return (
        <div>
            <input type="number" name="" id="" value={val} onChange={(e)=>{
                setVal(Number(e.target.value))
            }} />
            <button
                onClick={() => {
                    // console.log(inputRef.current?.value);
                    
                    onIncrementByValue(val)
                }}
            >Increment by Value</button>
        </div>
    )
}

export default IncByValue     