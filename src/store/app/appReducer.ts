import {IAction} from "../../interfaces/IAction";
import {CHANGE_LANGUAGE, CHANGE_TEMP_PARAM, SET_BACKGROUND} from "./appTypes";

const initialState = {
    isEnglish: true,
    isCelsius: true,
    background: ''
}

export const appReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return {
                ...state,
                isEnglish: action.payload
            }

        case CHANGE_TEMP_PARAM:
            return {
                ...state,
                isCelsius: action.payload
            }

        case SET_BACKGROUND:
            return {
                ...state,
                background: action.payload.urls.full
            }

        default: return state
    }
}
