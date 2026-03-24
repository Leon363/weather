import {applyMiddleware, legacy_createStore as createStore} from "redux";
import {thunk} from "redux-thunk";
import {logger} from "redux-logger/src";



export const initialState ={
    weatherInfo: {},
    message: 'Enter city name',
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PUT_WEATHER':
            return { ...state, weatherInfo: action.payload, message: '' };
        case 'SET_MESSAGE':
            return { ...state, message: action.payload };
        default:
            return state;
    }
}

export const store = createStore(weatherReducer, applyMiddleware(thunk, logger))