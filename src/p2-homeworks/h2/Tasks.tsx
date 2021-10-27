import React from 'react'
import Task from './Task'
import { TaskType, FilterType } from './HW2'
import s from './Task.module.css';

type TasksPropsType = { // need to fix any
    data: Array<TaskType>
    setFilter: (filter: FilterType) => void
    deleteTaskCallback: (_id: number) => void
    filter: FilterType
}

function Tasks(props: TasksPropsType) {
    const mappedTasks = props.data.map((a: TaskType) => (
        <Task // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            task={a}
            deleteTaskCallback={props.deleteTaskCallback}
        />
    ))

    const checkFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
        props.setFilter(e.currentTarget.value as FilterType );
    }

    const setClassActive = (filter: FilterType) => {
        return props.filter === filter ? s.buttonActive : s.button;
    }

    return (
        <div className={s.mainContainer}>

            {mappedTasks}
            <div className={s.buttonContainer}>
                <button onClick={checkFilter} className={setClassActive('all')} value={'all'}>All</button>
                <button onClick={checkFilter} className={setClassActive('high')} value={'high'}>High</button>
                <button onClick={checkFilter} className={setClassActive('middle')} value={'middle'}>Middle</button>
                <button onClick={checkFilter} className={setClassActive('low')} value={'low'}>Low</button>
            </div>
        </div>
    )
}

export default Tasks
