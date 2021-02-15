import {IAction} from "../../interfaces/IAction";
import {CHANGE_VIEWPORT, SET_GEO_DATA} from "./locationTypes";

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
        },
        mapViewport: {
            longitude: 0,
            latitude: 0
        }
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
                    },
                    mapViewport: {
                        longitude: action.payload.mapViewport.longitude,
                        latitude: action.payload.mapViewport.latitude
                    }
                }
            }

        case CHANGE_VIEWPORT:
            return {
                ...state,
                geoData: {
                    cityEN: state.geoData.cityEN,
                    cityRU: state.geoData.cityRU,
                    countryEN: state.geoData.countryEN,
                    countryRU: state.geoData.countryRU,
                    coordinates: state.geoData.coordinates,
                    dms: {
                        lat: state.geoData.dms.lat,
                        lng: state.geoData.dms.lng,
                    },
                    mapViewport: {
                        longitude: action.payload.longitude,
                        latitude: action.payload.latitude
                    }
                }
            }
        default: return state
    }
}
