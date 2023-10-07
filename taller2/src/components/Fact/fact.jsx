import React from "react";
import {useApp} from '../../hooks/useApp'
import styles from './fact.css'

export function Fact() {
    const{
        catFact, 
        catImg,
        error,
        loading,
        getRandomFact
    } = useApp(); 

    if(error){
        return(<p>{error}</p>)
    }

    if (loading) {
        return (
            <div>
            <svg viewBox="25 25 50 50">
                <circle r="20" cy="50" cx="50"></circle>
            </svg>
            </div>
        )
      }

    if(getRandomFact.current){
        return(
            <p>Click the button to get a random fact about cats</p>
        )
    }

    return(
        <>
        <div className="cardDiv">
        <img src={catImg}/>
        <p>{catFact}</p>
        </div>
        </>
    )

}