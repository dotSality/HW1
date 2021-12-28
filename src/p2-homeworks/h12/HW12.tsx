import React, {ChangeEvent} from "react";
import s from "./HW12.module.css";
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {changeTheme, ThemeStateType} from './bll/themeReducer';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';

const themes = ['dark', 'red', 'some', 'gradient'];

function HW12() {
    const theme = useSelector<AppStoreType, ThemeStateType>(state => state.theme)
    const currentTheme = theme.theme
    const dispatch = useDispatch()

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => dispatch(changeTheme(e.currentTarget.value))
    const onRadioChange = (e: ChangeEvent<HTMLInputElement>) => dispatch(changeTheme(e.currentTarget.value))
    const themeClassName = `${currentTheme}-text`

    return (
        <div className={s[currentTheme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            <SuperSelect onChange={onChangeCallback} value={currentTheme} options={themes}/>
            <SuperRadio className={themeClassName} onChange={onRadioChange} options={themes} value={currentTheme}/>

            <hr/>
        </div>
    );
}

export default HW12;
