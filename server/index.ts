import * as dotenvConfig from 'dotenv'
dotenvConfig.config({
    path: '.env.local'
})
import express from 'express'
const app = express()
const port = process.env.PORT
import { listAllCats } from './api'

const ROUTES = {
    list: '/list'
}

app.get(ROUTES.list, async (req, res) => {
    let cats = await listAllCats()
    res.json(cats)
})

app.listen(port, () => {
    console.log(`Server up on port ${port}`)
})

