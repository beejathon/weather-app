import { getWeather } from './index.js'

let current;
let units = 'metric';

function init() {
  const form = document.getElementById('search');
  form.addEventListener('submit', searchCity);
  const toggle = document.getElementById('toggle');
  toggle.addEventListener('click', toggleUnits)
}

function render(data) {
  const name = document.getElementById('cityName');
  name.textContent = data.cityName;
  const temp = document.getElementById('temp');
  temp.textContent = data.temperature;
  const feels = document.getElementById('feels');
  feels.textContent = data.feelsLike;
  const desc = document.getElementById('desc');
  desc.textContent = data.description;
  const max = document.getElementById('max');
  max.textContent = data.tempMax;
  const min = document.getElementById('min');
  min.textContent = data.tempMin;
  const humidity = document.getElementById('humidity');
  humidity.textContent = data.humidity;
  const pressure = document.getElementById('pressure');
  pressure.textContent = data.pressure;
  const wind = document.getElementById('wind');
  wind.textContent = data.windSpeed;
}

async function searchCity(e) {
  e.preventDefault();
  try {
    const data = new FormData(e.target);
    const rawData = data.get('city');
    const city = rawData.split(' ').join('+');
    const weather = await getWeather(city);
    current = city;
    render(weather);
    document.querySelector('#search').reset();
  } catch (error) {
    console.log(error);
  }
}

async function toggleUnits(e) {
  e.preventDefault();
  try {
    units = (units === 'metric') ? 'imperial' : 'metric';
    const weather = await getWeather(current);
    render(weather);
    toggleUnitDisplay();
    document.querySelector('#search').reset();
  } catch (error) {
    console.log(error);
  }
}

function toggleUnitDisplay() {
  const unitDisplay = document.getElementById('units');
  (units === 'imperial') ? unitDisplay.innerHTML = `F&#176;` : unitDisplay.innerHTML = `C&#176;`;
}

export { init, units };