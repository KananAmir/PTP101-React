import { useEffect, useState } from "react"
import { useEditCategoryByIdMutation, useGetCategoryByIdQuery } from "../redux/services/categoryApi"

const EditCategory = ({ edit, setEdit }) => {
    // const { data } = useGetCategoryByIdQuery(editId)

    // console.log('data', data);

    const [editCategory, { isLoading }] = useEditCategoryByIdMutation()

    const [category, setCategory] = useState({
        name: edit?.name || '',
        description: edit?.description || ''
    })

    console.log('edit', edit);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (edit) {
            editCategory({ id: edit.id, updatedCategory: category })
            setEdit(null)
            setCategory({
                name: '',
                description: ''
            })
        }
    }


    useEffect(() => {
        if (edit) {
            setCategory({
                name: edit.name,
                description: edit.description
            })
        }
    }, [edit])

    return (
        <div>
            <h3>Edit Category</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder='Name'

                        onChange={(e) => {
                            setCategory({ ...category, name: e.target.value })
                        }}
                        value={category?.name} />
                </div>
                <div>
                    <input type="text" placeholder='Description'
                        onChange={(e) => {
                            setCategory({ ...category, description: e.target.value })
                        }}
                        value={category?.description} />
                </div>
                <div>
                    <button type='submit'>{
                        isLoading ? 'Editing...' : 'Edit Category'
                    }</button>
                </div>
            </form>
        </div>
    )
}

export default EditCategory