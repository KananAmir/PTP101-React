// import { Link } from "react-router-dom"

// const Header = () => {
//   return (
//     <header>
//         <nav>
//             <ul>
//                 <li>
//                    <Link to={'/'}>Home</Link>
//                 </li>
//                 <li>
//                    <Link to={'/about'}>About</Link>
//                 </li>
//                 <li>
//                    <Link to={'/contact'}>Contact</Link>
//                 </li>
//                 <li>
//                    <Link to={'/books'}>Books</Link>
//                 </li>
//             </ul>
//         </nav>
//     </header>
//   )
// }

// export default Header
// import { Link } from "react-router-dom"



import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <li>
                   <NavLink className={({isActive})=> !isActive ? 'text-gray-400!' : 'text-red-500!'}  to={'/'}>Home</NavLink >
                </li>
                <li>
                   <NavLink className={({isActive})=> !isActive ? 'text-gray-400!' : 'text-red-500!'}  to={'/about'}>About</NavLink >
                </li>
                <li>
                   <NavLink className={({isActive})=> !isActive ? 'text-gray-400!' : 'text-red-500!'}  to={'/contact'}>Contact</NavLink >
                </li>
                <li>
                   <NavLink className={({isActive})=> !isActive ? 'text-gray-400!' : 'text-red-500!'}  to={'/books'}>Books</NavLink >
                </li>
                <li>
                   <NavLink className={({isActive})=> !isActive ? 'text-gray-400!' : 'text-red-500!'}  to={'/books/new'}>Add Book</NavLink >
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header