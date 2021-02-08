import React from 'react'
import styles from './Main.module.css';
import TodayBlock from "../TodayBlock/TodayBlock";
import DaysBlock from "../DaysBlock/DaysBlock";
import GeoBlock from "../GeoBlock/GeoBlock";

const Main = () => {


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
