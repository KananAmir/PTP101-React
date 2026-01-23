import { useEffect, useState } from "react"
import { deleteCategoryById, getCategories } from "../services/categoryService"

const Categories = () => {
    const [categories, setCategories] = useState([])


    const handleDelete = async (id) => {
        try {
            const res = await deleteCategoryById(id)

            if (res.status === 200) {
                setCategories((prev) => prev.filter((q) => q.id !== id))
            }
        } catch (error) {
            console.log(error);
        }
    }


    // useEffect(() => {
    //     const getData = async () => {
    //         try {
    //             const data = await getCategories()
    //             setCategories(data)
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     getData()
    // }, [])


    useEffect(() => {
        getCategories().then((data) => {
            setCategories(data)
        }).catch((err) => {
            console.log(err);
        })

    }, [])


    if (categories.length === 0) {
        return (<p>LOADING...</p>)
    }
    return (
        <ul className="mt-4 flex flex-col gap-3">
            {categories.map((category) => (
                <li
                    key={category.id}
                    className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition hover:shadow-md"
                >
                    <p className="text-gray-800 font-medium">
                        {category.name}
                    </p>

                    <button
                        onClick={() => handleDelete(category.id)}
                        className="rounded-lg !bg-red-500 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-red-600 active:scale-95"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>

    )
}

export default Categories