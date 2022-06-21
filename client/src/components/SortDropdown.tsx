import React from 'react'
import { InputLabel, MenuItem, FormControl, Select, SelectChangeEvent } from '@mui/material'

export enum SortValues {
    NAME = 'NAME',
    INTELLIGENCE = 'INTELLIGENCE',    
    DOG_FRIENDLISNESS = 'FRIENDLINESS'
}

export const SortDropdown = ({sortValue, handleSortChange}: { sortValue: string, handleSortChange: any}) => {    
    const handleChange = (e: SelectChangeEvent) => {
        handleSortChange(e.target.value)
    }
    return (
        <>
            <FormControl fullWidth>
                <InputLabel id='sort-dropdown-label'>Sort by</InputLabel>
                <Select
                    labelId='sort-dropdown-label'
                    id='sort-dropdown'
                    value={sortValue}
                    label='Sort by'
                    onChange={handleChange}
                >
                    <MenuItem value={SortValues.NAME}>{SortValues.NAME[0].toUpperCase() + SortValues.NAME.slice(1).toLowerCase()}</MenuItem>
                    <MenuItem value={SortValues.INTELLIGENCE}>{SortValues.INTELLIGENCE[0].toUpperCase() + SortValues.INTELLIGENCE.slice(1).toLowerCase()}</MenuItem>
                    <MenuItem value={SortValues.DOG_FRIENDLISNESS}>{SortValues.DOG_FRIENDLISNESS[0].toUpperCase() + SortValues.DOG_FRIENDLISNESS.slice(1).toLowerCase()}</MenuItem>
                </Select>
            </FormControl>        
        </>
    )
}