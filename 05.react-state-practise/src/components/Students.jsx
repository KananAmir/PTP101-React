import { useState } from "react"
import StudentForm from "./StudentForm"
import StudentTable from "./StudentTable"

const Students = () => {
    const [students, setStudents] = useState([])

    return (
        <div className="students-container">
            <StudentForm setStudents={setStudents} students={students} />
            <StudentTable students={students} setStudents={setStudents} />
        </div>
    )
}

export default Students
