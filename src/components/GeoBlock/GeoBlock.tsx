import React from "react"
import styles from './GeoBlock.module.css'
import Map from '../Map/Map'
import {useSelector} from "react-redux";
import {RootState} from "../../store/rootReducer";

const GeoBlock = () => {
    const longitude = useSelector((state: RootState) => state.location.geoData.coordinates.split(',')[1])
    const latitude = useSelector((state: RootState) => state.location.geoData.coordinates.split(',')[0])
    const isEnglish = useSelector((state: RootState) => state.app.isEnglish)

    const dms = useSelector((state: RootState) => state.location.geoData.dms)

    return (
        <div className={styles.container}>
            <div className={styles.map}>
                {(longitude && latitude) && <Map/>}
            </div>
            <div className={styles.geo}>
                <div className={styles.longitudeHeader}>
                    {isEnglish ? 'Longitude' : 'Долгота'}
                </div>
                <div className={styles.latitudeHeader}>
                    {isEnglish ? 'Latitude' : 'Широта'}
                </div>
                <div className={styles.longitudeValue}>
                    <b>{dms.lng}</b>
                </div>
                <div className={styles.latitudeValue}>
                    <b>{dms.lat}</b>
                </div>
            </div>
        </div>
    )
}

export default GeoBlock
