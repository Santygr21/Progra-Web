import React from 'react'
import { Header, MovieCard, Button } from '../../components'

const factURL = 'https://api.themoviedb.org/3/movie/popular?api_key=1487950471386322f9051f8bc7ac3164&language=es&page=1'
console.log(factURL);

 export const fetchFact = async () => {
  return fetch(factURL)
    .then(res => {
      if (!res.ok) {
        throw new Error('Error fetching data from Fact API')
      }
      return res.json()
    })
    .then((data) => {
      const newFact = data.results
      console.log(newFact);
      return newFact
    })
    .catch((e) => {
      console.log(e)
      throw new Error(e)
    })
}

console.log(fetchFact());

export function DashboardPage () {
  
  return (
    <>
      <Header />
      <main>
        <div>
          <h1>Trending</h1>
          <Button />
        </div>
        <div>
          <h1>Find Movies</h1>
          <p>We found <b>Movies</b> for you</p>
          <MovieCard />
        </div>
      </main>
    </>
  )
}