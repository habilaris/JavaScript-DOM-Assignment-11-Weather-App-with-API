import dotenv from "dotenv";

dotenv.config({ quiet: true });

const env = {
  WEATHER_API_KEY: process.env.WEATHER_API_KEY,
};

export default env;
