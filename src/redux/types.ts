export interface ICityWeather {
    base: string;
    clouds: Clouds;
    cod: number | null;
    coord: Coord;
    dt: number | null;
    id: number | null;
    main: Main;
    name: string;
    rain: Rain;
    sys: Sys;
    timezone: number | null;
    visibility: number | null;
    weather: Weather[];
    wind: Wind;
}

export interface ICardProps {
    title: string;
    country: string;
    temp: number | null;
    feels_like: number | null;
    main: string;
    description: string;
    speed: number | null;
    pressure: number | null;
    humidity: number | null;
    visibility: number | null;
    id?: number | null;
    weatherId?: number | null;
}

export interface ICityWeatherStore {
    cityWeather: ICityWeather | null
    loading?: boolean;
    searchValue?: string
}

export type CardPropsStore = {
    cardProps: ICardProps[] | null
}

export type Clouds = {
    all: number | null
}

export type Coord = {
    lat: number | null,
    ion: number | null
}

export type Main = {
    feels_like: number | null,
    humidity: number | null,
    pressure: number | null,
    temp: number | null,
    temp_max: number | null,
    temp_min: number | null
}

export type Rain = {
    '1h': number | null,
}

export type Sys = {
    country: string,
    id: number | null,
    sunrise: number | null,
    sunset: number | null,
    type: number | null
}

export type Weather = {
    description: string,
    icon: string,
    id: number | null,
    main: string
}

export type Wind = {
    deg: number | null,
    speed: number | null
}

export const CITY_WEATHER_FETCH_ASYNC = 'CITY_WEATHER_FETCH_ASYNC';
export type CityWeatherFetchAsync = {
    type: typeof CITY_WEATHER_FETCH_ASYNC;
    payload: string;
};

export const FETCHED_CITY_WEATHER = 'FETCHED_CITY_WEATHER';
export type FetchedCityWeather = {
    type: typeof FETCHED_CITY_WEATHER;
    payload: ICityWeather;
};

export const ADD_CARD_PROPS = 'ADD_CARD_PROPS';
export type AddCardProps = {
    type: typeof ADD_CARD_PROPS;
    payload: ICardProps[];
}

export type CityWeatherSearchTypes =
    | CityWeatherFetchAsync
    | FetchedCityWeather
    | AddCardProps;