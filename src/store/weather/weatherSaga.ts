import {call, put, takeEvery} from "redux-saga/effects";
import {FETCH_CURRENT_WEATHER} from "./weatherTypes";
import {fetchData} from "../../utils";
import {setWeather} from "./weatherActions";
import {IAction} from "../../interfaces/IAction";

export function* weatherWatcher() {
    yield takeEvery(FETCH_CURRENT_WEATHER, weatherWorker)
}

async function requestWeather(query: string) {
    const en = await fetchData(`https://api.weatherapi.com/v1/current.json?key=4561c5cd7b6f4a87898134601210702&q=${query}`)
    const ru = await fetchData(`https://api.weatherapi.com/v1/current.json?key=4561c5cd7b6f4a87898134601210702&q=${query}&lang=ru`)

    const forecast = await fetchData(`https://api.weatherapi.com/v1/forecast.json?key=4561c5cd7b6f4a87898134601210702&q=${query}&days=4`)

    return {
        en,
        ru,
        forecast
    }
}

function* weatherWorker(action: IAction) {
    const data = yield call(() => requestWeather(action.payload))
    yield put(setWeather(data))
}
