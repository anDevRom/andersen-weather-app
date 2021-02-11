import {call, put, takeEvery} from "redux-saga/effects";
import { FETCH_BACKGROUND } from "./appTypes";
import {fetchData} from "../../utils";
import { setBackground } from "./appActions";

export function* appWatcher() {
    yield takeEvery(FETCH_BACKGROUND, appWorker)
}

function* appWorker() {
    const data = yield call(fetchData.bind(null, 'https://api.unsplash.com/photos/random?client_id=GODcDtqTlRPKk3Tywo2Og4QAO65EogdX5tYRQiVQbQc&query=nature&orientation=landscape'))
    yield put(setBackground(data))
}
