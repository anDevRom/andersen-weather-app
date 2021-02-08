import {call, put, takeEvery } from "redux-saga/effects";
import {FETCH_LOCATION} from "./locationTypes";
import {setLocation} from "./locationActions";
import {fetchData} from "../../utils";

function* fetchLocationWorker() {
    const data = yield call(fetchData.bind(null, 'https://ipinfo.io/json?token=07e5dc8043ecdf'))
    yield put(setLocation(data))
}

export function* locationWatcher() {
    yield takeEvery(FETCH_LOCATION, fetchLocationWorker)
}
