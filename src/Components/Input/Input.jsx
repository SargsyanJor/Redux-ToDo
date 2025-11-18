import { useSelector } from "react-redux"
import { ToDo } from "../ToDo/ToDo"


export const Input = ({ dispatch }) => {


    const { text, todos } = useSelector((state) => state.todoReducer)

    

    return (
        <div className='section'>

            <div className="sectionInput">
                <input
                    className='addInput'
                    placeholder="Write a task..."
                    value={text}
                    onChange={(e) => dispatch({ type: "changeText", payload: e.target.value })} />
                <button
                    className='addBTN'
                    onClick={() => dispatch({ type: "add" })}>+</button>
            </div>


            <div className='sectionTodos'>
                {
                    todos.map((todo) => <ToDo key={todo.id} todo={todo} dispatch={dispatch} />)
                }
            </div>

        </div>

    )
}
