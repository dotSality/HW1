import React from 'react';
import s from '../Navigation.module.css';
import HW7 from '../../h7/HW7';
import HW8 from '../../h8/HW8';
import HW9 from '../../h9/HW9';
import HW10 from '../../h10/HW10';

export function Junior() {
    return (
        <div>
            <div className={s.empty}></div>
            <HW7/>
            <HW8/>
            <HW9/>
            <HW10/>

        </div>
    )
}
