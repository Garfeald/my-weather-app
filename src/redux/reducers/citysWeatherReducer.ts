import {
    CityWeatherSearchTypes,
    ICityWeatherStore,
} from "../types";

export const getCityWeatherState = (): ICityWeatherStore => ({
    cityWeather: null,
    loading: false,
    searchValue: ''
})

export const cityWeatherReducer = (
    state: ICityWeatherStore = getCityWeatherState(),
    action: CityWeatherSearchTypes): ICityWeatherStore => {
    switch (action.type) {
        case "CITY_WEATHER_FETCH_ASYNC":
            return {
                ...state,
                loading: true,
                searchValue: action.payload
            }
        case "FETCHED_CITY_WEATHER":
            return {
                ...state,
                loading: false,
                cityWeather: action.payload
            }
        default:
            return state;
    }
}