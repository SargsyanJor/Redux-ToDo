const initState = {
  text: "",
  todos: [],
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "changeText": {
      return {
        ...state,
        text: action.payload,
      };
    }
    case "add": {
      if (state.text.trim() !== "") {
        return {
          ...state,
          todos: [
            ...state.todos,
            { id: Date.now(), title: state.text, isDone: false },
          ],
          text: "",
        };
      }
    }
    case "checkChange": {
        return {
            ...state,
           todos: [
            ...state.todos.map((elm) => {
                if(elm.id === action.payload){
                    return {
                        ...elm,
                        isDone :!elm.isDone
                    }
                } else {
                    return elm
                }
            })
           ]
        }
    }
    case "delete":
      return {
        ...state,
        todos: [...state.todos.filter((elm) => elm.id !== action.payload)],
      };
    default:
      return state;
  }
};

export default todoReducer;
