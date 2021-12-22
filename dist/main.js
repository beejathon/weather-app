/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "units": () => (/* binding */ units)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


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
    const weather = await (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.getWeather)(city);
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
    const weather = await (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.getWeather)(current);
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



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeather": () => (/* binding */ getWeather)
/* harmony export */ });
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ "./src/display.js");


async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${_display_js__WEBPACK_IMPORTED_MODULE_0__.units}&APPID=6a3db4e49e01caf807c8002be68eae64`;
  try {
    const response = await fetch(url, {mode: 'cors'});
    const rawData = await response.json();
    const data = extractData(rawData);
    return data;
  } catch (error) {
    console.log(error);
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

(0,_display_js__WEBPACK_IMPORTED_MODULE_0__.init)();



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDOztBQUV2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixxREFBVTtBQUNwQztBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHFEQUFVO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJEQUEyRCxvQ0FBb0M7QUFDL0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEUwQzs7QUFFMUM7QUFDQSxtRUFBbUUsS0FBSyxTQUFTLDhDQUFLLENBQUM7QUFDdkY7QUFDQSx1Q0FBdUMsYUFBYTtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQSxpREFBSTs7Ozs7Ozs7VUM1Qko7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFdlYXRoZXIgfSBmcm9tICcuL2luZGV4LmpzJ1xuXG5sZXQgY3VycmVudDtcbmxldCB1bml0cyA9ICdtZXRyaWMnO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHNlYXJjaENpdHkpO1xuICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlJyk7XG4gIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVVuaXRzKVxufVxuXG5mdW5jdGlvbiByZW5kZXIoZGF0YSkge1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHlOYW1lJyk7XG4gIG5hbWUudGV4dENvbnRlbnQgPSBkYXRhLmNpdHlOYW1lO1xuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXAnKTtcbiAgdGVtcC50ZXh0Q29udGVudCA9IGRhdGEudGVtcGVyYXR1cmU7XG4gIGNvbnN0IGZlZWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWxzJyk7XG4gIGZlZWxzLnRleHRDb250ZW50ID0gZGF0YS5mZWVsc0xpa2U7XG4gIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzYycpO1xuICBkZXNjLnRleHRDb250ZW50ID0gZGF0YS5kZXNjcmlwdGlvbjtcbiAgY29uc3QgbWF4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21heCcpO1xuICBtYXgudGV4dENvbnRlbnQgPSBkYXRhLnRlbXBNYXg7XG4gIGNvbnN0IG1pbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaW4nKTtcbiAgbWluLnRleHRDb250ZW50ID0gZGF0YS50ZW1wTWluO1xuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZGl0eScpO1xuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGRhdGEuaHVtaWRpdHk7XG4gIGNvbnN0IHByZXNzdXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXNzdXJlJyk7XG4gIHByZXNzdXJlLnRleHRDb250ZW50ID0gZGF0YS5wcmVzc3VyZTtcbiAgY29uc3Qgd2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kJyk7XG4gIHdpbmQudGV4dENvbnRlbnQgPSBkYXRhLndpbmRTcGVlZDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2VhcmNoQ2l0eShlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGUudGFyZ2V0KTtcbiAgICBjb25zdCByYXdEYXRhID0gZGF0YS5nZXQoJ2NpdHknKTtcbiAgICBjb25zdCBjaXR5ID0gcmF3RGF0YS5zcGxpdCgnICcpLmpvaW4oJysnKTtcbiAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgZ2V0V2VhdGhlcihjaXR5KTtcbiAgICBjdXJyZW50ID0gY2l0eTtcbiAgICByZW5kZXIod2VhdGhlcik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaCcpLnJlc2V0KCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHRvZ2dsZVVuaXRzKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB0cnkge1xuICAgIHVuaXRzID0gKHVuaXRzID09PSAnbWV0cmljJykgPyAnaW1wZXJpYWwnIDogJ21ldHJpYyc7XG4gICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IGdldFdlYXRoZXIoY3VycmVudCk7XG4gICAgcmVuZGVyKHdlYXRoZXIpO1xuICAgIHRvZ2dsZVVuaXREaXNwbGF5KCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaCcpLnJlc2V0KCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVVuaXREaXNwbGF5KCkge1xuICBjb25zdCB1bml0RGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bml0cycpO1xuICAodW5pdHMgPT09ICdpbXBlcmlhbCcpID8gdW5pdERpc3BsYXkuaW5uZXJIVE1MID0gYEYmIzE3NjtgIDogdW5pdERpc3BsYXkuaW5uZXJIVE1MID0gYEMmIzE3NjtgO1xufVxuXG5leHBvcnQgeyBpbml0LCB1bml0cyB9OyIsImltcG9ydCB7IGluaXQsIHVuaXRzfSBmcm9tICcuL2Rpc3BsYXkuanMnO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHkpIHtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz0ke3VuaXRzfSZBUFBJRD02YTNkYjRlNDllMDFjYWY4MDdjODAwMmJlNjhlYWU2NGA7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHttb2RlOiAnY29ycyd9KTtcbiAgICBjb25zdCByYXdEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnN0IGRhdGEgPSBleHRyYWN0RGF0YShyYXdEYXRhKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXh0cmFjdERhdGEoZGF0YSkge1xuICBjb25zdCBjaXR5TmFtZSA9IGRhdGEubmFtZTtcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBkYXRhLm1haW4udGVtcDtcbiAgY29uc3QgZmVlbHNMaWtlID0gZGF0YS5tYWluLmZlZWxzX2xpa2U7XG4gIGNvbnN0IHRlbXBNYXggPSBkYXRhLm1haW4udGVtcF9tYXg7XG4gIGNvbnN0IHRlbXBNaW4gPSBkYXRhLm1haW4udGVtcF9taW47XG4gIGNvbnN0IGh1bWlkaXR5ID0gZGF0YS5tYWluLmh1bWlkaXR5O1xuICBjb25zdCBwcmVzc3VyZSA9IGRhdGEubWFpbi5wcmVzc3VyZTtcbiAgY29uc3Qgd2luZFNwZWVkID0gZGF0YS53aW5kLnNwZWVkO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcblxuICByZXR1cm4geyBjaXR5TmFtZSwgdGVtcGVyYXR1cmUsIGZlZWxzTGlrZSwgdGVtcE1heCwgdGVtcE1pbiwgaHVtaWRpdHksIHByZXNzdXJlLCB3aW5kU3BlZWQsIGRlc2NyaXB0aW9uIH07XG59XG5cbmluaXQoKTtcblxuZXhwb3J0IHsgZ2V0V2VhdGhlciB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=