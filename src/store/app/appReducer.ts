import {IAction} from "../../interfaces/IAction";
import {CHANGE_LANGUAGE, CHANGE_TEMP_PARAM} from "./appTypes";

const initialState = {
    isEnglish: true,
    isCelsius: true
}

export const appReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return {
                ...state,
                isEnglish: !state.isEnglish
            }

        case CHANGE_TEMP_PARAM:
            return {
                ...state,
                isCelsius: !state.isCelsius
            }

        default: return state
    }
}
