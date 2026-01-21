
// const StudentTable = ({ students }) => {
//   return (
//     <>
//       {students.length === 0 ? (<p style={{color: 'red'}}>no stundent yet!</p>) : (
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Age</th>
//               <th>GPA</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.map((s) => {
//               return (
//                 <tr key={s.id}>
//                   <td>{s.id}</td>
//                   <td>{s.name}</td>
//                   <td>{s.age}</td>
//                   <td>{s.gpa}</td>
//                 </tr>
//               )
//             })}
//           </tbody>
//         </table>
//       )}
//     </>
//   )
// }

import StudentRow from "./StudentRow"

const StudentTable = ({ students, setStudents }) => {

  if (students.length === 0) {
    return <p className="empty-text">no student yet!</p>
  }

  return (
    <>
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>GPA</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => {
            return (
              <StudentRow key={s.id} student={s} setStudents={setStudents} />
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default StudentTable