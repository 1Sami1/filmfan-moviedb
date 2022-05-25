import { configureStore } from "@reduxjs/toolkit";
import favsReducer from './favSlice';


export const store = configureStore({
    reducer: {
        favs: favsReducer, 
    }
})