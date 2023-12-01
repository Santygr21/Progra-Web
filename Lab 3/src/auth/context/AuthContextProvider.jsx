import { AuthContext } from './AuthContext';
import React, { useState } from 'react';

export function AuthContextProvider({ children }) {
    const [isLogged, setIsLogged] = useState(false)
    const [users, setUsers] = useState(
        [{
            email: 'jhojocor@gmail.com',
            password: '123456'
        },
        {
            email: 'santygr@gmail.com',
            password: '123456'
        }]
    )

    return (
        <AuthContext.Provider value={
            {
                isLogged,
                setIsLogged,
                users,
                setUsers
            }
        }>
            {children}
        </AuthContext.Provider>
    );
}
