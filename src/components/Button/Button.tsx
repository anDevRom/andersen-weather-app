import React from 'react'
import {IButtonProps} from "../../interfaces/IButtonProps"
import styles from './Button.module.css'

const Button = ({value, dark, clickHandler}: IButtonProps) => (
    <button className={`${styles.button} ${dark ? styles.green : styles.white}`}
            onClick={clickHandler}
    >{value}</button>
)

export default Button
