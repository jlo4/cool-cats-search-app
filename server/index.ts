import * as dotenvConfig from 'dotenv'
dotenvConfig.config({
    path: '.env.local'
})
import express from 'express'
import { Breed } from '../types'
const app = express()
const port = process.env.PORT
import { getBreedByName, listAllBreeds } from './api'

const ROUTES = {
    list: '/list',
    getBreedByName: '/name/:name'
}

app.get(ROUTES.list, async (req, res) => {
    let breeds = await listAllBreeds()
    res.json(breeds)
})

app.get(ROUTES.getBreedByName, async (req, res) => {
    let breedName: string = ''
    let breed: Breed = {}
    if (typeof(req.params.name) === "string") {
        breedName = req.params.name
        breed = await getBreedByName(breedName)
    }
    res.json(breed)
})


app.listen(port, () => {
    console.log(`Server up on port ${port}`)
})

