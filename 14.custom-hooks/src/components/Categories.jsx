// import { useState } from "react"
import { useFetch } from "../hooks/useFetch"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { useForm } from "../hooks/useForm"
import Modal from "./Modal"
import { useState } from "react"

const Categories = () => {
    const [ isModalOpen, setIsModalOpen] = useState(false)
    const [ selectedCategory, setSelectedCategory] = useState(null)
    const { data, loading, error } = useFetch('https://northwind.vercel.app/api/categories')
    const [wishlist, setWishlist] = useLocalStorage('wishlist', [])
    
    const { values, handleChange, reset} = useForm({
        name: '',
        description: ''
    })



    const toggleWishlist = (category) => {
        const idx = wishlist.findIndex((q) => q.id === category.id)
        if (idx === -1) {
            setWishlist([...wishlist, category])
        }
        else {
            // wishlist.splice(idx, 1)
            // setWishlist([...wishlist])

            const updatedWishlist = wishlist.filter((q) => q.id !== category.id)
            setWishlist(updatedWishlist)
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
       
        try {
            const response = await fetch('https://northwind.vercel.app/api/categories', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })

            if (!response.ok) {
                throw new Error('Failed to add category');
            }

            reset();

        } catch (error) {
            console.log(error);
            
        }


    }



    if (loading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>


    return (
      <>
      
        <div>
            <h2>Categories</h2>

            <hr />
            <h2>Add Category Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="Category Name" name="name" value={values.name} onChange={handleChange}/>
                </div>
                <div>
                    <input type="text" placeholder="Category Description" name="description" value={values.description} onChange={handleChange} />
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form> 
            <hr />
            <ul>{
                data?.map((c) => (
                    <li key={c.id}>
                        <span>{c.name}</span>
                        <button onClick={() => {
                            toggleWishlist(c)
                        }}>add to wishlist</button>
                        <button onClick={()=> {
                            setSelectedCategory(c)
                            setIsModalOpen(true)
                        }}>view</button>
                    </li>
                ))} 
            </ul>
        </div>
        
        
        <Modal isOpen={isModalOpen} onClose={()=>{
            setIsModalOpen(false)
        }}>
            <h2>Category Details</h2>
            {selectedCategory && (
                <div>
                    <p><strong>Name:</strong> {selectedCategory.name}</p>
                    <p><strong>Description:</strong> {selectedCategory.description}</p>
                </div>
            )}

        </Modal></>
    )
}

export default Categories