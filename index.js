import express from 'express'
import mongoose from 'mongoose'
import baseUserRoutes from './routes/baseUser.routes.js'

import userRoutes from './routes/user.routes.js'
import productRoutes from './routes/product.routes.js'
import cartRoutes from './routes/cart.routes.js'

const app = express()

app.use(express.json())

// app.use(baseUserRoutes)

app.use(userRoutes)
app.use(productRoutes)
app.use(cartRoutes)
















mongoose.connect('mongodb://localhost:27017/hamanda').then(() => console.log('bd')).catch((error) => console.log('Error en la bd'))

app.listen(3000, () => console.log('Inicio Servidor'))