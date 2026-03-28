import {useDispatch} from "react-redux";
import {fetchWeather} from "../features/api/reqWeather.js"


const Form = () => {
const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const city = e.currentTarget.city.value.trim();
        dispatch(fetchWeather(city));


    }

    return (
        <form onSubmit={handleSubmit}>

            <input type='text' name={'city'} placeholder={'Print your city'}/>
            <button type='submit'>Get Weather</button>
        </form>
    );
};

export default Form;

