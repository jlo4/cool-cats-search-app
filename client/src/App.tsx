import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import './styles/app.scss'
import './styles/components.scss'
import { BreedsContainer } from './components/BreedsContainer'
import { Breed } from '../../types'
const DEFAULT_PAGE = 1
const DEFAULT_PAGE_SIZE = 10


const SearchArea = (props: any) => {
  return (
    <div className='search-container'>      
      <TextField className='search-input' id='search-input' label='Search by name' type='search' value={props.searchValue} onChange={(e) => props.handleSearchValue(e.target.value)} />
      <Button className='btn-primary' variant='contained' >Search</Button>
    </div>
  )
}

function App() {
  
  const [loading, setLoading] = useState(true)
  const [breeds, setBreeds] = useState<Breed[]>([])
  const [page, setPage] = useState(DEFAULT_PAGE)
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE)
  const [searchValue, setSearchValue] = useState('')
    /*
  useEffect(() => {
    setLoading(false)
  })
*/

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

  const handleSearchValue = (value: string) => {
    setSearchValue(value)
  }

  return (
    <div className="App">
      {!loading ? 
      <>
        <SearchArea handleSearchValue={handleSearchValue} />
        
        <BreedsContainer breeds={breeds} page={page} pageSize={pageSize} searchValue={searchValue}/>
      </> 
      : 'Loading...'}
    </div>
  )
}

export default App
