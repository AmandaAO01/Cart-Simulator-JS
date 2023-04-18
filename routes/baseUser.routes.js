import express from 'express'
import * as baseUserController from '../controllers/baseUserController.js'

const router = express()
router.post('/user',baseUserController.createBaseUser)
router.get('/users',baseUserController.getBaseUsers)
// router.get('/user',baseUserController.searchUserN)
// router.get('/user/:id',baseUserController.searchUserID)
router.get('/user/:id',baseUserController.searchBaseUser)
// router.put('/user',baseUserController.updateUserN)
router.put('/user/:id',baseUserController.updateBaseUser)
// router.delete('/user',baseUserController.deleteUserFeo)
router.delete('/user/:id',baseUserController.deleteUserL)
// router.delete('/user/:id',baseUserController.deleteUser)
router.get('/user',baseUserController.searchUpdate)

export default router