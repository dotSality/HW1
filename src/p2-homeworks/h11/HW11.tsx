import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState(50)
    const [value2, setValue2] = useState(100)
    const [value3, setValue3] = React.useState<number[]>([value1, value2])


    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div  className={s.rangeBlock}>
                <span>{value1 < value2 ? value1 : value2 -1}</span>
                <SuperRange value1={value1}
                            value2={value2}
                            setValue3={setValue3}
                            onChangeRange={setValue1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div  className={s.doubleRangeBlock}>
                <span>{value1 < value2 ? value1 : value2 -1}</span>
                <SuperDoubleRange
                    value1={value1}
                    value2={value2}
                    value3={value3}
                    setValue1={setValue1}
                    setValue2={setValue2}
                    setValue3={setValue3}
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
