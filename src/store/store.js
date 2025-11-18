import { createStore ,combineReducers} from "redux";
import counterReducer from "./counterReducer";
import todoReducer from "./todeReducer";


const RootReducer = combineReducers({
    counterReducer,
    todoReducer
})

const store = createStore(RootReducer);

export { store };
