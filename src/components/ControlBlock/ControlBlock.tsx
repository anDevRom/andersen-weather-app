import React from 'react'
import styles from './ControlBlock.module.css'
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {changeLanguage, changeTempParam, fetchBackground} from "../../store/app/appActions";
import { RootState } from '../../store/rootReducer';
import SearchForm from '../SearchForm/SearchForm';
import {setLocation} from "../../store/location/locationActions";

const ControlBlock = () => {
    const dispatch = useDispatch()
    const isEnglish = useSelector((state: RootState) => state.app.isEnglish)
    const isCelsius = useSelector((state: RootState) => state.app.isCelsius)

    const changeLanguageHandler = () => {
        localStorage.setItem('lang', String(!isEnglish ? 'en' : 'ru'))
        dispatch(changeLanguage(!isEnglish))
    }
    const changeTempParamHandler = () => {
        localStorage.setItem('temp', String(!isCelsius ? 'c' : 'f'))
        dispatch(changeTempParam(!isCelsius))
    }
    const changeBackgroundHandler = () => dispatch(fetchBackground())
    const submitHandler = (value: string) => dispatch(setLocation(value))

    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <h1 className={styles.header}>Weather App &#176;</h1>
                <SearchForm isEnglish={isEnglish} submit={submitHandler}/>
            </div>
            <div className={styles.rightSide}>
                <Button value={isEnglish ? 'Background' : 'Фон'}
                        dark={false}
                        clickHandler={changeBackgroundHandler}
                />
                <Button value={isCelsius ? `${String.fromCharCode(0xB0)}C` : `${String.fromCharCode(0xB0)}F`}
                        dark={false}
                        clickHandler={changeTempParamHandler}
                />
                <Button value={isEnglish ? 'ENG' : 'РУС'}
                        dark={false}
                        clickHandler={changeLanguageHandler}
                />
            </div>

        </div>
    )
}

export default ControlBlock
