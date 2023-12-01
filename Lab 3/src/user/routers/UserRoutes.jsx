import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { DashboardPage, ItemDetailPage, NotFoundPage } from '../pages/index'
import { PrivateRoute } from './PrivateRoute'
import { UserContextProvider } from '../context/UserContexProvider'

export function UserRouter () {
  return (
    <UserContextProvider>
      <main>
        <Routes>
          <Route
            path='/dashboard'
            element={
              //<PrivateRoute>
                <DashboardPage />
              //</PrivateRoute>
            }
          />
          <Route
            path='/movie/:id'
            element={
              // <PrivateRoute>
                <ItemDetailPage />
              // </PrivateRoute>
          }
          />
          <Route
            path='/*'
            element={<NotFoundPage />}
          />
        </Routes>
      </main>
      </UserContextProvider>
  )
}