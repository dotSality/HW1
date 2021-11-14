import React from 'react'
import Header from './Header'
import {AllRoutes} from './Routes'
import {HashRouter} from 'react-router-dom';

function HW5() {
    return (
        <div>
            {/*цвета еще буду изменять и размер кнопок, т.к. эти уже не нравятся:))*/}
            {/*плюс не делал 404, просто сделал больше размер, каюсь*/}
            <HashRouter>

                <Header/>

                <AllRoutes/>


            </HashRouter>
        </div>
    )
}

export default HW5
