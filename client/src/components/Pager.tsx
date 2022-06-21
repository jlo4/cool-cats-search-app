import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'

const Page = ({value, handleClick}: {value: number, handleClick: any}) => {      
    return (
        <Button className='' variant='text' onClick={(e) => {handleClick(value)}}>{value}</Button>
    )    
}

export const Pager = ({page, pageSize, listSize, handleChangePage}: {page: number, pageSize: number, listSize: number, handleChangePage: any}) => {
    const [values, setValues] = useState<number[]>([])
    useEffect(() => {
        const PAGE_START = 1
        let updatedValues = [PAGE_START]
        let totalValues = Math.ceil(listSize / pageSize)
        for (let i = PAGE_START + 1; i <= totalValues; i++) {
            updatedValues.push(i)
        }
        setValues(updatedValues)
    }, [page, pageSize, listSize])

    const handleClick = (newPage: number) => {
        handleChangePage(newPage)
    }

    return (
        <>
            {
                values.length > 0 && values.map((value) => {                    
                    return (                        
                        <Page value={value} handleClick={handleClick} />                            
                    )                        
                })
            }
        </>
    )
}