import React from "react";
import {useApp} from '../../hooks/useApp'
import './button.css'

export function Button({tittle}) {
    const{
        loading,
        handleBTN
    } = useApp()

    return(
        <>
            <button className='box' onClick={handleBTN}>{tittle}</button>
        </>
    )
}