import React from 'react'
import { filterSearchValue } from './BreedsContainer'

describe('#BreedsContainer', () => {    
    test('returns true for similar values', () => {
        const filterAccepted = filterSearchValue('bilm', 'Birman')
        expect(filterAccepted).toEqual(true)
    })
    
    test('returns false for values that are not similar', () => {
        const filterAccepted = filterSearchValue('xyz', 'Abyssinian')
        expect(filterAccepted).toEqual(false)
    })
})