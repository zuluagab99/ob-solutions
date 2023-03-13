// An incremental Id for ToDo's
let nextTodoId = 0;

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_FILTER = 'SET_FILTER'


export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: {
            id: nextTodoId ++,
            text
        }
    }
};

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: {
            id
        }
    }
};

export const setFilter = (filter) => {
    return {
        type: SET_FILTER,
        payload: {
            filter
        }
        
    }
}