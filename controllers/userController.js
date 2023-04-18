import User from '../models/user.js'
import Cart from '../models/cart.js'

export const createUser = async (req, res) => {
    const {name, email, password, adress} = req.body
    try {
        const newUser = new User({
            name,
            email,
            password,
            adress
        })
        await newUser.save()
        const userCart = new Cart({
            userId: newUser._id,
        })
        await userCart.save()
        newUser.cartId = userCart._id
        await newUser.save()
        return res.status(201).json({message:'Usuario creado'})
    } catch (error) {
        return res.status(400).json({message:'Error al guardar'})
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.find({})
        return res.status(200).send(users)
    } catch (error) {
        return res.status(400).json({message:'No se pudo encontrar'})
    }
}

export const searchUser = async (req, res) => {
    try {
        const user = await User.findOne(req.params.id)
        if (!user) {
            return res.status(404).json({message:'Usuario no existe'})
        }
        return res.status(200).send(user)
    } catch (error) {
        return res.status(400).json({message:'No se pudo encontrar'})
    }
}

export const updateUser = async (req, res) => {
    try {
        let body = req.body
        const modUser = await User.findByIdAndUpdate(req.params.id, {name: body.name, email: body.email, password: body.password, adress: body.adress}, {new: true})
        console.log(modUser)
        if (!modUser) {
            return res.status(404).json({message:'Usuario no existe'})
        }
        return res.status(200).send(modUser)
    } catch (error) {
        return res.status(400).json({message:'No se pudo encontrar'})
    }
}

export const deleteUser = async (req, res) => {
    try {
        const userDeleted = await User.findByIdAndUpdate(req.params.id, {active: false})
        if (!userDeleted) {
            return res.status(404).json({message:'Usuario no existe'})
        }
        return res.status(200).json({message:'Eliminado con éxito'})
    } catch (error) {
        return res.status(400).json({message:'No se pudo encontrar'})
    }
}