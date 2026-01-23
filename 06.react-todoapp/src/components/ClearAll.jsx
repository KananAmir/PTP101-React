import Swal from "sweetalert2";

const ClearAll = ({ setTodos, todos}) => {

    const handleClearAll = ()=>{
         Swal.fire({
              title: "Are you sure to delete all todos?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!"
            }).then((result) => {
              if (result.isConfirmed) {
               setTodos([])
        
                Swal.fire({
                  title: "Deleted All!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
              }
            });
    }
  return (
    <button className="clear-all-btn" disabled={todos.length === 0 ? true : false} onClick={handleClearAll}>ClearAll</button>
  )
}

export default ClearAll