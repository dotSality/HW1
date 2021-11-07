import React from 'react'
import {TaskType} from './HW2';
import s from './Task.module.css';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type TaskPropsType = {
    // key не нужно типизировать
    task: TaskType
    deleteTaskCallback: (_id: number) => void
}

function Task(props: TaskPropsType) {
    const deleteCallback = () => {
        props.deleteTaskCallback(props.task._id);
    }

    const priorityClass = `${s.priority} ${s[props.task.priority]}`

    return (
        <div className={s.taskContainer}>
            <span className={s.taskName}>{props.task.name} </span>
            <span className={priorityClass}>{props.task.priority} </span>
            <SuperButton red onClick={deleteCallback}>x</SuperButton>
        </div>
    )
}

export default Task
