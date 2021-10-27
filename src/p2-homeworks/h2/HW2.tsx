import React, {useState} from 'react'
import Tasks from './Tasks'

// types
export type TaskPriorityType = 'low' | 'middle' | 'high'
export type TaskType = {_id: number, name: string, priority: TaskPriorityType}
export type FilterType = 'all' | TaskPriorityType

// constants
const defaultTasks: Array<TaskType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'CS GO', priority: 'low'},
    {_id: 3, name: 'Guitar', priority: 'low'},
    {_id: 4, name: 'Work', priority: 'middle'},
    {_id: 5, name: 'HTML & CSS', priority: 'middle'},
]

// pure helper functions
export const filterTasks = (tasks: Array<TaskType>, filter: FilterType) : Array<TaskType> => { // need to fix any
    return (filter === 'all') ? tasks : tasks.filter(task => task.priority === filter)// need to fix
}
export const deleteTask = (tasks: Array<TaskType>, _id: TaskType['_id']): Array<TaskType> => { // need to fix any
    return tasks.filter(task => task._id !== _id) // need to fix
}

function HW2() {
    const [tasks, setTasks] = useState<Array<TaskType>>(defaultTasks) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredTasks = filterTasks(tasks, filter)
    const deleteTaskCallback = (_id: TaskType['_id']) => setTasks(deleteTask(tasks, _id)) // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Tasks
                data={filteredTasks}
                setFilter={setFilter}
                deleteTaskCallback={deleteTaskCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeTasks/>*/}
            <hr/>
        </div>
    )
}

export default HW2


