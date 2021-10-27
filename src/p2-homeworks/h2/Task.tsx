import React from 'react'
import {TaskType} from './HW2';
import s from './Task.module.css';

type TaskPropsType = {
    // key не нужно типизировать
    task: TaskType
    deleteTaskCallback: (_id: number) => void
}

function Task(props: TaskPropsType) {
    const deleteCallback = () => {
        props.deleteTaskCallback(props.task._id);
    }

    return (
        <div className={s.taskContainer}>
            <span className={s.taskName}>{props.task.name} </span>
            <span className={s.priority}>{props.task.priority} </span>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Task
