import React from 'react'
import Task from './Task'
import { TaskType, FilterType } from './HW2'
import s from './Task.module.css';

type TasksPropsType = { // need to fix any
    data: Array<TaskType>
    setFilter: (filter: FilterType) => void
    deleteTaskCallback: (_id: number) => void
}

function Tasks(props: TasksPropsType) {
    const mappedTasks = props.data.map((a: TaskType) => (
        <Task // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            task={a}
            deleteTaskCallback={props.deleteTaskCallback}
        />
    ))

    const setAll = () => { props.setFilter('all') } // need to fix
    const setHigh = () => { props.setFilter('high') }
    const setMiddle = () => { props.setFilter('middle') }
    const setLow = () => { props.setFilter('low') }

    return (
        <div className={s.mainContainer}>

            {mappedTasks}
            <div className={s.buttonContainer}>
                <button onClick={setAll}>All</button>
                <button onClick={setHigh}>High</button>
                <button onClick={setMiddle}>Middle</button>
                <button onClick={setLow}>Low</button>
            </div>
        </div>
    )
}

export default Tasks
