import React, {useEffect, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './common/RangeInputs.module.css'

function HW11() {

    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    const [values, setValues] = React.useState<[number,number]>([1,99])

    const onChangeRange = () => setValue1

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span className={s.valueOne}>{value1}</span>
                <SuperRange
                    step={1}
                    min={0}
                    max={100}
                    onChangeRange={setValue1}

                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    // value={values}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
