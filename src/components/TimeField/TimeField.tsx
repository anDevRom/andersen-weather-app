import React from 'react'
import styles from './TimeField.module.css'
import {format} from 'date-fns'
import {enGB, ru} from "date-fns/locale"
import {timeValueTransform, upperFirstLetter} from "../../utils";

class TimeField extends React.Component<any, any> {
    constructor(props: {isEnglish: boolean}) {
        super(props)

        this.getTimeData = this.getTimeData.bind(this)
        this.state = this.getTimeData()
        this.tick = this.tick.bind(this)
        this.timer = this.timer.bind(this)
    }

    getTimeData() {
        return {
            date: format(new Date(), 'iii d LLLL', {locale: this.props.isEnglish ? enGB : ru}),
            time: {
                hours: new Date().getHours(),
                minutes: new Date().getMinutes(),
                seconds: new Date().getSeconds(),
            }
        }
    }

    tick() {
        this.setState(this.getTimeData())
    }

    timer() {
        setInterval(this.tick, 1000)
    }

    componentDidMount() {
        this.timer()
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.date + ' ' + styles.cell}>
                    {
                        upperFirstLetter(this.state.date)
                    }
                </div>
                <div className={styles.hours + ' ' + styles.cell}>
                    {timeValueTransform(this.state.time.hours)}
                </div>
                <div className={styles.divider1 + ' ' + styles.cell}>
                    :
                </div>
                <div className={styles.minutes + ' ' + styles.cell}>
                    {timeValueTransform(this.state.time.minutes)}
                </div>
                <div className={styles.divider2 + ' ' + styles.cell}>
                    :
                </div>
                <div className={styles.seconds + ' ' + styles.cell}>
                    {timeValueTransform(this.state.time.seconds)}
                </div>
            </div>
        )
    }
}

export default TimeField
