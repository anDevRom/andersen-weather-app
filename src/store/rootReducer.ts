import {combineReducers} from "redux";
import {appReducer} from "./app/appReducer";
import {locationReducer} from "./location/locationReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    location: locationReducer
})

export type RootState = ReturnType<typeof rootReducer>
