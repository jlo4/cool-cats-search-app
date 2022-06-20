import 'dotenv/config'
import express from 'express'
const app = express()
const port = process.env.PORT
import {listAllCats} from './api'

app.get('/', listAllCats)

app.listen(port, () => {
    console.log(`Server up on port ${port}`)
})

