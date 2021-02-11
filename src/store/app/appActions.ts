import {CHANGE_LANGUAGE, CHANGE_TEMP_PARAM, FETCH_BACKGROUND, SET_BACKGROUND} from "./appTypes";

export const changeLanguage = (isEnglish: boolean) => ({
    type: CHANGE_LANGUAGE,
    payload: isEnglish
})

export const changeTempParam = (isCelsius: boolean) => ({
    type: CHANGE_TEMP_PARAM,
    payload: isCelsius
})

export const fetchBackground = () => ({type: FETCH_BACKGROUND})

export const setBackground = (background: string) => ({
    type: SET_BACKGROUND,
    payload: background
})
