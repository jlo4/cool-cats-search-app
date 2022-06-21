import React from "react"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export const SearchArea = ({handleSearchValue}: {handleSearchValue: any}) => {
    const handleSearch = (e: any) => {
      handleSearchValue(e.target.value)
    }
    return (
      <div className='search-container'>      
        <TextField className='search-input' id='search-input' label='Search by name' type='search' onChange={handleSearch} />
        <Button className='btn-primary' variant='contained' >Search</Button>
      </div>
    )
}