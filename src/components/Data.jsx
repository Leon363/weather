import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import {useSelector} from "react-redux";


const Data = () => {

    const message = useSelector(state => state.message);
    const weather = useSelector(state => state.weather);


    return (
        <div>
            <Form />
            <Weather weather={weather} message={message}/>
        </div>
    );
};

export default Data;

//
// <p>Temp: {weatherInfo.temp}</p>
// <p>Pressure: {weatherInfo.pressure}</p>