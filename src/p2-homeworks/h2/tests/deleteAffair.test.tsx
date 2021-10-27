import React from 'react'
import {TaskType, deleteTask} from '../HW2'

let initialState: TaskType[]

beforeEach(() => {
    initialState = [
        {_id: 1, name: 'React', priority: 'high'},
        {_id: 2, name: 'anime', priority: 'low'},
        {_id: 3, name: 'games', priority: 'low'},
        {_id: 4, name: 'work', priority: 'high'},
        {_id: 5, name: 'html & css', priority: 'middle'},
        {_id: 6, name: 'porn', priority: 'low'},
    ]
})

test('delete 0', () => {
    const newState = deleteTask(initialState, 0)
    expect(newState.length).toBe(6)
})
test('delete 1', () => {
    const newState = deleteTask(initialState, 1)
    expect(newState.length).toBe(5)
})
test('delete 3', () => {
    const newState = deleteTask(initialState, 3)
    expect(newState.length).toBe(5)
})
test('delete 6', () => {
    const newState = deleteTask(initialState, 6)
    expect(newState.length).toBe(5)
})
test('delete 7', () => {
    const newState = deleteTask(initialState, 7)
    expect(newState.length).toBe(6)
})
