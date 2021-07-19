import { useDispatch } from "react-redux";
import { getTodoList } from "../store/todo-actions";

const Todo = () => {
  const dispatch = useDispatch();

  const fetchList = () =>{
    dispatch(getTodoList())
  }

  return (
    <div>
      <button type="button" onClick={fetchList}>Fetch Todo List</button>
    </div>
  )
}

export default Todo