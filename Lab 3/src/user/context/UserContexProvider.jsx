import { UserContext } from './UserContex'
import React, { useState } from 'react'

export function UserContextProvider ({ children }) {
  const [error, setError] = useState(null)
  const [Movies, setMovies] = useState([{ title: 'Las peliculas no han llegado' }])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isLoading, setIsLoading] = useState(false)

  return (
    <UserContext.Provider value={{
      error,
      setError,
      Movies,
      setMovies,
      selectedCategory,
      setSelectedCategory,
      isLoading,
      setIsLoading
    }}>
      {children}
    </UserContext.Provider>
  )
}
