import axios from "axios";
import { asyncTodoAC } from "../store/todeReducer";


export const API = {
  getTodos(dispatch) {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .then((res) => dispatch(asyncTodoAC(res.data)));
  },
};
