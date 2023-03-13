import { createStore } from "@reduxjs/toolkit"
import { composeWithDevTools } from "redux-devtools-extension"
import { rootReducer } from "../reducers/rootReducer";

export const createAppStore = () => {

    let store = createStore(rootReducer, composeWithDevTools())

    return store;
}