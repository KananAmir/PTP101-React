import { addNewCategory, editCategoryById } from "../services/categoryService"

const CategoryFrom = ({ setCategories, type, category, setCategory, editId }) => {


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!category.name.trim() || !category.description.trim()) {
            return
        }

        try {

            if (type === 'add') {
                const res = await addNewCategory(category)

                if (res.status >= 200 && res.status < 300) {
                    setCategories(prev => [...prev, res.data])

                }
            } else {
                const res = await editCategoryById(editId, category)
                console.log(res);

                if (res.status >= 200 && res.status < 300) {
                    setCategories((prev) => {
                        const updatedCategories = prev.map((c) => {
                            if (c.id !== editId) {
                                return c
                            } else {
                                return {
                                    name: category.name,
                                    description: category.description,
                                    id: editId
                                }
                            }

                        })


                        return [...updatedCategories]
                    })

                }
            }



            setCategory({
                name: '',
                description: ''
            })

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">
                {type === 'add' ? 'Add New Category' : 'Edit Category'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>

                    <input
                        type="text"
                        placeholder="Enter category name"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={category.name}
                        onChange={(e) =>
                            setCategory({ ...category, name: e.target.value })
                        }
                    />
                </div>

                <div>

                    <input
                        type="text"
                        placeholder="Enter description"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={category.description}
                        onChange={(e) =>
                            setCategory({ ...category, description: e.target.value })
                        }
                    />
                </div>

                <button
                    type="submit"
                    className="w-full !bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                    {type === 'add' ? 'Add' : 'Edit'}
                </button>
            </form>
        </div>
    )
}

export default CategoryFrom


