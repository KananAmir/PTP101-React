import { useState } from 'react'
import './App.css'
import AddCategory from './components/AddCategory'
import Categories from './components/Categories'
import EditCategory from './components/EditCategory'

function App() {

  const [edit, setEdit] = useState(null)

  return (
    <>
      <h2>RTK Query Example</h2>
      <hr />
      <AddCategory />
      <hr />
      <EditCategory edit={edit} setEdit={setEdit} />
      <hr />
      <Categories setEdit={setEdit} />
    </>
  )
}

export default App
