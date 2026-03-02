import React, { useState } from 'react'

const AddEmployee = () => {
    const [employees, setEmployees] = useState([])
    const [name, setName] = useState('')
    const [salary, setSalary] = useState(0)
    const [show, setShow] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name || !salary) {

            return
        }
        const newEmployee = {
            id: Date.now(),
            name: name.trim(),
            salary
        }


        setEmployees([...employees, newEmployee])
        setName('')
        setSalary(0)


    }


    const handleDelete = (id) => {
        setEmployees((prev) => prev.filter((e) => e.id !== id))
    }

    return (
        <div>

            <button onClick={()=>{
                //first solution
                // if(show){
                //     setShow(false)
                // }else{
                //     setShow(true)
                // }

                //second solution
                // setShow(!show)

                //third solution
                setShow((prev)=>!prev)

            }}>{show ? 'Hide' : 'Show'} Employee Form</button>
            {
                show && (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input type="text" name="name" id="name" placeholder='name' value={name} onChange={(e) => {
                                setName(e.target.value)
                            }} />
                        </div>
                        <div>
                            <input type="number" name="salary" id="salary" placeholder='salary' value={salary} onChange={(e) => {
                                setSalary(e.target.valueAsNumber)
                            }} />
                        </div>
                        <button>
                            Submit
                        </button>
                    </form>
                )
            }


            {
                employees.length === 0 ? <>
                    <p>No employee added yet!</p>
                </> : <ul>
                    {
                        employees.map((e) => {
                            return (
                                <li key={e.id}>
                                    {e.name}, <span>{e.salary}</span>
                                    <button onClick={() => handleDelete(e.id)}>delete</button>

                                </li>
                            )
                        })
                    }
                </ul>
            }
        </div>
    )
}

export default AddEmployee