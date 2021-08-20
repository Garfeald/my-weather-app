import {ICityWeather} from "../redux/types";

const axios = require('axios');
export const api = {
    fetch: {
        fetchWeather: (payload: string): Promise<ICityWeather> =>
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${payload}&APPID=${process.env.API_KEY}`)
    },
};