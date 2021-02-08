import {IAction} from "../../interfaces/IAction";
import {SET_LOCATION} from "./locationTypes";

const initialState = {
    location: {
        city: '',
        country: ''
    }
}

export const locationReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case SET_LOCATION:
            return {
                ...state,
                location: {
                    city: action.payload.city,
                    country: action.payload.country
                }
            }

        default: return state
    }
}
