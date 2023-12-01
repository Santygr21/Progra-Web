import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { Button } from "../Button/Button";
import styles from './Form.css'

export function Form (){
    const navigate = useNavigate()

    const {logIn, users } = useAuth()

    const [ formState, setFormState ] = useState({
        email: '',
        password: ''
    })

    const disableBtn = formState.email.trim() === '' || formState.password.trim() === '' || formState.password.trim().length < 4

    const handleSubmit = (e) => {
        e.preventDefault()
        if(users.some(u => u.email === formState.email && u.password === formState.password)){
            logIn(formState)
            navigate('/Dashboard')
        }else{
            alert('Credenciales invalidas')
        }
    }

    const handleOnChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
        console.log(target);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
            type='email'
            name='email'
            id=''
            onChange={handleOnChange}
            value={formState.email}
            placeholder='Username' />
            <input type='password'
            name='password'
            onChange={handleOnChange}
            value={formState.password}
            placeholder='Password' />
            <Button 
            title='Login'
            className='login'
            type='submit'
            disabled={disableBtn}/>
        </form>
    )
}