import {FETCH_LOCATION, SET_LOCATION} from "./locationTypes";

export const fetchLocation = () => ({type: FETCH_LOCATION})
export const setLocation = (data: {city: string, country: string}) => ({
    type: SET_LOCATION,
    payload: data
})
