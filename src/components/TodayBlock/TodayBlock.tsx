import React from 'react'
import styles from './TodayBlock.module.css'
import {useSelector} from "react-redux";
import {RootState} from "../../store/rootReducer";
import TimeField from '../TimeField/TimeField';
import TodayWeather from '../TodayWeather/TodayWeather';

const TodayBlock = () => {
    const isEnglish = useSelector((state: RootState) => state.app.isEnglish)
    const city = useSelector((state: RootState) => state.location.geoData[isEnglish ? 'cityEN' : 'cityRU'])
    const country = useSelector((state: RootState) => state.location.geoData[isEnglish ? 'countryEN' : 'countryRU'])

    return (
        <div className={styles.container}>
            <div className={styles.location}>
                <h3>{city}</h3>
                <p>{country}</p>
            </div>
            <div className={styles.time}>
                <TimeField isEnglish={isEnglish}/>
            </div>
            <div className={styles.weather}>
                <TodayWeather />
            </div>
        </div>
    )
}

export default TodayBlock
