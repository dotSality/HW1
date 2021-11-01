import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from 'uuid';


export type UserType = {
    _id: string
    name: string
}

const HW3 = () => {
    const [users, setUsers] = useState<UserType[]>( [])
    const addUserCallback = (name: string) => setUsers([...users, {_id: v1(), name: name}])
    console.log(users)
    return (
        <div>
            <hr/>
            homeworks 3
            <br/>
            <br/>

            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
