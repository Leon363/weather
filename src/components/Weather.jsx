import {useSelector} from "react-redux";


const Weather = () => {

    const data = useSelector(state => state.weather);

    if (typeof data === 'string') {

        return <div className="infoWeath">{data}</div>;

    }

    if (!data) {
        return <div className="infoWeath">Enter city</div>
    }

    else {
        return (
            <div className={'infoWeath'}>
                <p>Location: {data.country}, {data.city}</p>
                <p>Temp: {data.temp}</p>
                <p>Pressure: {data.pressure}</p>
                <p>Sunset: {data.sunset?.toLocaleTimeString()}</p>
            </div>
        );
    }
};

export default Weather;