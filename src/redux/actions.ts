import {
    ADD_CARD_PROPS,
    CITY_WEATHER_FETCH_ASYNC,
    CityWeatherSearchTypes,
    FETCHED_CITY_WEATHER,
    ICardProps,
    ICityWeather
} from "./types";

export const cityWeatherFetchAsync = (searchValue: string): CityWeatherSearchTypes => ({
    type: CITY_WEATHER_FETCH_ASYNC,
    payload: searchValue,
});

export const fetchedCityWeather = (weatherData: ICityWeather): CityWeatherSearchTypes => ({
    type: FETCHED_CITY_WEATHER,
    payload: weatherData
})

export const addCardProps = (cardProps: ICardProps[]): CityWeatherSearchTypes => ({
    type: ADD_CARD_PROPS,
    payload: cardProps
})