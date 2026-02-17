import {api_key, base_url} from "../utils/constants.jsx";
import {useState} from "react";


const Form = ({getWeather}) => {


    const handleSubmit = e => {
        e.preventDefault();
        const city = e.currentTarget.city.value.trim();
        getWeather(city)


    }

    return (
        <form onSubmit={handleSubmit}>

            <input type='text' name={'city'} placeholder={'Print your city'}/>
            <button type='submit'>Get Weather</button>
        </form>
    );
};

export default Form;

