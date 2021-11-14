import React from 'react'
import s from '../Navigation.module.css';

export function Error404() {
    return (
        <div>
            <div className={s.empty}></div>
            <div className={s.errorPageCont}>
                <div>404</div>
                <div>Page not found!</div>
                <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
            </div>
        </div>
    )
}
