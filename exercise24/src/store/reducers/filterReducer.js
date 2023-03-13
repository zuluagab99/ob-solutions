import { SET_FILTER } from "../actions/actions"

// The filterValues initial state
let initialState = 'SHOW_ALL'

export const filterReducer = (state=initialState, action) => {
    switch (action.type){
        case SET_FILTER:
            return action.payload.filter
        default:
            return state
    }
}