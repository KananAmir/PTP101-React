import { FaTrashCan } from "react-icons/fa6";

const StudentRow = ({ student, setStudents }) => {


    const handleDelete = (id) => {
        console.log(id);
        setStudents((prevStudents) => prevStudents.filter(((s) => s.id !== id)))

    }
    return (
        <tr >
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.gpa}</td>
            <td >
                <button onClick={() => { handleDelete(student.id) }}>
                    <FaTrashCan className="trash-icon" />
                </button>
            </td>
        </tr>
    )
}

export default StudentRow