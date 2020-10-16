import express from 'express'
import dotenv   from 'dotenv'
import products from './data/products.js'


dotenv.config()

const app = express()

app.get('/api/products', (req,res ) => {
        res.json(products)
})

const PORT  = process.env.PORT || 5000

app.listen(PORT, console.log(`server is running at port ${PORT}`))


