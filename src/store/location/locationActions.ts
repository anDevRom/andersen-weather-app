import {CHANGE_VIEWPORT, FETCH_LOCATION, SET_GEO_DATA, SET_LOCATION} from "./locationTypes";
import {IGeoData} from "../../interfaces/IGeoData";
import {IViewport} from "../../interfaces/IViewport";

export const fetchLocation = () => ({type: FETCH_LOCATION})

export const setLocation = (city: string) => {
    return {
        type: SET_LOCATION,
        payload: city
    }
}

export const setGeoData = (data: IGeoData) => {
    return {
        type: SET_GEO_DATA,
        payload: data
    }
}

export const changeViewport = (viewport: IViewport) => ({
    type: CHANGE_VIEWPORT,
    payload: viewport
})
