import env from "../config/env.js";

async function fetchWeatherViaCoordinates(latitude, longitude) {
  const URL = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${env.WEATHER_API_KEY}&units=metric&exclude=daily,minutely,hourly,alerts`;

  try {
    const responce = await fetch(URL);
    if (!responce.ok) {
      throw new Error("Error fetching the weather:", responce.status);
    }
    const data = await responce.json();
    return data;
  } catch (err) {
    console.error("Something Went Wrong:", err);
  }
}

export default fetchWeatherViaCoordinates;
