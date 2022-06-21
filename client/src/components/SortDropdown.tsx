import React from 'react'
import { InputLabel, MenuItem, FormControl, Select, SelectChangeEvent } from '@mui/material'

export enum SortValues {
    NAME = 'NAME',
    INTELLIGENCE = 'INTELLIGENCE',    
    DOG_FRIENDLISNESS = 'FRIENDLINESS'
}

export const SortDropdown = ({sortValue, handleSortChange}: { sortValue: string, handleSortChange: any}) => {   
    const STRING_BEGIN = 0 
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
                    <MenuItem value={SortValues.NAME}>{SortValues.NAME[STRING_BEGIN].toUpperCase() + SortValues.NAME.slice(STRING_BEGIN + 1).toLowerCase()}</MenuItem>
                    <MenuItem value={SortValues.INTELLIGENCE}>{SortValues.INTELLIGENCE[STRING_BEGIN].toUpperCase() + SortValues.INTELLIGENCE.slice(STRING_BEGIN + 1).toLowerCase()}</MenuItem>
                    <MenuItem value={SortValues.DOG_FRIENDLISNESS}>{SortValues.DOG_FRIENDLISNESS[STRING_BEGIN].toUpperCase() + SortValues.DOG_FRIENDLISNESS.slice(STRING_BEGIN + 1).toLowerCase()}</MenuItem>
                </Select>
            </FormControl>        
        </>
    )
}