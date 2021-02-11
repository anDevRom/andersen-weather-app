import React from 'react'
import styles from './Main.module.css';
import TodayBlock from "../TodayBlock/TodayBlock";
import DaysBlock from "../DaysBlock/DaysBlock";
import GeoBlock from "../GeoBlock/GeoBlock";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/rootReducer";
import {fetchWeather} from "../../store/weather/weatherActions";

const Main = () => {
    const dispatch = useDispatch()
    const coordinates = useSelector((state: RootState) => state.location.geoData.coordinates)

    if (coordinates) {
        dispatch(fetchWeather(coordinates))
    }

    return (
        <div className={styles.container}>
            <div className={styles.today + " " + styles.cell}>
                <TodayBlock/>
            </div>
            <div className={styles.days + " " + styles.cell}>
                <DaysBlock/>
            </div>
            <div className={styles.geo + " " + styles.cell}>
                <GeoBlock/>
            </div>
        </div>
    )
}

export default Main
