import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { BreedsContainer } from './BreedsContainer'
import { Breed } from '../../types'

function App() {
  const [loading, setLoading] = useState(true)
  const [breeds, setBreeds] = useState<Breed[]>([])
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  useEffect(() => {
    const getBreedsList = async () => {
      const { data } = await axios.get('list') 
      setBreeds(data)      
    }
    getBreedsList()
      .then(() => {        
      })
      .catch((err) => {
        console.error("There was an error getting breeds from the api", err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div className="App">
      {!loading ? <BreedsContainer breeds={breeds} page={page} pageSize={pageSize} /> : 'Loading...'}
    </div>
  )
}

export default App
