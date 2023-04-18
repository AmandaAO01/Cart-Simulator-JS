import express from 'express'
import * as userController from '../controllers/userController.js'

const router = express()
router.post('/user',userController.createUser)
router.get('/users',userController.getUsers)
router.get('/user/:id',userController.searchUser)
router.put('/user/:id',userController.updateUser)
router.delete('/user/:id',userController.deleteUser)

export default router