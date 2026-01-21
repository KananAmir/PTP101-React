import { useState } from "react"
import { nanoid } from 'nanoid'

const StudentForm = ({ setStudents, students }) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [gpa, setGpa] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !age || !gpa) {
      return;
    }

    const newStudent = {
      name,
      age,
      gpa,
      id: nanoid(8)
    }

    //version 1
    // students.push(newStudent)

    // setStudents([...students])

    //version 2
    // setStudents((prevStudents)=> [...prevStudents, newStudent])

    //version 3
    setStudents([...students, newStudent])

    // console.log(newStudent);

    setName('')
    setAge('')
    setGpa('')
  }
  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <div>
        <input onChange={(e) => {
          setName(e.target.value)
        }}
          value={name}
          type="text"
          placeholder="student name" />
      </div>
      <div>
        <input onChange={(e) => {
          setAge(e.target.valueAsNumber)
        }}
          value={age}
          type="number"
          placeholder="age" />
      </div>
      <div>
        <input onChange={(e) => {
          setGpa(e.target.valueAsNumber)
        }}
          value={gpa}
          type="number"
          step="0.1"
          placeholder="GPA" />
      </div>
      <div>
        <button type="submit">Add Student</button>
      </div>

    </form>
  )
}

export default StudentForm