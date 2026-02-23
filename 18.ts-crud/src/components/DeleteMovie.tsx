
interface DeleteMovieProps {
    onDeleteMovie: (id: string) => void;
    movieId: string;
}

const DeleteMovie = ({onDeleteMovie, movieId}: DeleteMovieProps) => {
    return (
        <button className="cursor-pointer px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg transition" onClick={()=> onDeleteMovie(movieId)}>
            Delete
        </button>
    )
}

export default DeleteMovie