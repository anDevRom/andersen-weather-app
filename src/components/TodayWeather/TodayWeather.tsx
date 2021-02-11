import React from 'react'
import styles from './TodayWeather.module.css'
import {useSelector} from "react-redux";
import {RootState} from "../../store/rootReducer";

const TodayWeather = () => {
    const isEnglish = useSelector((state: RootState) => state.app.isEnglish)
    const isCelsius = useSelector((state: RootState) => state.app.isCelsius)
    const currentWeather = useSelector((state: RootState) => state.weather.currentWeather)

    const currentLang = isEnglish ? 'en' : 'ru'

    return (
        <div className={styles.container}>
            <h1 className={styles.currentTemp + ' ' + styles.cell}>
                {isCelsius ? currentWeather[currentLang].temp_c : currentWeather[currentLang].temp_f}
                &#176;
                {isCelsius ? 'C' : 'F'}
            </h1>
            <div className={styles.summary + ' ' + styles.cell}>
                <img src={currentWeather[currentLang].icon} />
                {currentWeather[currentLang].summary}
            </div>
            <div className={styles.feelsLike + ' ' + styles.cell}>
                <b>
                    {isEnglish ? 'Feels like' : 'Ощущается как'}
                </b>
            </div>
            <div className={styles.feelsLikeValue + ' ' + styles.cell}>
                {isCelsius ? currentWeather[currentLang].feelsLike_c : currentWeather[currentLang].feelsLike_f}
                &#176;
                {isCelsius ? 'C' : 'F'}
            </div>
            <div className={styles.wind + ' ' + styles.cell}>
                <b>{isEnglish ? 'Wind' : 'Ветер'}</b>
                <div className={styles.ml15}>
                    {currentWeather[currentLang].wind}
                    {isEnglish ? ' km/h' : ' км/ч'}
                </div>
            </div>
            <div className={styles.humidity + ' ' + styles.cell}>
                <b>{isEnglish ? 'Humidity' : 'Влажность'}</b>
                <div className={styles.ml15}>
                    {currentWeather[currentLang].humidity}
                    {' %'}
                </div>
            </div>
        </div>
    )
}

export default TodayWeather
