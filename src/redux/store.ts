import { configureStore } from "@reduxjs/toolkit";
import { setStatus } from 'src/redux/reducers/cardSlice';
import cardReducer from './reducers/cardSlice';



const store = configureStore({
    reducer: {
        card: cardReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;