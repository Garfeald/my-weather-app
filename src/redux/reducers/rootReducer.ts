import { combineReducers } from 'redux';
import {cityWeatherReducer} from "./citysWeatherReducer";
import {cordPropsReducer} from "./cordPropsReducer";

export const rootReducer = combineReducers({
    cityWeather: cityWeatherReducer,
    cardProps: cordPropsReducer
});

export type AppState = ReturnType<typeof rootReducer>;