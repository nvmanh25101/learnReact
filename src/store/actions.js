import { CREATE_TODO, DELETE_TODO, SET_TODO } from "./constants";

export const setTodo = (payload) => ({
    type: SET_TODO,
    payload,
});

export const createTodo = (payload) => ({
    type: CREATE_TODO,
    payload,
})

export const deleteTodo = payload => ({
    type: DELETE_TODO,
    payload,
})