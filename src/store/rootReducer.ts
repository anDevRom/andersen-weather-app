import {combineReducers} from "redux";
import {appReducer} from "./app/appReducer";
import {locationReducer} from "./location/locationReducer";
import {weatherReducer} from "./weather/weatherReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    location: locationReducer,
    weather: weatherReducer
})

export type RootState = ReturnType<typeof rootReducer>
