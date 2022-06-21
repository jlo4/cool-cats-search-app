import React from 'react'
import { distance } from 'fastest-levenshtein'
import '../styles/breedsContainer.scss'
import { Breed } from '../../../types'
import { Button } from '@mui/material'

interface BreedsContainerProps {
    breeds: Breed[]
    page: number
    pageSize: number
    searchValue: string
}

export const filterSearchValue = (searchValue: string, value: string): boolean => {
    const SEARCH_DISTANCE = 5
    const NOT_INCLUDED = -1
    if (value.toLowerCase().indexOf(searchValue.toLowerCase()) > NOT_INCLUDED || distance(searchValue.toLowerCase(), value.toLowerCase()) < SEARCH_DISTANCE) {
        return true
    }
    return false
}

const BreedItem = ({breed, id}: {
    breed: Breed,
    id: string
}) => {
    const DEFAULT_WIDTH = 150
    const DEFAULT_HEIGHT = 175

    const handleBreedClick = () => {
        window.open(breed.wikipedia_url, '_blank')
    }

    return (
        <div className='breed-item' key={id}>            
            <Button variant='outlined' color={'info'} className={(breed.wikipedia_url != '' && 'breed-wiki') + ' breed-name'} onClick={() => {if (breed.wikipedia_url != '') { handleBreedClick() }}}>{breed.name.toString()}</Button>
            { 
                breed.image && breed.image.id &&
                    <div className={(breed.wikipedia_url != '' && 'breed-wiki') + ' breed-img-div'}>
                        <img className={'breed-img'} width={DEFAULT_WIDTH} height={DEFAULT_HEIGHT} id={breed.image.id} src={breed.image.url} />
                    </div>            
            }
        </div>
    )
}

export const BreedsContainer = ({ breeds, page, pageSize, searchValue  }: BreedsContainerProps) => {          
    return (
        <div className='breeds-container'>
            {                
                searchValue != '' ? breeds.map((breed) => {                    
                    if (filterSearchValue(searchValue, breed.name.toString())) {
                        return (
                            <BreedItem breed={breed} key={breed.id.toString()} id={breed.id.toString()} />
                        )
                    }
                })
                :
                breeds.length > 0 && breeds.slice((page - 1) * pageSize, (page * pageSize)).map((breed) => {
                    return (
                        <BreedItem breed={breed} key={breed.id.toString()} id={breed.id.toString()} />
                    )
                })
            }
        </div>
    )
}