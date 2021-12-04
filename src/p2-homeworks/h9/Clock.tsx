import moment from 'moment'
import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState(moment())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
        setTimerId(0)
        setDate(date)
    }
    const start = () => {
        stop()
        setTimeout(() => {
            setDate(moment())
            const id: number = window.setInterval(() => {
                setDate(moment())
            }, 1000)
            setTimerId(id)
        },1000)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date.format('HH:mm:ss')
    const stringDate = date.format('DD.MM.YYYY')

    return (
        <div>
            <span
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className={s.div}
            >
                {timerId !== 0 ? stringTime : ''}
            </span>
            {/*я сделал исчезающие часики при отключении таймера*/}
            {show && timerId !== 0 ? (<div className={s.div}>{stringDate}</div>) : (<div className={s.div}></div>)}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>
        </div>
    )
}

export default Clock
