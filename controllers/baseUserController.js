import BaseUser from '../models/baseUser.js'

export const createBaseUser = async (req, res) => {
    const {name} = req.body
    try {
        const newUser = new BaseUser({
            name
        })
        await newUser.save()
        return res.status(201).send({message:'Se guardó con éxito'})
    } catch (error) {
        return res.status(400).send({message:'Error al guardar'})
    }    
}

export const getBaseUsers = async (req, res) => {
    try {
        const users = await BaseUser.find({})
        return res.status(200).send(users)
    } catch (error) {
        return res.status(400).json({message:'No se pudo encontrar'})
    }
}

export const searchUserN = async (req, res) => {
    try {
        const user = await BaseUser.find({ name: 'hamanda2'})
        return res.status(200).send(user)
    } catch (error) {
        return res.status(404).json({message:'No se pudo encontrar'})
    }
}

export const searchUserID = async (req, res) => {
    try {
        const user = await BaseUser.find({ _id: req.params.id})
        console.log(req.params.id)
        // let {id} = req.params
        // console.log(id)
        return res.status(200).send(user)
    } catch (error) {
        return res.status(404).json({message:'No se pudo encontrar'})
    }
}

export const searchBaseUser = async (req, res) => {
    try {
        const user = await BaseUser.findById(req.params.id)
        if (!user) {
            return res.status(404).json({message:'Usuario no existe'})
        }
        return res.status(200).send(user)
    } catch (error) {
        return res.status(400).json({message:'No se pudo encontrar'})
    }
}

export const updateUserN = async (req, res) => {
    try {
        console.log(req.body._id)
        const userUpdated = await BaseUser.findOneAndUpdate({name: req.body.name}, {name: req.body.newName}, {new: true})
        console.log(userUpdated)
        return res.status(200).send(userUpdated)
    } catch (error) {
        return res.status(400).json({message:'No se pudo actualizar'})
    }
}

export const updateBaseUser = async (req, res) => {
    try {
        const userUpdated = await BaseUser.findByIdAndUpdate(req.params.id, {name: req.body.name}, {new: true})
        console.log(userUpdated)
        if (!userUpdated) {
            return res.status(404).json({message:'Usuario no existe'})
        }
        return res.status(200).send(userUpdated)
    } catch (error) {
        return res.status(400).json({message:'No se pudo actualizar'})
    }
}

export const deleteUserFeo = async (req, res) => {
    try {
        const result = await BaseUser.deleteOne({name: req.body.name})
        console.log(result)
        return res.sendStatus(200)
    } catch (error) {
        return res.sendStatus(400)
    }
}

export const deleteUserL = async (req, res) => {
    try {
        const userDeleted = await BaseUser.findByIdAndUpdate(req.params.id, {active: false})
        console.log(userDeleted)
        if (!userDeleted) {
            return res.status(404).json({message:'Usuario no existe'})
        }
        return res.status(200).json({message:'Eliminado con éxito'})
    } catch (error) {
        return res.status(400).json({message:'No se pudo eliminar'})
    }
}

export const deleteUser = async (req, res) => {
    try {
        const userDeleted = await BaseUser.findByIdAndDelete(req.params.id)
        console.log(userDeleted)
        return res.status(200).json({message:'Eliminado con éxito'})
    } catch (error) {
        return res.status(400).json({message:'No se pudo eliminar'})
    }
}

export const searchUpdate = async (req, res) => {
    try {
        const userSearchName = await BaseUser.findOne({name: req.body.name})
        if (!userSearchName) {
            return res.status(404).json({message:'No se pudo encontrar'})
        }
        console.log(userSearchName._id)
        const userNameUpdated = await BaseUser.findByIdAndUpdate(userSearchName._id, {name: req.body.newName}, {new: true})
        if (!userNameUpdated) {
            return res.status(404).json({message:'No se pudo encontrar'})
        }
        return res.status(200).send(userNameUpdated)
    } catch (error) {
        return res.status(400).json({message:'Error'})
    }
}