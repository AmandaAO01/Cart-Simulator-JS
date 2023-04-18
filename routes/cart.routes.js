import express from 'express'
import * as cartController from '../controllers/cartController.js'

const router = express()
// router.post('/cart/:id',cartController.createCart)
router.get('/carts',cartController.getCarts)
router.get('/cart/:id',cartController.searchCart)
router.put('/cart/:id',cartController.updateCart)
router.delete('/cart/:id',cartController.deleteCart)

export default router