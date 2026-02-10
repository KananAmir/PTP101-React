import React, { useState } from 'react'
import { useAddCategoryMutation } from '../redux/services/categoryApi'

const AddCategory = () => {

    const [category, setCategory] = useState({
        name: '',
        description: ''
    })

    const [addCategory, { isLoading, isError, isSuccess }] = useAddCategoryMutation()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if( !category.name || !category.description) {
            return;
        }
        
        await addCategory(category)

        setCategory({
            name: '',
            description: ''
        })
    }
    console.log(category)

    return (
        <div>
            <h3>Add Category</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder='Name' onChange={(e) => {
                        setCategory({ ...category, name: e.target.value })
                    }}
                        value={category.name} />
                </div>
                <div>
                    <input type="text" placeholder='Description' onChange={(e) => {
                        setCategory({ ...category, description: e.target.value })
                    }}
                        value={category.description} />
                </div>
                <div>
                    <button type='submit'>{
                        isLoading ? 'Adding...' : 'Add Category'
                    }</button>
                </div>
            </form>
        </div>
    )
}

export default AddCategory