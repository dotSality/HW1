import { Slider } from '@mui/material'
import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState } from 'react'
import s from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {

}

const SuperDoubleRange = () => {
    const [value, setValue] = useState<number[]>([20, 37]);
    const onChangeCallback = (e: Event, newValue: number | number[]) => {

        setValue(newValue as number[]);
    }

    // const finalRangeClassName = `${s.range} ${className ? className : ''}`


    return (
        <div className={s.container}>
            <Slider
                getAriaLabel={() => 'Value range'}
                value={value}
                onChange={onChangeCallback}
                valueLabelDisplay="auto"
                getAriaValueText={() => '20'}
            />
        </div>
    )
}

export default SuperDoubleRange
