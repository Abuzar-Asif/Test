import {configureStore} from '@reduxjs/toolkit';
import CounterReducer from '../Feature/Counter/CounterSlice.jsx'

export const store=configureStore({
    reducer:{
counter:CounterReducer,
    },
    
})