import { takeEvery, put, call, all } from 'redux-saga/effects';
import {CityWeatherFetchAsync} from "./types";
import {fetchedCityWeather} from "./actions";
import {api} from "../api/api";

function* fetchCtyWeatherWorker(action: CityWeatherFetchAsync): Generator {
    const { payload } = action;
    try {
        const res = yield call(api.fetch.fetchWeather, payload);
        if (res.data) {
            yield put(fetchedCityWeather(res.data));
        }
    } catch (e) {
        yield put({ type: 'REQUEST_FAILED', payload: e.toString() });
    }
}

function* searchMovieWatcher() {
    yield takeEvery('CITY_WEATHER_FETCH_ASYNC', fetchCtyWeatherWorker);
}

export function* rootSaga(): Generator {
    yield all([searchMovieWatcher()]);
}