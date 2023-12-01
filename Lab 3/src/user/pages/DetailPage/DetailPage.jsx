import React from 'react'
import { Button } from '../../components'
import { useNavigate, useLocation } from 'react-router-dom'
import '../DetailPage/DetailPage.css'

export function ItemDetailPage () {
  
  const navigate = useNavigate(); 
  const location = useLocation(); 
  
  const movie = location.state; 

  const{title, original_title, image, movie_banner, description, director, producer, release_date, running_time, rt_score} = movie; 
  
  return (
    <>
    <header>
      <Button onClick={() => navigate('/Dashboard')} title='Exit'></Button>
      <h1>{title}</h1>
    </header>
    <section className='MainCont'>
      <img src={movie_banner}/>
      <div className='arreglo'>
        <img src={image}/>
        <h1>{title}</h1>
        <p>Titulo original: {original_title}</p>
        <h3>Duración: {running_time}</h3>
        <h3>{description}</h3>
        <h5>{rt_score}</h5>
        <div className='creators'>
          <p>Director: {director}</p><p>Productor@/s: {producer}</p>
        </div>
        <p>Fecha de salida: {release_date}</p>
      </div>
    </section>
    </>
  )
}