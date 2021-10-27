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

    const VALIDATION_EXPRESSION =/[\!\@\#\$\%\^\&\*\(\)\_\-\+\=\\\|\/\,\<\.\>\s\`\~\'\"\;\:\?0-9А-Яа-я]/gmi

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value === ' ') {
            setErrorMessage('Does your name start with a space?')
        } else {
            setName(e.currentTarget.value)
            setError('')
        }
    }


    const addUser = () => {
        if (name.match(VALIDATION_EXPRESSION)) {
            setErrorMessage('Invalid name format. Please, enter correct name')
        } else {
            alert(`Hello ${name} !`)
            setName('')
            addUserCallback(name)
        }
    }

    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) =>  (e.key === 'Enter') ? addUser() : null

    const totalUsers = `Total users: ${users.length}` // need to fix

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
