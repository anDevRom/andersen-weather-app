import {call, put, takeEvery } from "redux-saga/effects";
import {FETCH_LOCATION, SET_LOCATION} from "./locationTypes";
import {setGeoData, setLocation} from "./locationActions";
import {fetchData, transformQuery} from "../../utils";
import {IAction} from "../../interfaces/IAction";

export function* locationWatcher() {
    yield takeEvery(FETCH_LOCATION, fetchLocationWorker)
    yield takeEvery(SET_LOCATION, setLocationWorker)
}

function* fetchLocationWorker() {
    const ipData = yield call(fetchData.bind(null, 'https://ipinfo.io/json?token=07e5dc8043ecdf'))
    yield put(setLocation(transformQuery(ipData.city)))
}

function* setLocationWorker(action: IAction) {
    const geoDataEN = yield call(fetchData.bind(null, `https://api.opencagedata.com/geocode/v1/json?language=en&q=${action.payload}&key=c4c44fdaad1049d69e2506d6eb7740ef`))
    const geoDataRU = yield call(fetchData.bind(null, `https://api.opencagedata.com/geocode/v1/json?language=ru&q=${action.payload}&key=c4c44fdaad1049d69e2506d6eb7740ef`))
    yield put(setGeoData({
        cityEN: geoDataEN.results[0].components.city || geoDataEN.results[0].components.town,
        cityRU: geoDataRU.results[0].components.city || geoDataRU.results[0].components.town,
        countryEN: geoDataEN.results[0].components.country,
        countryRU: geoDataRU.results[0].components.country,
        coordinates: `${geoDataEN.results[0].geometry.lat},${geoDataEN.results[0].geometry.lng}`,
        dms: {
            lat: geoDataEN.results[0].annotations.DMS.lat,
            lng: geoDataEN.results[0].annotations.DMS.lng,
        }
    }))
}
