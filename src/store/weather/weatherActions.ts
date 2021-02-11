import {FETCH_CURRENT_WEATHER, SET_CURRENT_WEATHER} from "./weatherTypes";

export const fetchWeather = (query: string) => ({
    type: FETCH_CURRENT_WEATHER,
    payload: query
})

export const setWeather = (data: any) => ({
    type: SET_CURRENT_WEATHER,
    payload: data
})
