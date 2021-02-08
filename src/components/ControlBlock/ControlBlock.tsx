import React from 'react'
import styles from './ControlBlock.module.css'
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {changeLanguage, changeTempParam} from "../../store/app/appActions";
import { RootState } from '../../store/rootReducer';

const ControlBlock = () => {
    const dispatch = useDispatch()
    const isEnglish = useSelector((state: RootState) => state.app.isEnglish)
    const isCelsius = useSelector((state: RootState) => state.app.isCelsius)

    const changeLanguageHandler = () => dispatch(changeLanguage())
    const changeTempParamHandler = () => dispatch(changeTempParam())
    const changeBackgroundHandler = () => {}

    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <h1 className={styles.header}>Weather App &#176;</h1>
                <input
                    placeholder={isEnglish ? 'Choose place' : 'Выберите место'}
                    className={styles.input}
                    type="text"
                />
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
