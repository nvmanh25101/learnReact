import { CREATE_TODO, DELETE_TODO, SET_TODO } from "./constants";

const initState = {
    todos: [],
    todoInput: "",
};

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO:
            return {
                ...state,
                todoInput: action.payload
            }
        case CREATE_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo, index) => index !== action.payload)
            }
        default:
            throw new Error('Invalid action type');
    }
}

export { initState };
export default reducer;
