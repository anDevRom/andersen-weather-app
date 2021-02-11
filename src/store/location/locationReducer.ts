import {IAction} from "../../interfaces/IAction";
import {CHANGE_MAP_VIEWPORT, SET_GEO_DATA} from "./locationTypes";

const initialState = {
    geoData: {
        cityEN: '',
        cityRU: '',
        countryEN: '',
        countryRU: '',
        coordinates: '',
        dms: {
            lat: '',
            lng: '',
        }
    },
    viewport: {
        latitude: 0,
        longitude: 0
    }
}

export const locationReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case SET_GEO_DATA:
            return {
                ...state,
                geoData: {
                    cityEN: action.payload.cityEN,
                    cityRU: action.payload.cityRU,
                    countryEN: action.payload.countryEN,
                    countryRU: action.payload.countryRU,
                    coordinates: action.payload.coordinates,
                    dms: {
                        lat: action.payload.dms.lat,
                        lng: action.payload.dms.lng,
                    }
                }
            }

        case CHANGE_MAP_VIEWPORT:
            return {
                ...state,
                viewport: {
                    latitude: action.payload.latitude,
                    longitude: action.payload.longitude
                }
            }
        default: return state
    }
}
