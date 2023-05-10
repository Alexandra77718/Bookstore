import { configureStore } from "@reduxjs/toolkit";
import cardReducer from './reducers/cardSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas/rootSaga";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        card: cardReducer,
    }, 
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);


export type RootState = ReturnType<typeof store.getState>;
export default store;