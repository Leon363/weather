import  {putWeather} from "../weather/weatherSlice.js";
import {api_key, base_url} from "../../utils/constants.jsx";


export const fetchWeather = (city) => {
    return dispatch => {
        console.log('город', city);
        dispatch(putWeather('I\'ll be right back with your weather...'));
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(res => {
                if (!res.ok) throw new Error();
                return res.json();
            })
            .then(data => {
                const info = {
                    city: data.name,
                    country: data.sys.country,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: new Date(data.sys.sunset * 1000)
                    // new Date(data.sunset * 1000)
                };
                dispatch(putWeather(info));
            })
            .catch(() => dispatch(putWeather('City not found or exist')));
    }
}