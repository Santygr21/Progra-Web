import React from 'react'
import { Form } from '../components'
import { AuthContextProvider } from '../context/AuthContextProvider'
import './loginPage.css'

export function LoginPage () {
  return (
      <AuthContextProvider>
        <div className="Arreglo2">
          <img className='BannerArreglo' src="https://hips.hearstapps.com/hmg-prod/images/ghibli-vecino-totoro-miyazaki-netflix-1579597040.jpg"/>
        </div>
        <section className="Arreglo">
          <div className='Arreglo3'>
            <h1>Inicia sesión para ver tus pelis favoritas</h1>
            <p>Bienvenido al fascinante mundo ghibli</p>
            <Form />
          </div>
        </section>
      </AuthContextProvider>
  )
}
