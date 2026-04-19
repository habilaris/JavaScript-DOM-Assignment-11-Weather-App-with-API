const WEATHER_API_KEY = "920fc5e1f7407d24a913b0dba2d09002";

async function fetchWeatherViaCityName(city) {
  const URL = `https://api.openweathermap.org/data/3.0/onecall?q=${city}&appid=${WEATHER_API_KEY}&units=metric&exclude=daily,minutely,hourly,alerts`;

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

export default fetchWeatherViaCityName;
