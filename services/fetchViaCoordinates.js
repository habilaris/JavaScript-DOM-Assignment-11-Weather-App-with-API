const WEATHER_API_KEY = "920fc5e1f7407d24a913b0dba2d09002";

async function fetchWeatherViaCoordinates(latitude, longitude) {
  const URL = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric&exclude=daily,minutely,hourly,alerts`;

  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Error fetching the weather:", response.status);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Something Went Wrong in Catching via Coordinates:", err);
  }
}

export default fetchWeatherViaCoordinates;
