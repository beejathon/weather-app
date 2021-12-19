import { init, render } from './display.js';

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=6a3db4e49e01caf807c8002be68eae64`;
  try {
    const response = await fetch(url, {mode: 'cors'});
    const rawData = await response.json();
    const data = extractData(rawData);
    render(data);
  } catch (error) {
    console.log(error)
    alert('City not found');
  }
}

function extractData(data) {
  const cityName = data.name;
  const temperature = data.main.temp;
  const feelsLike = data.main.feels_like;
  const tempMax = data.main.temp_max;
  const tempMin = data.main.temp_min;
  const humidity = data.main.humidity;
  const pressure = data.main.pressure;
  const windSpeed = data.wind.speed;
  const description = data.weather[0].description;

  return { cityName, temperature, feelsLike, tempMax, tempMin, humidity, pressure, windSpeed, description };
}

init();

export default getWeather;