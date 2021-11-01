import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';


type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setErrorMessage = (message: string) => setError(message)

    const VALIDATION_EXPRESSION = /[\!\@\#\$\%\^\&\*\(\)\_\-\+\=\\\|\/\,\<\.\>\`\~\'\"\;\:\?\s0-9А-Яа-я]/gm

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setError('')
        setName(e.currentTarget.value)
    }

    const addUser = () => {
        if (name.match(VALIDATION_EXPRESSION) || !name) {
            setErrorMessage('Invalid name format. Please, enter correct name')
        } else {
            alert(`Hello ${name} !`)
            addUserCallback(name)
        }
        setName('')
    }

    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => (e.key === 'Enter') ? addUser() : null

    const totalUsers = `Total users: ${users.length}`

    return (
        <Greeting
            onKeyPress={onKeyPressCallback}
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
