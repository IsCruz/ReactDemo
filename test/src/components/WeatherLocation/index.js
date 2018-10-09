import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY, }from './../../constants/weather';
import './styles.css';

const data = {
  temperature : 12,
  weatherState : SUN,
  humidity : 10,
  wind : '10 m/s',
}
const WeatherLocation = () => (
  <div className="weatherLocationCont">
  <Location city={'Barcelona'}></Location>
  <WeatherData data={data}></WeatherData>
  </div>
);
export default WeatherLocation;
