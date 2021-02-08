import React from 'react'
import ControlBlock from "../ControlBlock/ControlBlock";
import Main from '../Main/Main';
import styles from './App.module.css'
import {useDispatch} from "react-redux";
import {fetchLocation} from "../../store/location/locationActions";

const App = () => {
    const dispatch = useDispatch()
    dispatch(fetchLocation())

    return (
        <div className={styles.container}>
            <ControlBlock/>
            <Main/>
        </div>
    )
}

export default App
