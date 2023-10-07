import { Context } from './context'
import React, { useState, useRef } from 'react'

export function ContextProvider ({ children }) {
  const [error, setError] = useState(null)
  const [catImg, setCatImg] = useState('')
  const [catFact, setCatFact] = useState('')
  const [loading, setLoading] = useState(false)
  const getRandomFact = useRef(true)

  return (
    <Context.Provider value={{
      error,
      setError,
      catFact,
      setCatFact,
      catImg,
      setCatImg,
      loading,
      setLoading,
      getRandomFact
    }}
    >
      {children}
    </Context.Provider>
  )
}