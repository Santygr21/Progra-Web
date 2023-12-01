import { useContext } from "react";
import { AuthContext } from '../context/AuthContext'

export const useAuth = () => {
    const context = useContext(AuthContext)

    if(!context){
        throw new Error('Error pa')
    }

    const {
        isLogged,
        setIsLogged,
        users
    } = context

    const logIn  = (user) => {
        console.log(user, isLogged);
        setIsLogged(true)
    }

    return(
        {
            logIn,
            isLogged,
            users
        }
    )
}