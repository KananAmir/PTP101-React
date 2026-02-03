import axios from 'axios'
import { BASE_URL, ENDPOINTS } from '../constant';

//get all data
const getBooks = async () => {
    try {
        const response = await axios(`${BASE_URL}/${ENDPOINTS.BOOKS}`)
        return response.data
    } catch (error) {
        console.log(error.message);
    }
}

//get data by id
const getBookById = async (id) => {
    try {
        const response = await axios(`${BASE_URL}/${ENDPOINTS.BOOKS}/${id}`)
        return response
    } catch (error) {
        console.log(error.message);
    }
}


// delete data by id
const deleteBookById = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${ENDPOINTS.BOOKS}/${id}`)
        return response

    } catch (error) {
        console.log(error.message);

    }
}

// add new data
const addNewBook = async (payload) => {
    try {
        const response = await axios.post(`${BASE_URL}/${ENDPOINTS.BOOKS}`, payload)
        return response
    } catch (error) {
        console.log(error.message);
    }
}

// edit data by id
const editBookById = async (id, payload) => {
    try {
        const response = await axios.put(`${BASE_URL}/${ENDPOINTS.BOOKS}/${id}`, payload)
        return response
    } catch (error) {
        console.log(error.message);
    }
}


export {
    getBooks,
    getBookById,
    deleteBookById,
    addNewBook,
    editBookById
}
