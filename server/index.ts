import * as dotenvConfig from 'dotenv'
dotenvConfig.config({
    path: '.env.local'
})
import express from 'express'
import { Breed } from '../types'
const app = express()
const port = process.env.PORT
import { getBreedById, listAllBreeds } from './api'

const ROUTES = {
    list: '/list',
    getBreedById: '/id/:id'
}

app.get(ROUTES.list, async (req, res) => {
    let breeds = await listAllBreeds()
    res.json(breeds)
})

app.get(ROUTES.getBreedById, async (req, res) => {
    let breedID: string = ''
    let breed: Breed = {}
    if (typeof(req.params.id) === "string") {
        breedID = req.params.id
        breed = await getBreedById(breedID)
    }
    res.json(breed)
})


app.listen(port, () => {
    console.log(`Server up on port ${port}`)
})

