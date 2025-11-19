import { useSelector } from "react-redux"
import { ToDo } from "../ToDo/ToDo"
import { useEffect } from "react"
import { API } from "../../api/api."
import { addAC, changeTextAC } from "../../store/todeReducer"


import "./Input.css"

export const Input = ({ dispatch }) => {
    const { text, todos } = useSelector((state) => state.todoReducer)

    useEffect(() => {
        API.getTodos(dispatch)
    }, [])


    return (
        <div className='section'>

            <div className="sectionInput">
                <input
                    className='addInput'
                    placeholder="Write a task..."
                    value={text}
                    onChange={(e) => dispatch(changeTextAC(e.target.value))} />
                <button
                    className='addBTN'
                    onClick={() => dispatch(addAC())}>+</button>
            </div>


            <div className='sectionTodos'>
                {
                    todos.map((todo) => <ToDo key={todo.id} todo={todo} dispatch={dispatch} />)
                }
            </div>

        </div>

    )
}
