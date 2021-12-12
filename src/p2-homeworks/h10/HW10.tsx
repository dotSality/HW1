import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from 'react-redux';
import store, {AppStoreType} from './bll/store';
import {loadingAC} from './bll/loadingReducer';
import loader from './img/32x32.gif'

function HW10() {
    // useSelector, useDispatch
    let dispatch = useDispatch()
    let loadingState = useSelector<AppStoreType, {[key: string]: boolean}>(state => state.loading)
    const loading = loadingState.isLoading

    const setLoading = () => {
        // dispatch
        dispatch(loadingAC(true))
        // setTimeout
        setTimeout(()=>{
            dispatch(loadingAC(false))
        },2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div style={{height: '25px', marginLeft: '35px'}}><img src={loader} alt="loader"/></div>
                ) : (
                    <div style={{height: '25px'}}>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
