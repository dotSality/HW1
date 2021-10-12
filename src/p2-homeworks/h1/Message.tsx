import React from 'react';
import s from './Message.module.css';

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.main}>
            <div className={s.avatarContainer}>
                <div className={s.avatar}>
                    <img src={props.avatar}/>
                </div>
            </div>
            <div className={s.message}>
                <h3>{props.name}</h3>
                <p>{props.message}</p>
                <p className={s.time}>{props.time}</p>
            </div>
        </div>
    )
}

export default Message
