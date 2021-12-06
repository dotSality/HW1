import React from 'react';


const initState = {
    isLoading: false
}

type InitialStateType = typeof initState

export const loadingReducer = (state = initState, action: IsLoadingActionType): InitialStateType => {
    switch (action.type) {
        case 'TOGGLE-IS-LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean) => ({type: 'TOGGLE-IS-LOADING', isLoading} as const)
type IsLoadingActionType = ReturnType<typeof loadingAC>