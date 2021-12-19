import getWeather from './index.js'

function init() {
  const form = document.getElementById('search');
  form.addEventListener('submit', searchCity );
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

function searchCity(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const rawData = data.get('city');
  const city = rawData.split(' ').join('+');
  getWeather(city);
}

export { init, render };