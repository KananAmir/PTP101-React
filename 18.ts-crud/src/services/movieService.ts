import axios from 'axios'
import { BASE_URL, ENDPOINTS } from '../constant'
import type { Movie } from '../types/movie'

// get all movies

const getMovies = async (): Promise<Movie[]> => {
    try {
        const response = await axios(`${BASE_URL}/${ENDPOINTS.MOVIES}`)
        return response.data
    }
    catch (error) {
        console.error('Error fetching movies:', error)
        throw error
    }
}

// get movie by id
const getMovieById = async (id: string): Promise<Movie> => {
    try {
        const response = await axios(`${BASE_URL}/${ENDPOINTS.MOVIES}/${id}`)
        return response.data
    }
    catch (error) {
        console.error('Error fetching movie by id:', error)
        throw error
    }
}

// delete movie by id
const deleteMovieById = async (id: string): Promise<void> => {
    try {
        const response = await axios.delete(`${BASE_URL}/${ENDPOINTS.MOVIES}/${id}`)
        if (response.status !== 200) {
            throw new Error(`Failed to delete movie with id ${id}`)
        }

    } catch (error) {
        console.error('Error deleting movie by id:', error)
        throw error
    }
}

// add movie
const addMovie = async (movie: Movie): Promise<void> => {
    try {
        const response = await axios.post(`${BASE_URL}/${ENDPOINTS.MOVIES}`, movie)
        if (response.status !== 201) {
            throw new Error('Failed to add movie')
        }

    } catch (error) {
        console.error('Error adding movie:', error)
        throw error
    }
}

// edit movie by id
const editMovieById = async (id: string, movie: Movie): Promise<void> => {
    try {
        const response = await axios.put(`${BASE_URL}/${ENDPOINTS.MOVIES}/${id}`, movie)
        if (response.status !== 200) {
            throw new Error(`Failed to edit movie with id ${id}`)
        }
    } catch (error) {
        console.error('Error editing movie by id:', error)
        throw error
    }
}

// edit movie with specific fields by id
const editMovieWithSpecificFieldsById = async (id: string, movie: Partial<Movie>): Promise<void> => {
    try {
        const response = await axios.patch(`${BASE_URL}/${ENDPOINTS.MOVIES}/${id}`, movie)
        if (response.status !== 200) {
            throw new Error(`Failed to edit movie with id ${id}`)
        }
    } catch (error) {
        console.error('Error editing movie by id:', error)
        throw error
    }
}



export { getMovies, getMovieById, deleteMovieById, addMovie, editMovieById, editMovieWithSpecificFieldsById }