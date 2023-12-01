import React from "react";
import styles from './Button.css'

export function Button({ title, onClick, disabled}){
    return(
        <div>
            <button onClick={onClick} className={styles.buttonLogin} disabled={disabled}>{title}</button>
        </div>
    )
}