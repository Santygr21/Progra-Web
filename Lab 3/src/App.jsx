import React from 'react'
import { AppRouter } from './AppRouter'
import { AuthContextProvider } from './auth/context/AuthContextProvider'


export function App () {
  return (
    <>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </>
  )
}

