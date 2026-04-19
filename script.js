import fetchWeatherViaCoordinates from "./services/fetchViaCoordinates.js";
import fetchWeatherViaCityName from "./services/fetchViaCityName.js";

const latitude = 34.0083;
const longitude = 71.5189;
const city = "peshawar";

async function showTemperature() {
  //   let data = await fetchWeatherViaCoordinates(latitude, longitude);
  let data2 = await fetchWeatherViaCityName(city);
  //   console.log(data.current.weather, "C°");
  console.log(data2, "C°");
}

showTemperature();
