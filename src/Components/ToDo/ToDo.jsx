import { RiDeleteBin6Line } from "react-icons/ri";
import { checkChangeAV, deleteAC } from "../../store/todeReducer";


import "./ToDo.css"

export const ToDo = ({ todo, dispatch }) => {
    return (

        <div className="toDoBlock">
            <div key={todo.id} className="todos">
                <input type="checkbox" checked={todo.isDone} onChange={() => dispatch(checkChangeAV(todo.id))} />
                <li className={`todoLi ${todo.isDone ? "color" : ''}`}>
                    {todo.title.length > 30 ? todo.title.slice(0, 30) + "..." : todo.title}
                </li>
                <RiDeleteBin6Line
                    className="deleteBtn"
                    onClick={() => dispatch(deleteAC(todo.id))} />
            </div>
        </div>

    )
}


