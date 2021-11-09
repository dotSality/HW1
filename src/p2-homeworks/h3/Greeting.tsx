import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from './HW3';
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: string
    onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPress}, props) => {
    let inputClass = error ? s.error + ' ' + s.input : s.input

    return (
        <div className={s.cont}>
            <div>
                <SuperInputText
                    placeholder={'Enter your name...'}
                    value={name}
                    onKeyPress={onKeyPress}
                    onChange={setNameCallback}
                    error={error}
                    className={inputClass}
                    spanClassName={s.errorBlock}
                />
            </div>
            <SuperButton className={s.addButton} onClick={addUser}>add</SuperButton>
            <span className={s.totalUsers}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
