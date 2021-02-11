import {IAction} from "../../interfaces/IAction";
import {SET_CURRENT_WEATHER} from "./weatherTypes";
import {FIRST_DAY, SECOND_DAY, THIRD_DAY} from "../../constants";

const initialState = {
    currentWeather: {
        en: {
            temp_c: '',
            temp_f: '',
            feelsLike_c: '',
            feelsLike_f: '',
            summary: '',
            wind: '',
            humidity: '',
            icon: ''
        },
        ru: {
            temp_c: '',
            temp_f: '',
            feelsLike_c: '',
            feelsLike_f: '',
            summary: '',
            wind: '',
            humidity: '',
            icon: ''
        },
        forecast: [
            {
                temp_c: '',
                temp_f: '',
                icon: ''
            },
            {
                temp_c: '',
                temp_f: '',
                icon: ''
            },
            {
                temp_c: '',
                temp_f: '',
                icon: ''
            }
        ],

    }
}

export const weatherReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case SET_CURRENT_WEATHER:
            return {
                ...state,
                currentWeather: {
                    en: {
                        temp_c: action.payload.en.current['temp_c'],
                        temp_f: action.payload.en.current['temp_f'],
                        feelsLike_c: action.payload.en.current['feelslike_c'],
                        feelsLike_f: action.payload.en.current['feelslike_f'],
                        summary: action.payload.en.current.condition.text,
                        wind: action.payload.en.current['wind_kph'],
                        humidity: action.payload.en.current.humidity,
                        icon: action.payload.en.current.condition.icon
                    },
                    ru: {
                        temp_c: action.payload.ru.current['temp_c'],
                        temp_f: action.payload.ru.current['temp_f'],
                        feelsLike_c: action.payload.ru.current['feelslike_c'],
                        feelsLike_f: action.payload.ru.current['feelslike_f'],
                        summary: action.payload.ru.current.condition.text,
                        wind: action.payload.ru.current['wind_kph'],
                        humidity: action.payload.ru.current.humidity,
                        icon: action.payload.ru.current.condition.icon
                    },
                    forecast: [
                        {
                            temp_c: action.payload.forecast.forecast.forecastday[FIRST_DAY].day['avgtemp_c'],
                            temp_f: action.payload.forecast.forecast.forecastday[FIRST_DAY].day['avgtemp_f'],
                            icon: action.payload.forecast.forecast.forecastday[FIRST_DAY].day.condition.icon
                        },
                        {
                            temp_c: action.payload.forecast.forecast.forecastday[SECOND_DAY].day['avgtemp_c'],
                            temp_f: action.payload.forecast.forecast.forecastday[SECOND_DAY].day['avgtemp_f'],
                            icon: action.payload.forecast.forecast.forecastday[SECOND_DAY].day.condition.icon
                        },
                        {
                            temp_c: action.payload.forecast.forecast.forecastday[THIRD_DAY].day['avgtemp_c'],
                            temp_f: action.payload.forecast.forecast.forecastday[THIRD_DAY].day['avgtemp_f'],
                            icon: action.payload.forecast.forecast.forecastday[THIRD_DAY].day.condition.icon
                        }
                    ]
                }
            }

        default: return state
    }
}
