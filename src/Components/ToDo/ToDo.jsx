import { RiDeleteBin6Line } from "react-icons/ri";

import "./ToDo.css"

export const ToDo = ({ todo, dispatch }) => {
    return (


        <div className="toDoBlock">
            <div key={todo.id} className="todos">
                <input type="checkbox" checked={todo.isDone} onChange={() => dispatch({ type: "checkChange", payload: todo.id })} />
                <li className={todo.isDone ? "color" : ''}>
                    {todo.title}
                </li>
                <RiDeleteBin6Line 
                className="deleteBtn"
                 onClick={() => dispatch({ type: "delete", payload: todo.id })} />
            </div>
        </div>

    )
}
