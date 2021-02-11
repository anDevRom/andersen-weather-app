import {all} from 'redux-saga/effects'
import {locationWatcher} from "./location/locationSaga";
import {weatherWatcher} from "./weather/weatherSaga";
import {appWatcher} from "./app/appSaga";

export function* rootWatcher() {
    yield all([locationWatcher(), weatherWatcher(), appWatcher()])
}
