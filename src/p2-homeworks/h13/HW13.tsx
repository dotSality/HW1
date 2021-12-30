import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import {ChangeEvent, useState} from 'react';
import {requestsAPI} from './api/api';
import {Response} from './Response';

export const HW13 = () => {
    const [checked, setChecked] = useState(true)
    const [text, setText] = useState('')
    const [error, setError] = useState('')
    const onChangeRequest = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
        requestsAPI.post(e.currentTarget.checked)
            .then(res => setText(res.data.info))
            .catch(error => {
                console.log({...error});
                setError(error.response ? error.response.data.errorText : error.message);
            })
        }
    return (
        <div>

            homeworks 13
            <hr/>

            <SuperCheckbox checked={checked} onChange={onChangeRequest}>
                hi
            </SuperCheckbox>

            <hr/>
            <Response error={error} info={text}/>
        </div>
    )
}