import {initialState} from "../configStore/store.js";


export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PUT_WEATHER':
            if(typeof action.payload === 'object') {
                return {...state, weatherInfo: action.payload, message: ''};
            }

            return { ...state, message: action.payload, weatherInfo: {} };
        default:
            return state;
    }
}


