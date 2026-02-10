import { useState } from "react"
import { useDeleteCategoryByIdMutation, useGetAllCategoriesQuery, useGetCategoryByIdQuery } from "../redux/services/categoryApi"
import Loading from "./Loading"

const Categories = ({ setEdit}) => {

    const [selectedCategoryId, setSelectedCategoryId] = useState(null)

    // const { data: categories, error, isLoading, refetch } = useGetAllCategoriesQuery()
    const { data: categories, error, isLoading } = useGetAllCategoriesQuery()

    const { data: selectedCategory } = useGetCategoryByIdQuery(selectedCategoryId)

    // console.log('categories: ', categories) 
    // console.log('error: ', error)
    // console.log('isLoading: ', isLoading)

    const [deleteCategoryById, { isLoading: isDeleting }] = useDeleteCategoryByIdMutation()




    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this category?')) {
            await deleteCategoryById(id)
            // refetch()
        }
    }

    const handleEdit = (category) => {
        setEdit(category)
    }
    if (isLoading) {
        return (<Loading />)
    }

    if (error) {
        return (
            <div style={{
                fontSize: '36px',
                color: 'red'
            }}>{error.error || 'An error occurred'}</div>
        )
    }

    return (
        <div>
            <h3>Categories</h3>
            <div>
                Selected Category: <span>
                    {selectedCategory ? selectedCategory.name : 'None'}
                </span>
            </div>
            <ul>
                {
                    categories.map(category => (
                        <li key={category.id}>
                            <span>{category.name}</span>
                            <button onClick={() => {
                                setSelectedCategoryId(category.id)
                            }}>View</button>
                            <button
                            onClick={() => {
                                handleDelete(category.id)
                            }}>Delete</button>
                            <button onClick={()=>{
                                handleEdit(category)
                            }}>Edit</button>
                        </li>
                    ))
                }
            </ul>



        </div>
    )
}

export default Categories