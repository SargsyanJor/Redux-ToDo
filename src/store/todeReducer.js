const ASYNC_TODO = "async-todo";
const CHANGE_TEXT = "changeText";
const ADD = "add";
const CHECK_CHANGE = "checkChange"
const DELETE = "delete"

const initState = {
  text: "",
  todos: [],
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case ASYNC_TODO: {
      return {
        ...state,
        todos: action.payload,
      };
    }
    case CHANGE_TEXT: {
      return {
        ...state,
        text: action.payload,
      };
    }
    case ADD: {
      if (state.text.trim() !== "") {
        return {
          ...state,
          todos: [
            { id: Date.now(), title: state.text, isDone: false },
            ...state.todos,
          ],
          text: "",
        };
      }
    }
    case CHECK_CHANGE: {
      return {
        ...state,
        todos: [
          ...state.todos.map((elm) => {
            if (elm.id === action.payload) {
              return {
                ...elm,
                isDone: !elm.isDone,
              };
            } else {
              return elm;
            }
          }),
        ],
      };
    }
    case DELETE:
      return {
        ...state,
        todos: [...state.todos.filter((elm) => elm.id !== action.payload)],
      };
    default:
      return state;
  }
};

export const asyncTodoAC = (data) => ({ type: "async-todo", payload: data });
export const changeTextAC = (text) => ({ type: "changeText", payload: text });
export const addAC = () => ({ type: "add" });
export const checkChangeAV = (id) => ({ type: "checkChange", payload: id })
export const deleteAC = (id) => ({type:"delete",payload:id})

export default todoReducer;
