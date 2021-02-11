import React from 'react'
import styles from './DaysBlock.module.css'
import {useSelector} from "react-redux";
import { RootState } from '../../store/rootReducer';
import {FIRST_DAY, SECOND_DAY, THIRD_DAY} from "../../constants";
import {format} from "date-fns";
import {enGB, ru} from "date-fns/locale";
import {addDays, upperFirstLetter} from "../../utils";

const DaysBlock = () => {
    const isEnglish = useSelector((state: RootState) => state.app.isEnglish)
    const isCelsius = useSelector((state: RootState) => state.app.isCelsius)
    const forecast = useSelector((state: RootState) => state.weather.currentWeather.forecast)

    return (
        <div className={styles.container}>
            <div className={styles.first + ' ' + styles.cellTop}>
                {
                    upperFirstLetter(format(addDays(FIRST_DAY), 'EEEE', {locale: isEnglish ? enGB : ru}))
                }
            </div>
            <div className={styles.second + ' ' + styles.cellTop}>
                {
                    upperFirstLetter(format(addDays(SECOND_DAY), 'EEEE', {locale: isEnglish ? enGB : ru}))
                }
            </div>
            <div className={styles.third + ' ' + styles.cellTop}>
                {
                    upperFirstLetter(format(addDays(THIRD_DAY), 'EEEE', {locale: isEnglish ? enGB : ru}))
                }
            </div>
            <div className={styles.firstData + ' ' + styles.cellBottom}>
                <h2>
                    {isCelsius ? forecast[FIRST_DAY].temp_c : forecast[FIRST_DAY].temp_f}
                    &#176;
                    {isCelsius ? 'C' : 'F'}
                </h2>
                <img src={forecast[FIRST_DAY].icon}/>
            </div>
            <div className={styles.secondData + ' ' + styles.cellBottom}>
                <h2>
                    {isCelsius ? forecast[SECOND_DAY].temp_c : forecast[FIRST_DAY].temp_f}
                    &#176;
                    {isCelsius ? 'C' : 'F'}
                </h2>
                <img src={forecast[SECOND_DAY].icon}/>
            </div>
            <div className={styles.thirdData + ' ' + styles.cellBottom}>
                <h2>
                    {isCelsius ? forecast[THIRD_DAY].temp_c : forecast[FIRST_DAY].temp_f}
                    &#176;
                    {isCelsius ? 'C' : 'F'}
                </h2>
                <img src={forecast[THIRD_DAY].icon}/>
            </div>
        </div>
    )
}

export default DaysBlock
