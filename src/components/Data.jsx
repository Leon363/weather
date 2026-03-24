import Form from "./Form.jsx";
import Weather from "./Weather.jsx";


import {useSelector} from "react-redux";

const Data = () => {
    const weatherInfo = useSelector(state => state.weatherInfo);
    const message = useSelector(state => state.message);



    return (
        <div>
            <Form />
            <Weather weather={weatherInfo} message={message}/>
        </div>
    );
};

export default Data;

//
// <p>Temp: {weatherInfo.temp}</p>
// <p>Pressure: {weatherInfo.pressure}</p>