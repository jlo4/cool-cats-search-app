import express from 'express'
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello from the server')
})

app.listen(port, () => {
    console.log(`Server up on port ${port}`)
})

