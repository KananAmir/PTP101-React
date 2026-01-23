import axios from 'axios'
import { BASE_URL } from '../constant';

const getCategories = async () => {
    try {
        const response = await axios(`${BASE_URL}/categories`)
        return response.data
    } catch (error) {
        console.log(error.message);
    }
}
const getCategoryById = async (id) => {
    try {
        const response = await axios(`${BASE_URL}/categories/${id}`)
        return response.data
    } catch (error) {
        console.log(error.message);
    }
}

const deleteCategoryById = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/categories/${id}`)
        return response

    } catch (error) {
        console.log(error.message);

    }
}

const addNewCategory = async (payload) => {
    try {
        const response = await axios.post(`${BASE_URL}/categories`, payload)
        return response
    } catch (error) {
        console.log(error.message);
    }
}

const editCategoryById = async (id, payload) => {
    try {
        const response = await axios.put(`${BASE_URL}/categories/${id}`, payload)
        return response
    } catch (error) {
        console.log(error.message);
    }
}


export {
    getCategories,
    getCategoryById,
    deleteCategoryById,
    addNewCategory,
    editCategoryById
}
