import React from 'react'
import styles from './TodayBlock.module.css'
import {useSelector} from "react-redux";
import {RootState} from "../../store/rootReducer";
import TimeField from '../TimeField/TimeField';

const TodayBlock = () => {
    const city = useSelector((state: RootState) => state.location.location.city)
    const country = useSelector((state: RootState) => state.location.location.country)
    const isEnglish = useSelector((state: RootState) => state.app.isEnglish)


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
                Weather
            </div>
        </div>
    )
}

export default TodayBlock
