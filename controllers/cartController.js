import Cart from '../models/cart.js'
import Product from '../models/product.js'

// export const createCart = async (req, res) => {
//     const userId = req.params.id
//     const {items} = req.body
//     let total = 0
//     try {
//         const itemsId = items.map((product) => {
//             return product._id
//         })
//         const values = await Product.find({_id: {$in: itemsId}})
//         values.forEach((object) => {
//             items.forEach((item) => {
//                 if (object._id.toString() === item._id) {
//                     total = (object.price * item.quantity) + total
//                 }
//             })
//         })
//         const itemsInCart = items.map((item) => {
//             return {'itemId': item._id, 'quantity': item.quantity}
//         })
//         const newCart = new Cart({
//             userId,
//             items: itemsInCart,
//             total
//         })
//         await newCart.save()
//         return res.status(201).json({message:'Carrito creado'})
//     } catch (error) {
//         return res.status(400).json({message:'Error al guardar'})
//     }
// }

export const getCarts = async (req, res) => {
    try {
        const carts = await Cart.find({})
        return res.status(200).send(carts)
    } catch (error) {
        return res.status(400).json({message:'No se pudo encontrar'})
    }
}

export const searchCart = async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.id)
        return res.status(200).send(cart)
    } catch (error) {
        return res.status(400).json({message:'No se pudo encontrar'})
    }
}

export const updateCart = async (req, res) => {
    let newTotal = 0
    try {
        const modItems = req.body.items.map((product) => {
            if (product.quantity !== 0) {
                return {'itemId': product._id, 'quantity': product.quantity}
            }            
        }).filter(Boolean)
        const idList = modItems.map((aux) => {
            return aux.itemId
        })
        const products = await Product.find({_id: {$in: idList}})
        modItems.forEach((obj) => {
            products.forEach((producto) => {
                if (obj.itemId === producto._id.toString()) {
                    newTotal = (obj.quantity * producto.price) + newTotal
                }
            })
        })
        const modifiedCart = await Cart.findByIdAndUpdate(req.params.id, {items: modItems, total: newTotal}, {new: true})
        return res.status(200).send(modifiedCart)
    } catch (error) {
        return res.status(400).json({message:'No se pudo encontrar'})
    }
}

export const deleteCart = async (req, res) => {
    try {
        const deletedCart = await Cart.findByIdAndDelete(req.params.id)
        if (!deletedCart) {
            return res.status(404).json({message:'Carrito no existe'})
        }
        return res.status(200).json({message:'Carrito eliminado'})
    } catch (error) {
        return res.status(400).json({message:'Error al eliminar'})
    }
}