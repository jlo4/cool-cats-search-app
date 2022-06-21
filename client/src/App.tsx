import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './styles/app.scss'
import './styles/components.scss'
import { BreedsContainer } from './components/BreedsContainer'
import { SortDropdown, SortValues } from './components/SortDropdown'
import { SearchArea } from './components/SearchArea'
import { Pager } from './components/Pager'
import { Breed } from '../../types'
const DEFAULT_PAGE = 1
const DEFAULT_PAGE_SIZE = 10


function App() {
  
  const [loading, setLoading] = useState(true)
  const [breeds, setBreeds] = useState<Breed[]>([])
  const [page, setPage] = useState(DEFAULT_PAGE)
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE)
  const [searchValue, setSearchValue] = useState('')
  const [sort, setSortValue] = useState<string>(SortValues.NAME)
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

  useEffect(() => {
      let sortBy = 'name'
      switch(sort) {      
        case SortValues.NAME: 
          sortBy = 'name'
          break
        case SortValues.INTELLIGENCE: 
          sortBy = 'intelligence'
          break
        case SortValues.DOG_FRIENDLISNESS: 
          sortBy = 'dog_friendly'
          break
        default: sortBy = 'name'
      }      
      let sortedBreeds = [...breeds]
      sortedBreeds = sortedBreeds.sort((first, second) => { 
        return (first[sortBy] < second[sortBy]) ? -1 : (first[sortBy] > second[sortBy]) ? 1 : 0
      })      
      setBreeds(sortedBreeds) 
  }, [sort])

  const handleSearchValue = (value: string) => {
    setSearchValue(value)
  }

  const handleSort = (value: string) => {
    setSortValue(value)
  }

  const handleChangePage = (value: number) => {
    setPage(value)
  }

  return (
    <div className="App">
      {!loading ? 
      <>
        <div className='container'>
          <SearchArea handleSearchValue={handleSearchValue} />
          <SortDropdown sortValue={sort} handleSortChange={handleSort}/>          
        </div>
        <div>
          <Pager page={page} pageSize={pageSize} listSize={breeds.length} handleChangePage={handleChangePage}  />
        </div>
        {
          breeds.length > 0 && <BreedsContainer breeds={breeds} page={page} pageSize={pageSize} searchValue={searchValue}/>
        }
        
      </> 
      : 'Loading...'}
    </div>
  )
}

export default App
