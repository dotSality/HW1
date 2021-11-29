import {UserType} from '../HW8';

const CHECK = 'CHECK';
const SORT = 'SORT';

export const ageSortAC = (age: number) => ({type: CHECK, age} as const);
export const sortAC = (payload: string) => ({type: SORT, payload} as const)
type SortActionType = ReturnType<typeof sortAC>
type AgeSortActionType = ReturnType<typeof ageSortAC>;
type HWReducerActionType = AgeSortActionType | SortActionType

export const homeWorkReducer = (state: UserType[], action: HWReducerActionType): UserType[] => {
    switch (action.type) {
        case SORT: {
            switch (action.payload) {
                case 'up':
                    return [...state].sort((a, b) => a.name > b.name ? 1 : -1);
                case 'down':
                    return [...state].sort((a, b) => a.name > b.name ? -1 : 1)
                default: return state;
            }
        }
        case CHECK: {
            return state.filter(u => u.age >= action.age);
        }
        default: return state
    }
}