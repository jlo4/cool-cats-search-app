import React from 'react'
import { distance } from 'fastest-levenshtein'
import '../styles/breedsContainer.scss'
import { Breed } from '../../../types'

interface BreedsContainerProps {
    breeds: Breed[]
    page: number
    pageSize: number
    searchValue: string
}

const BreedItem = ({breed, id}: {
    breed: Breed,
    id: string
}) => {
    return (
        <div className='breed-item' key={id}>
            {breed.name.toString()}
        </div>
    )
}

export const BreedsContainer = ({ breeds, page, pageSize, searchValue  }: BreedsContainerProps) => {    
    const filterSearchValue = (searchValue: string, value: string): boolean => {
        const SEARCH_DISTANCE = 5
        const NOT_INCLUDED = -1
        if (value.toLowerCase().indexOf(searchValue.toLowerCase()) > NOT_INCLUDED || distance(searchValue.toLowerCase(), value.toLowerCase()) < SEARCH_DISTANCE) {
            return true
        }
        return false
    }


    return (
        <div className='breeds-container'>
            {                
                searchValue ? breeds.map((breed) => {                    
                    if (filterSearchValue(searchValue, breed.name.toString())) {
                        return (
                            <BreedItem breed={breed} key={breed.id.toString()} id={breed.id.toString()} />
                        )
                    }
                })
                :
                breeds.slice((page - 1) * pageSize, (page * pageSize)).map((breed) => {
                    return (
                        <BreedItem breed={breed} key={breed.id.toString()} id={breed.id.toString()} />
                    )
                })
            }
        </div>
    )
}