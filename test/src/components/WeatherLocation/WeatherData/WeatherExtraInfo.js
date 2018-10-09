import React from 'react';
import './styles.css';
const WeatherExtraInfo = ({humidity, wind}) => (
    <div className="WeatherExtraInfoCont" >
    <span className="WeatherExtraInfoText">{`Humedad: ${humidity}% - `}</span>
    <span className="WeatherExtraInfoText">{`Vientos: ${wind}`}</span>
    </div>
);
export default WeatherExtraInfo;
