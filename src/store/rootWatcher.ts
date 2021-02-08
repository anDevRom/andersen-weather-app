import {all} from 'redux-saga/effects'
import {locationWatcher} from "./location/locationSaga";

export function* rootWatcher() {
    yield all([locationWatcher()])
}
