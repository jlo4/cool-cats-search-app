import React from 'react'

describe('#Pager', () => {    

    test('returns page values', () => {
        const listSize = 85
        const pageSize = 10
        const PAGE_START = 1
        let updatedValues = [PAGE_START]
        let totalValues = Math.ceil(listSize / pageSize)
        for (let i = PAGE_START + 1; i <= totalValues; i++) {
            updatedValues.push(i)
        }
        expect(updatedValues).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    })
    
    test('returns one page', () => {
        const listSize = 0
        const pageSize = 10
        const PAGE_START = 1
        let updatedValues = [PAGE_START]
        let totalValues = Math.ceil(listSize / pageSize)
        for (let i = PAGE_START + 1; i <= totalValues; i++) {
            updatedValues.push(i)
        }
        expect(updatedValues).toEqual([1])
    })
})