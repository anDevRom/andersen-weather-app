import React from 'react'
import ControlBlock from "../ControlBlock/ControlBlock";
import Main from '../Main/Main';
import styles from './App.module.css'
import {useDispatch, useSelector} from "react-redux";
import {fetchLocation} from "../../store/location/locationActions";
import {changeLanguage, changeTempParam, fetchBackground} from '../../store/app/appActions';
import {RootState} from "../../store/rootReducer";

const App = () => {
    const dispatch = useDispatch()

    dispatch(fetchLocation())
    dispatch(fetchBackground())

    if (!!localStorage.getItem('lang')) {
        localStorage.getItem('lang') === 'en' ? dispatch(changeLanguage(true)) : dispatch(changeLanguage(false))
    }
    if (!!localStorage.getItem('temp')) {
        localStorage.getItem('temp') === 'c' ? dispatch(changeTempParam(true)) : dispatch(changeTempParam(false))
    }

    const background = useSelector((state: RootState) => state.app.background)

    return (
        <div className={styles.container} style={{backgroundImage: `url('${background}')`}}>
            <ControlBlock/>
            <Main/>
        </div>
    )
}

export default App
