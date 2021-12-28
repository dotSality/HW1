const CHANGE_THEME = 'CHANGE-THEME'

const initState = {
    theme: 'dark'
};

export type ThemeStateType = typeof initState

export const themeReducer = (state = initState, action: ChangeThemeAT): ThemeStateType => {
    switch (action.type) {
        case CHANGE_THEME: {
            return {...state, ...action.payload};
        }
        default: return state;
    }
};

export const changeTheme = (theme: string) => ({type: CHANGE_THEME, payload: {theme}} as const);
type ChangeThemeAT = ReturnType<typeof changeTheme>