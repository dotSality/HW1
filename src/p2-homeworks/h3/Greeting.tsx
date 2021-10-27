import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from './HW3';

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
    {name, setNameCallback, addUser, error, totalUsers, onKeyPress}) => {
    const inputClass = error ? s.error + ' ' + s.input : s.input

    return (
        <div>
            <div className={s.cont}>
                <input
                    placeholder={'Enter your name...'}
                    autoFocus={true}
                    value={name}
                    onKeyPress={onKeyPress}
                    onChange={setNameCallback}
                    className={inputClass}
                />
                <button className={s.addButton} onClick={addUser}>add</button>
                <span className={s.totalUsers}>{totalUsers}</span>
            </div>
            <span className={s.errorBlock}>{error}</span>
        </div>
    )
}

export default Greeting
