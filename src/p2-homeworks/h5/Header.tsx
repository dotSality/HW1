import React, {useState} from 'react'
import {PATH} from './Routes';
import {NavLink} from 'react-router-dom';
import s from './Navigation.module.css'
import {MouseEvent} from 'react';

function Header() {

    const [isOn, setIsOn] = useState<boolean>(false)

    const onMouseEnterCallback = (e: MouseEvent<HTMLDivElement>) => setIsOn(true)
    const onMouseLeaveCallback = (e: MouseEvent<HTMLDivElement>) => setIsOn(false)

    return (
        <>
            <div className={!isOn ? `${s.header} ${s.hiddenHeader}` : s.header}>
                <div onMouseLeave={onMouseLeaveCallback} className={s.linkCont}>
                    <NavLink className={({isActive}) => isActive ? `${s.link} ${s.active}` : s.link} to={PATH.PRE_JUNIOR}>pre junior</NavLink>
                    <NavLink className={({isActive}) => isActive ? `${s.link} ${s.active}` : s.link} to={PATH.JUNIOR}>JUNIOR</NavLink>
                    <NavLink className={({isActive}) => isActive ? `${s.link} ${s.active}` : s.link} to={PATH.JUNIOR_PLUS}>junior +</NavLink>
                </div>
            </div>
            <div className={isOn ? `${s.marker} ${s.markerTransformed}` : s.marker} onMouseEnter={onMouseEnterCallback}>^</div>
        </>
    )
}

export default Header
