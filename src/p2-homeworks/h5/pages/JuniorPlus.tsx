import React from 'react';
import s from '../Navigation.module.css';
import HW12 from '../../h12/HW12';
import {HW13} from '../../h13/HW13';

export function JuniorPlus() {
    return (
        <div>
            <div className={s.empty}></div>

            <HW12/>
            <HW13/>
        </div>
    )
}
