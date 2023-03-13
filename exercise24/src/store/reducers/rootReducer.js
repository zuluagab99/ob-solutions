import { combineReducers } from "@reduxjs/toolkit";
import { filterReducer } from "./filterReducer";
import { todosReducer } from "./todosReducer";

export const rootReducer = combineReducers(
    {
        // state name and the reducer that handles it 
        todosState: todosReducer,
        filterState: filterReducer
    }
)