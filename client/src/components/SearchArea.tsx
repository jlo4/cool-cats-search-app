import React from "react"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export const SearchArea = (props: any) => {
    return (
      <div className='search-container'>      
        <TextField className='search-input' id='search-input' label='Search by name' type='search' value={props.searchValue} onChange={(e) => props.handleSearchValue(e.target.value)} />
        <Button className='btn-primary' variant='contained' >Search</Button>
      </div>
    )
}