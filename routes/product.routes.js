import express from 'express'
import * as productController from '../controllers/productController.js'

const router = express()
router.post('/product',productController.createProduct)
router.get('/products',productController.getProducts)
router.get('/product/:id',productController.searchProduct)
router.put('/product/:id',productController.updateProduct)
router.delete('/product/:id',productController.deleteProduct)

export default router