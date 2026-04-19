import fetchWeatherViaCoordinates from "./services/fetchViaCoordinates.js";
import fetchWeatherViaCityName from "./services/fetchViaCityName.js";

// const cityInput = document.getElementById("city-name");
// cityInput.focus();

const latitude = 34.0083;
const longitude = 71.5189;
const city = "peshawar";

async function showTemperatureViaCoordinates() {
  let data = await fetchWeatherViaCoordinates(latitude, longitude);
  // let data2 = await fetchWeatherViaCityName(city);
  //   console.log(data.current.weather, "C°");
  console.log(data, "C°");
}

const weatherDisplay = document.getElementById("weather-display");
const temperature = await fetchWeatherViaCoordinates(latitude, longitude);
// weatherDisplay.textContent = temperature.current.weather[0].description;
console.log(temperature.current.weather[0].description);
