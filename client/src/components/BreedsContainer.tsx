import React from 'react'
import '../styles/BreedsContainer.scss'
import { Breed } from '../../../types'

interface BreedsContainerProps {
    breeds: Breed[]
    page: number
    pageSize: number
}

const BreedItem = ({breed, key}: {
    breed: Breed,
    key: string
}) => {
    return (
        <div className='breed-item' key={key}>
            {breed.id.toString()}
        </div>
    )
}

export const BreedsContainer = ({ breeds, page, pageSize  }: BreedsContainerProps) => {    
    return (
        <div className='breeds-container'>
            {
                breeds.slice((page - 1) * pageSize, (page * pageSize)).map((breed) => {
                    return (
                        <BreedItem breed={breed} key={breed.id.toString()} />
                    )
                })
            }
        </div>
    )
}